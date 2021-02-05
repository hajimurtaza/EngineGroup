const express = require('express');
var bodyParser = require('body-parser')
const PORT = 8080;
const app = express();
let counter = 0
const response_dict = {
  'Ping': 'OK',
  'Source': 'Sourcecode download link',
  'Email Address': 'murtazahaji2@gmail.com',
  'Referrer': 'Andrew',
  'Phone': '9789302923',
  'Name': 'Murtaza Haji',
  'Resume': 'Resume and cover letter download link',
  'Years': '2.5',
  'Puzzle': ` ABCD
A=<><
B>=><
C<<=<
D>>>=`,
  'Degree': 'Master in Information Systems',
  'Position': 'Software Engineer',
  'Status': 'Yes'
}

app.get('/', (req, res) => { 

  // counter++;
  // console.log(counter)
  //  let queries = []
   console.log(req.query.q)


  // console.log(queries)
   
    const { httpVersion, method, url } = req;
    // console.log(url)


    console.log(
    JSON.stringify({
      timestamp: Date.now(),
      httpVersion,
      method,
      url
    })
  );
    
  res.send(response_dict[req.query.q]);
})


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});