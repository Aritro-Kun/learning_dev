
const express = require ('express');
const app = express();
const port = 3000;

app.get("/route-handler", function(req, res) {
    res.json({
        name:'Aritro',
        age: '18'
    })
})

app.get('/', function(req, res){
  res.send('Hello World!');
})

app.listen(port);

