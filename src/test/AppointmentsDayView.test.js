import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppointmentsDayView from '../AppointmentsDayView';

describe("AppointmentsDayView", () => {
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
    })
});
