import React from 'react';

// Basic implementation of the Appointment component
const Appointment = ({ customer }) => {
  return (
    <div>
      {customer.firstName}
    </div>
  );
};

export default Appointment;
