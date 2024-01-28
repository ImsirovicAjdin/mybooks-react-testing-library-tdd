import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppointmentsDayView from '../AppointmentsDayView';

describe("AppointmentsDayView", () => {
  // Shared test data
  const today = new Date();
//   const twoAppointments = [
//     { startsAt: today.setHours(12, 0) },
//     { startsAt: today.setHours(13, 0) },
//   ];
    const twoAppointments = [
        {
        startsAt: today.setHours(12, 0),
        customer: { firstName: "Ashley" },
        },
        {
        startsAt: today.setHours(13, 0),
        customer: { firstName: "Jordan" },
        },
    ];

  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appointments={[]} />);
    const divElement = screen.getByTestId('appointmentsDayView');
    expect(divElement).toBeInTheDocument();
  });

  it("renders an ol element to display appointments", () => {
    // plain Jest:
    // render(<AppointmentsDayView appointments={[]} />);
    // const listElement = document.querySelector("ol");
    // expect(listElement).not.toBeNull();

    // RTL:
    render(<AppointmentsDayView appointments={[]} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  it("renders an li for each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
  });

  it("renders the time of each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    const firstAppointment = screen.getAllByRole('listitem')[0];
    const secondAppointment = screen.getAllByRole('listitem')[1];
    expect(firstAppointment).toHaveTextContent("12:00");
    expect(secondAppointment).toHaveTextContent("13:00");
  });
  it("initially shows a message saying there are no appointments today", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(screen.getByText("There are no appointments scheduled for today.")).toBeInTheDocument();
  });
  it("selects the first appointment by default", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    expect(document.body.textContent).toContain("Ashley");
  });
  it("has a button element in each li", () => {
    render(
      <AppointmentsDayView
        appointments={twoAppointments}
      />
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    expect(buttons[0].type).toEqual("button");
  });
  it("renders another appointment when button is clicked", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[1]);
    expect(screen.getByText("Jordan")).toBeInTheDocument();
  });
});
