const express = require('express'); //Import express
const app = express();
const port = 3000; //call port

app.get('/', (req, res) => {    //get route
  res.send('Hello World!');
});

app.listen(port, () => { //port listen main.js
  console.log(`Example app listening at http://localhost:${port}`);
});
