// Import necessary libraries and components
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { sampleAppointments } from '../sampleData';

describe("App", () => {
  it("renders the AppointmentsDayView", () => {
    render(<App appointments={sampleAppointments} />);
    // Check if the AppointmentsDayView component is rendered
    const appointmentsView = screen.getByTestId('appointmentsDayView');
    expect(appointmentsView).toBeInTheDocument();
  });
});
