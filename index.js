'use strict';

/*************************************************
 * Mock API for troubleshoot and dev suport      *
 *                                               *
 * Created by : R.B. Dias Yapa             *
 *************************************************
 */

const express = require('express');
const cors = require('cors');

// Initializing ExpressJS
const app = express();
app.use(cors());
app.use(express.json());

// Server Startup
var PORT = process.env.PORT || 3000;
app.listen(PORT, function (error) {
    if (error) {
        console.log("error");
    }
    console.log('Service is Running on port ' + PORT);
});

//Initializing routes
app.get('/api/health', function (req, res) {
    res.status(200).send('Mock service is running on PORT ' + PORT);
});

app.put('/api/setTimout/:duration', function (req, res) {

    res.set({
        'Server': 'awselb/2.0',
        'Content-Type': 'text/html',
        'Content-Length': '148',
        'Connection': 'keep-alive',
    });

    setTimeout(function () {
        res.status(504).send('<html>\r\n<head><title>504 Gateway Time-out</title></head>\r\n<body bgcolor="white">\r\n<center><h1>504 Gateway Time-out</h1></center>\r\n</body>\r\n</html>\r\n');
    }, req.params.duration);


});

