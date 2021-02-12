const express = require('express');
var bodyParser = require('body-parser');
var puzzle = require('./puzzle');
const PORT = 3000; 
const app = express();


const response_dict = {
  'Ping': 'OK',
  'Source': 'Sourcecode download link',
  'Email Address': 'murtazahaji2@gmail.com',
  'Referrer': 'Andrew',
  'Phone': '9789302923',
  'Name': 'Murtaza Haji',
  'Resume': 'Resume and cover letter download link',
  'Years': '2.5',
  'Degree': 'Master in Information Systems',
  'Position': 'Software Engineer',
  'Status': 'Yes'
}

// var answer = function(answer){
//   return console.log( `ABCD
//     A=<><
//     B>=><
//     C<<=<
//     D>>>=)`
// };

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
    
  if (req.query.q == 'Puzzle'){
    var puzzleString = req.query.d.substring(26).replace(/\r?\n|\r/g, ' ').trim();
    res.send(puzzle.solution(puzzleString));
  }
  else{
    res.send(response_dict[req.query.q]);
  }
  
})


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});