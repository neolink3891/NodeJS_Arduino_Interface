var express = require('express');
var app = express();
const arduino = require('./Routes/arduino');

app.use('/',dashborad)
app.use('/blogs',blogs)
app.use('/settings',settings)
app.listen(8000, function () {
    console.log('Listening to Port 8000');
});