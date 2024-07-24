import React from 'react';
import axios from 'axios';

const TrafficControl = () => {
  const adjustSignal = (signalId, status) => {
    axios.post('/adjust_signal', { signal_id: signalId, status })
      .then(response => {
        console.log(response.data);
      });
  };

  return (
    <div>
      <h2>Control Traffic Signals</h2>
      <button onClick={() => adjustSignal('signal_1', 'green')}>Set Signal 1 Green</button>
      <button onClick={() => adjustSignal('signal_1', 'red')}>Set Signal 1 Red</button>
      <button onClick={() => adjustSignal('signal_2', 'green')}>Set Signal 2 Green</button>
      <button onClick={() => adjustSignal('signal_2', 'red')}>Set Signal 2 Red</button>
    </div>
  );
};

export default TrafficControl;
