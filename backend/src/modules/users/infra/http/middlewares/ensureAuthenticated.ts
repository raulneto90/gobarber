import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '@shared/errors/AppError';

import authConfig from '@config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
  name: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing.', 401);
  }

  try {
    const [, token] = authHeader.split(' ');

    const decoded = verify(token, authConfig.jwt.secret);

    const { sub, name } = decoded as TokenPayload;

    request.user = {
      id: sub,
      name,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT token.', 401);
  }
}
