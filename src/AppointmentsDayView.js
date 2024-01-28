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
        <p>There are no appointments scheduled for today.</p>
    </div>
  );
};

export default AppointmentsDayView;
