const express = require('express');
let app = express.Router();
const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline');
const port = new SerialPort('/dev/cu.usbmodem14101', {baudRate: 9600});

const parser = port.pipe(new ReadLine({delimiter: '\n'}));
const path = require('path');
process.env.PWD = process.cwd();
var cds = "";

app.use(express.static(process.env.PWD + '/public'));

app.get('/', function (req, res) {

});

app.get('/:msg', function (req, res) {
    var nv = req.params.msg.toString().substring(4);
    if(nv.length > 5) {
        res.send(cds);
    } else {
        port.write(req.params.msg + '\n');
    
        res.sendFile(path.join(__dirname + '/thanks.html'));
    }
});

port.on("open", () => {
  console.log('serial port open');
});

parser.on('data', data =>{
    cds = data;

    console.log('got word from arduino:', data);
});

module.exports = app;