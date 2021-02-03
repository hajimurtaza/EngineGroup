const express = require('express');
var bodyParser = require('body-parser')
const PORT = 8080;
const app = express();

app.get('/', (req, res) => {
   
    const { httpVersion, method, url } = req;

    console.log(
    JSON.stringify({
      timestamp: Date.now(),
      httpVersion,
      method,
      url
    })
  );
    // console.log(req)
    res.send('OK');
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});