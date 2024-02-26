//hospital expressjs, assignment
//need to create 4 routes.
//1. GET-user can cheeck how many kidneys they have and their health
//2. POST-User can add a new kideny
//3. PUT-User can replace a kidney, make it healthy
//4. DELETE-User can remove a kidney

const express = require('express');
const app = express();

const users = [{
    name:'Aritro',
    kidneys: [{
        healthy: false
    }]
}]; 

//problem with this inhouse data structure is that, everytime, the code gets restarted, the array gets reset.
//that is exactly why you need databases like postgress, mongodb

app.use(express.json());

app.get('/', function(req, res){
    const aritroKidneys = users[0].kidneys;
    const numberOfKidneys = aritroKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i=0; i<numberOfKidneys; i++){
        if(aritroKidneys[i].healthy == true) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        Kidneys: numberOfKidneys,
        HealthyKidneys: numberOfHealthyKidneys,
        UnhealthyKidneys: numberOfUnHealthyKidneys
    })
})

app.post('/', function(req, res){
    const isHealthy = req.body.isHealthy; //here, isHealthy being a variable helps the user define, whether the kidney be healthy or not.
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: 'Kidney has been added.'
    })
})

//use case: if suppose there are no unhealthy kidneys, but the user tries to replace an unhealthy one with a healthy one
//clearly, we should throw up a 411 error.

app.put('/', function(req, res){
    for (let i=0; i<users[0].kidneys.length; i++){
        if (!users[0].kidneys[i].healthy){
            for (let i=0; i<users[0].kidneys.length; i++){
                users[0].kidneys[i].healthy = true;
            }
            res.json({
                msg:'Healthy kidneys have been added.'
            });
        }
        else{
            res.status(411).json({
                msg:"There is not unhealthy kidney to be replaced."
            })
        }
    }
    
})

//when this be called, the unhealthy kidneys need to be removed.
//if user tries to delete, when they have no unhealthy kidney at the first place. we must return 411 status code.
//for this, the logic for deletion must run only after checking in, that is, there is some unhealthy kidney, then it would proceed off.
app.delete('/', function(req, res){
    if (atLeastOneUnhealthyKidney()){
        const newKidneys = []
        for (let i=0; i<users[0].kidneys.length; i++){
            if (users[0].kidneys[i].healthy==true){
                newKidneys.push({
                    'healthy': true
                })
            }
        }
        users[0].kidneys = newKidneys
        res.json({
            msg:'Unhealthy kidneys have been removed.'
        })
    }
    else{
        res.status(411).json({
            msg:'There is no unhealthy kidney to be removed.'
        })
    }
})

function atLeastOneUnhealthyKidney(){
    let atLeastOneUnhealthyKidney = false;
    for (let i=0; i<users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney;
}
app.listen(3000);