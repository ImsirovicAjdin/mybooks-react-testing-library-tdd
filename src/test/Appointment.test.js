// Import necessary libraries and components
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Appointment from '../Appointment';

describe("Appointment", () => {
  const customer = { 
    firstName: "Ashley",
    lastName: "Smith",
    phoneNumber: "123456789",
    stylist: "Jane Doe",
    service: "Haircut",
    notes: "Has allergy to certain hair products"
  };

  it("renders the customer first name", () => {
    // Use the render function from React Testing Library
    render(<Appointment customer={customer} />);

    // Use screen queries to assert the expected outcome
    expect(screen.getByText("Ashley")).toBeInTheDocument();
  });

  it("renders another customer first name", () => {
    // Render the Appointment component with a different customer
    render(<Appointment customer={{...customer, firstName: "Jordan"}} />);

    // Check if the rendered content includes the name "Jordan"
    expect(screen.getByText("Jordan")).toBeInTheDocument();
  });

  it("renders the customer last name", () => {
    // Render and check for customer's last name
    render(<Appointment customer={customer} />);
    expect(screen.getByText("Smith")).toBeInTheDocument();
  });

  it("renders the customer telephone number", () => {
    // Render and check for customer's phone number
    render(<Appointment customer={customer} />);
    expect(screen.getByText("123456789")).toBeInTheDocument();
  });

  it("renders the stylist name", () => {
    // Render and check for stylist's name
    render(<Appointment customer={customer} />);
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });

  it("renders the salon service", () => {
    // Render and check for salon service
    render(<Appointment customer={customer} />);
    expect(screen.getByText("Haircut")).toBeInTheDocument();
  });

  it("renders the appointment notes", () => {
    // Render and check for appointment notes
    render(<Appointment customer={customer} />);
    expect(screen.getByText("Has allergy to certain hair products")).toBeInTheDocument();
  });
  it("renders the appointment time as a heading", () => {
    const customer = {
      firstName: "Ashley",
      lastName: "Smith",
      phoneNumber: "123456789",
      stylist: "Jane Doe",
      service: "Haircut",
      notes: "Has allergy to certain hair products"
    };
    const appointment = { 
      startsAt: new Date().setHours(12, 0),
      customer
    };
    render(<Appointment customer={appointment.customer} startsAt={appointment.startsAt} />);
    expect(screen.getByRole('heading')).toHaveTextContent("12:00");
  });
});
