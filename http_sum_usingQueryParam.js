const express = require ('express');

const app = express();

function calculateSum (n){
    let sum=0;
    for(let i=0; i<=n; i++){
        sum = sum + i;
    }
    return sum;
}

app.get('/',function(req, res){
    const n=req.query.n;
    const sum = calculateSum(n);
    res.send('Your answer is ' + sum);
})
app.listen(3000);