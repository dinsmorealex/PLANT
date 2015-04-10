var serialport = require('serialport'),// include the library
   SerialPort = serialport.SerialPort, // make a local instance of it
   // get port name from the command line:
   portName = process.argv[2];

   var myPort = new SerialPort("/dev/cu.usbmodem1411",{
   baudRate: 9600,
   // look for return and newline at the end of each data packet:
   parser: serialport.parsers.readline("\r\n")
 });



//email 
var Imap = require('imap'),
inspect = require('util').inspect;

var imap = new Imap({
  user: 'dinsmorealex',
  password: '!Alex1go',
  host: 'imap.gmail.com',
  port: 993,
  tls: true
});
var d = new Date();
var fs = require('fs'), fileStream;


var request;

 var currentCity = "Brooklyn",




 countryCode= "NY",

 temperatureFormat= "F";


 //instagram\
 Instagram = require('instagram-node-lib'),

  Instagram.set('client_id', '2e27747df7ea43559adc7a958d045d62'),
 Instagram.set('client_secret', '4bc0420b26ff49408a09dda4b5179108'),
  Instagram.set('callback_url', 'http://alexdinsmore.com');

  function openInbox(cb) {
  imap.openBox('INBOX', true, cb);
}
imap.on('ready', function() {
  /////////////////////////TIMER FUNCTION----try and get everything inside this
  setInterval(function() { 

//INSTAGRAM
Instagram.tags.info({
  name: 'dinsmorealex',
  complete: function(data){
    console.log(data);
  }
});


 //EMAIL
 openInbox(function(err, box) {

  if (err) throw err;
  imap.search([ 'UNSEEN', ['SINCE', d] ], function(err, results) {
    if (err) throw err;
    var f = imap.fetch(results);

    f.on('message', function(msg, seqno) {    
    });
    f.on('error', function(err) {
      console.log('Fetch error: ' + err);
    });
    f.on('end', function() {

       var emailCount= results.length;
      

                fireItUp(emailCount);
     
      
    });
  });
});

// //WEATHER
// request("http://api.openweathermap.org/data/2.5/weather?q="+currentCity+","+countryCode.toLowerCase()+"", function(error, response, body) {
//         // Send a message back to the
//         // terminal if great success 
//        // console.log("Request Successful");
//        weatherData = JSON.parse(body);

//        city = weatherData.name;

//        if (temperatureFormat === "C") {

//             // Store the current temperature, 
//             // High and Low for the day.

//             temperature = kelvinToCelsius(weatherData.main.temp);
//             temperatureLow = kelvinToCelsius(weatherData.main.temp_min);
//             temperatureHigh = kelvinToCelsius(weatherData.main.temp_max);

//           } else if (temperatureFormat === "F") {

//             temperature = kelvinToFahrenheit(weatherData.main.temp);
//             temperatureLow = kelvinToFahrenheit(weatherData.main.temp_min);
//             temperatureHigh = kelvinToFahrenheit(weatherData.main.temp_max);

//           } else {

//             throw "Invalid Temperature Format!";

//           }

          

//           description = weatherData.weather[0].description;
//           console.log(currentCity, "current temperature-",temperature);

//         fireItUp(); // Send weather data to the screen
//       });

console.log("event triggered!"); }, 3000);
});
function fireItUp(emailCount){

  console.log(emailCount);
  if(emailCount>5){
  myPort.write("N\r");
 			  
  
  	}



  // console.log(currentCity, "current temperature-",temperature +","+description);
}

imap.once('error', function(err) {
  console.log(err);
});

imap.once('end', function() {
  console.log('Connection ended');
});

imap.connect();

function kelvinToFahrenheit(input) {
    input = (input - 273.15) * 1.8000 + 32.00;
    return parseInt(input);
}

function showPortOpen() {
   console.log('port open. Data rate: ' + myPort.options.baudRate);
}
 
function saveLatestData(data) {
   console.log(data);
}
 
function showPortClose() {
   console.log('port closed.');
}
 
function showError(error) {
   console.log('Serial port error: ' + error);
}

//listen  for incoming  messages  from  serial  port, can use on('data')  
myPort.on('data', function  (data){ 
var str = new String(data); 
if(str!='') 
console.log(data);  

}); 