import { inject, injectable } from 'tsyringe';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  userId: string;
  month: number;
  year: number;
}

type IResponse = {
  day: number;
  available: boolean;
}[];

@injectable()
export default class ListProviderMonthAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) { }

  public async execute({ userId, month, year }: IRequest): Promise<IResponse> {
    const appointments = await this.appointmentsRepository.findAllInMonthFromProvider(
      { providerId: userId, month, year },
    );
    console.log(appointments);
    return [{ day: 1, available: false }];
  }
}
