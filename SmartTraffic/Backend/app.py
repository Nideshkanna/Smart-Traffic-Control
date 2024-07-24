from flask import Flask, request, jsonify
from traffic_controller import TrafficController
from ai_module import AIPredictor

app = Flask(__name__)
controller = TrafficController()
predictor = AIPredictor()

@app.route('/adjust_signal', methods=['POST'])
def adjust_signal():
    data = request.json
    controller.adjust_signal(data['signal_id'], data['status'])
    return jsonify({'status': 'success'})

@app.route('/predict_traffic', methods=['GET'])
def predict_traffic():
    predictions = predictor.predict()
    return jsonify(predictions)

if __name__ == '__main__':
    app.run(debug=True)
