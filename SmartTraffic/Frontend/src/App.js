import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrafficControl from './components/TrafficControl';
import TrafficPrediction from './components/TrafficPrediction';

function App() {
  const [trafficData, setTrafficData] = useState(null);

  useEffect(() => {
    axios.get('/predict_traffic')
      .then(response => {
        setTrafficData(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h1>SmartTraffic System</h1>
      {trafficData ? (
        <TrafficPrediction data={trafficData} />
      ) : (
        <p>Loading traffic predictions...</p>
      )}
      <TrafficControl />
    </div>
  );
}

export default App;
