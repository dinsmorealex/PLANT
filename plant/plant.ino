#include <Servo.h>

Servo myservo;

void setup(){

myservo.attach(9);
 
    Serial.begin(9600);
  
}

void loop()
{
  String content = "";
  char character;

  /* Get the control input */
  if (Serial.available() > 0) {

    while(Serial.available()) {
      character = Serial.read();
      content.concat(character);
    }

    if (content != "") {
      Serial.println(content);  /* give some feedback */
      content.trim();
      if (content == "N") {
        /* Home team score */
       normal();
      } else if (content == "T") {
        /* Away team score */
        tired();
      } else if (content == "F") {
        /* "Game" type of signal */
        frantic();
      
      }
    }
  }
}

void normal(){
}

void tired(){
}

void frantic (){
}
