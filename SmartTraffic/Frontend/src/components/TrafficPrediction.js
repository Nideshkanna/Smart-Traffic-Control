import React from 'react';

const TrafficPrediction = ({ data }) => {
  return (
    <div>
      <h2>Traffic Predictions</h2>
      <p>Traffic Density: {data.traffic_density}</p>
      <h3>Optimal Signal Timings:</h3>
      <ul>
        {Object.keys(data.optimal_signal_timings).map(signal => (
          <li key={signal}>{signal}: {data.optimal_signal_timings[signal]} seconds</li>
        ))}
      </ul>
    </div>
  );
};

export default TrafficPrediction;
