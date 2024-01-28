import React from "react";
export const appointmentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(":");
  return `${h}:${m}`;
};

// Basic implementation of the Appointment component
const Appointment = ({ customer }) => {

  // Existing exports and components

  return <div>{customer.firstName}</div>;
};

export default Appointment;
