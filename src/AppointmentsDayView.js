import React from 'react';
import { appointmentTimeOfDay } from './Appointment';

const AppointmentsDayView = ({ appointments }) => {
  return (
    <div data-testid="appointmentsDayView">
        <ol>
        {appointments.map((appointment, index) => (
            <li key={index} /> // Adding a key for each list item
        ))}
        </ol>
    </div>
  );
};

export default AppointmentsDayView;
