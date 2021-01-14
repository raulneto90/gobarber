import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import CreateAppointmentService from '../CreateAppointmentService';
import FakeAppointmentsRepository from '../../repositories/fakes/FakeAppointmentsRepository';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      providerId: '123123132',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.providerId).toBe('123123132');
  });

  it('should not be able to create two appointments on same date', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      providerId: '123123132',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        providerId: '123123132',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
