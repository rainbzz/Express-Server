//imports and packages
const express = require('express');
const morgan = require('morgan');
const topSpots = require('./data.json');
const port = 3000;

//create express server
const app = express();

//add routes and middleware
app.use(morgan('combined'));

app.get('/', function(req, res) {
    res.send('anything');
});

app.get('/data', function(req, res) {
    res.json(topSpots);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// export the app
module.exports = app;