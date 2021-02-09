import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import ListProviderAppointmentService from '@modules/appointments/services/ListProviderAppointmentsService';

export default class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { month, year, day } = request.query;
    const providerId = request.user.id;

    const listProviderAppointments = container.resolve(
      ListProviderAppointmentService,
    );

    const appointments = await listProviderAppointments.execute({
      providerId,
      month: Number(month),
      year: Number(year),
      day: Number(day),
    });

    return response.json(classToClass(appointments));
  }
}
