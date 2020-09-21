const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const hostname = 'localhost';
const port = 4000;

const url = 'mongodb://localhost:27017/masterpiece';
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

connect.then(() => console.log('Connected to mongo db')).catch(err => console.log(err));
const artistRouter = require('./routes/artistRouter');

const app = express();
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/artists',artistRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}/`);
});