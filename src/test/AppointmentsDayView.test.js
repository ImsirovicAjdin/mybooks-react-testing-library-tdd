import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppointmentsDayView from '../src/AppointmentsDayView';

describe("AppointmentsDayView", () => {
    it("renders a div with the right id", () => {
        render(<AppointmentsDayView appointments={[]} />);
        const divElement = screen.getByTestId('appointmentsDayView');
        expect(divElement).toBeInTheDocument();
    });
});
