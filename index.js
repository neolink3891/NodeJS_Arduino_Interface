const express = require('express');
const app = express();
const arduino = require('./Routes/arduino');
const path = require('path');
const router = express.Router();
process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/public'));

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/main.html'));
});

app.use('/', router);
app.use('/ard', arduino);
app.listen(process.env.port || 3030);

console.log('Running at Port 3030');
