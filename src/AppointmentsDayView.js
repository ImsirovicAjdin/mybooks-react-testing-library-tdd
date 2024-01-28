import React, { useState } from 'react';
import Appointment, { appointmentTimeOfDay } from './Appointment';

const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);

  return (
    <div data-testid="appointmentsDayView">
        <ol>
        {appointments.map((appointment, i) => (
            <li key={appointment.startsAt}>
                <button type="button" onClick={() => setSelectedAppointment(i)}>
                    {appointmentTimeOfDay(appointment.startsAt)}
                </button>
            </li>
        ))}
        </ol>
        {appointments.length === 0 ? (
            <p>There are no appointments scheduled for today.</p>
        ) : (
            <Appointment {...appointments[selectedAppointment]} />
        )}
    </div>
  );
};

export default AppointmentsDayView;
