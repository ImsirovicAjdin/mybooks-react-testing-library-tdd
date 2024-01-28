import React from 'react';
import AppointmentsDayView from './AppointmentsDayView';
import { sampleAppointments } from './sampleData';

const App = () => {
  return (
    <div className="App">
      <AppointmentsDayView appointments={sampleAppointments} />
    </div>
  );
};

export default App;
