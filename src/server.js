const express = require('express');

var fs = require('fs');
var path = require('path');

var jsonpath = path.join(__dirname, 'test.json');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  fs.readFile(jsonpath, (err, data) => {
    if (err) throw err;
    let jsonres = JSON.parse(data);
    res.json(jsonres)
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);