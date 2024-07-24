# SmartTraffic System

## Overview

The SmartTraffic system is designed to optimize urban traffic flow using cutting-edge technologies such as IoT sensors, real-time data analytics, and AI-powered predictive analytics. The system allows for remote operation of traffic signals and provides a user-friendly interface to manage and monitor traffic conditions.

## Features

- **Real-Time Traffic Management**: Adjust traffic signals remotely based on real-time data.
- **AI-Powered Predictive Analytics**: Predict traffic patterns and optimize signal timings.
- **User-Centric Design**: Intuitive interface prioritizing safety and accessibility.
- **Sustainability Focus**: Promotes sustainable urban transportation by reducing traffic-related emissions.

## Project Structure

SmartTraffic/
├── backend/
│ ├── app.py
│ ├── ai_module.py
│ ├── traffic_controller.py
│ └── requirements.txt
├── frontend/
│ ├── public/
│ │ ├── index.html
│ ├── src/
│ │ ├── components/
│ │ │ ├── TrafficControl.js
│ │ │ └── TrafficPrediction.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── styles.css
│ ├── package.json
│ └── webpack.config.js
├── iot/
│ ├── traffic_signal.ino
├── README.md
└── LICENSE


## Installation

### Backend

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```

3. Run the Flask app:
    ```bash
    python app.py
    ```

### Frontend

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install the required Node.js packages:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

### IoT

1. Upload the `traffic_signal.ino` code to your Arduino board using the Arduino IDE.

## Usage

- Open the frontend in your browser to interact with the SmartTraffic system.
- Use the buttons to remotely control traffic signals.
- View real-time traffic predictions and optimal signal timings.

## API Endpoints

### Backend

- **Adjust Signal**: `POST /adjust_signal`
  - Request Body: `{ "signal_id": "signal_1", "status": "green" }`
  - Response: `{ "status": "success" }`

- **Predict Traffic**: `GET /predict_traffic`
  - Response: `{ "traffic_density": 0.5, "optimal_signal_timings": { "signal_1": 30, "signal_2": 45 } }`

## Contributing

Contributions are welcome! Please create a pull request or submit an issue if you have any suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
