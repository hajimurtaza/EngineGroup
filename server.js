const express = require('express');
var bodyParser = require('body-parser');
var puzzle = require('./puzzle');
const PORT = 3000; 
const app = express();


const response_dict = {
  'Ping': 'OK',
  'Source': 'https://github.com/hajimurtaza/EngineGroup',
  'Email Address': 'murtazahaji2@gmail.com',
  'Referrer': 'Andrew Rogers',
  'Phone': '9789302923',
  'Name': 'Murtaza Haji',
  'Resume': 'https://my-profile-docs.s3.amazonaws.com/cover_letter.docx\n https://my-profile-docs.s3.amazonaws.com/Murtaza_Haji_SE.docx',
  'Years': '2.5',
  'Degree': 'Master in Information Systems',
  'Position': 'Software Engineer',
  'Status': 'Yes'
}

app.get('/', (req, res) => { 

   console.log(req.query.q)
   
    const { httpVersion, method, url } = req;

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