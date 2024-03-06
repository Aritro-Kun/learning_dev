//code on middleware, involving the next function, and the middleware application, basics.

const express = require('express');
const app = express(); 
function usermiddleware(req, res, next){
  let username = req.headers.username;
  let password = req.headers.password;
  if (username!= 'aritro' && password != 'pass') {
    res.status(404).json({
      msg:'Wrong auth info.'
    })
  }
  else {
    next();
  }
};

function kidneymiddleware(req, res, next) {
  let kidney = req.headers.kidney;
  if (kidney != 1 || kidney != 2) {
    res.status(404).json({
      msg:'Your kidney input is wrong.'
    })
  }
  else {
    next();
  }
};

let requestnumbers = 0;
function calculateRequests (req, res, next) {
  requestnumbers ++;
  console.log(requestnumbers);
}

app.get("/kidney-checkup",calculateRequests, usermiddleware, kidneymiddleware, function(req, res){
  res.send("Your kidney is fine.")
})

app.get("/heart-checkup",calculateRequests, usermiddleware, function(req, res){
  res.send("Your hearth is healthy.")
})


app.listen(3000);