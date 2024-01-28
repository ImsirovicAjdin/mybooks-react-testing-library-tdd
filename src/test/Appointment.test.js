// Import necessary libraries and components
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Appointment from '../Appointment';

describe("Appointment", () => {
  it("renders the customer first name", () => {
    const customer = { firstName: "Ashley" };

    // Use the render function from React Testing Library
    render(<Appointment customer={customer} />);

    // Use screen queries to assert the expected outcome
    expect(screen.getByText("Ashley")).toBeInTheDocument();
  });

  it("renders another customer first name", () => {
    const customer = { firstName: "Jordan" };

    // Render the Appointment component with a different customer
    render(<Appointment customer={customer} />);

    // Check if the rendered content includes the name "Jordan"
    expect(screen.getByText("Jordan")).toBeInTheDocument();
  });
});
