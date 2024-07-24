int greenPin = 2;
int yellowPin = 3;
int redPin = 4;

void setup() {
  pinMode(greenPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);
  pinMode(redPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    String command = Serial.readString();
    if (command == "green") {
      digitalWrite(greenPin, HIGH);
      digitalWrite(yellowPin, LOW);
      digitalWrite(redPin, LOW);
    } else if (command == "yellow") {
      digitalWrite(greenPin, LOW);
      digitalWrite(yellowPin, HIGH);
      digitalWrite(redPin, LOW);
    } else if (command == "red") {
      digitalWrite(greenPin, LOW);
      digitalWrite(yellowPin, LOW);
      digitalWrite(redPin, HIGH);
    }
  }
}
