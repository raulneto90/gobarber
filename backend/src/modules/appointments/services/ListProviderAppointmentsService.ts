import { inject, injectable } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import { classToClass } from 'class-transformer';

interface IRequest {
  providerId: string;
  month: number;
  year: number;
  day: number;
}

@injectable()
export default class ListProviderAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) { }

  public async execute({
    providerId,
    month,
    year,
    day,
  }: IRequest): Promise<Appointment[]> {
    let appointments = await this.cacheProvider.recover<Appointment[]>(
      `provider-appointments:${providerId}:${year}-${month}-${day}`,
    );

    if (!appointments) {
      appointments = await this.appointmentsRepository.findAllInDayFromProvider(
        {
          providerId,
          month,
          year,
          day,
        },
      );

      await this.cacheProvider.save(
        `provider-appointments:${providerId}:${year}-${month}-${day}`,
        classToClass(appointments),
      );
    }

    return appointments;
  }
}
