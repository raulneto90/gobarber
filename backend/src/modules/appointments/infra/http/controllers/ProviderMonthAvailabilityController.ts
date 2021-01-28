import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

export default class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { month, year } = request.body;
    const { providerId } = request.params;

    const listProvidersAvailability = container.resolve(
      ListProviderMonthAvailabilityService,
    );

    const availability = await listProvidersAvailability.execute({
      providerId,
      month,
      year,
    });

    return response.json(availability);
  }
}
