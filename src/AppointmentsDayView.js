import React from 'react';
import { appointmentTimeOfDay } from './Appointment';

const AppointmentsDayView = ({ appointments }) => {
  return (
    <div data-testid="appointmentsDayView">
        <ol>
        {appointments.map(appointment => (
            <li key={appointment.startsAt}>
            {appointmentTimeOfDay(appointment.startsAt)}
            </li>
        ))}
        </ol>
    </div>
  );
};

export default AppointmentsDayView;
