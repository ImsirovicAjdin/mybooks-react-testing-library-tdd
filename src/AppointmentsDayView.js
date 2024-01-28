import React from 'react';
import Appointment, { appointmentTimeOfDay } from './Appointment';

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
        {appointments.length === 0 ? (
            <p>There are no appointments scheduled for today.</p>
        ) : (
            <Appointment {...appointments[0]} />
        )}
    </div>
  );
};

export default AppointmentsDayView;
