import React from "react";

// Function to format the appointment time
export const appointmentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(":");
  return `${h}:${m}`;
};

// Implementation of the Appointment component
const Appointment = ({ customer }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <td>{customer.firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{customer.lastName}</td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>{customer.phoneNumber}</td>
          </tr>
          <tr>
            <th>Stylist</th>
            <td>{customer.stylist}</td>
          </tr>
          <tr>
            <th>Service</th>
            <td>{customer.service}</td>
          </tr>
          <tr>
            <th>Notes</th>
            <td>{customer.notes}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Appointment;
