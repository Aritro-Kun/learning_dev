const express = require('express');
const app = express();

app.get('/health-checkup', function(req,res){
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if(username !== 'aritro' || password !== 'pass'){
    res.status(404).json({
      msg:'Your authentication is wrong'
    })
    return
  }

  if (kidneyId != 1 && kidneyId !== 2){
    res.status(404).json({
      msg:'Something is fishy with the inputs'
    })
    return
  }

  res.json({
    msg:'Your kidney is fine.'
  })
})
app.listen(3000);
