const express = require("express");
const app = express();
const z = require("zod");
const schema = z.array(z.number());

app.use(express.json());
app.post("/health-checkup", function(req, res){
    //kidneys has to be an array : [1, 2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if (!response.success) {
        res.status(411).json({
            msg: 'There is something wrong with inputs.'
        })
    } else {
        res.json({
            response
        })
    }
});
app.listen(3000);

//global catches
//to protect backend logic from getting exposed to the front end user, if there is some server breakage.
//app.use(function(err, req, res, next){
    //res.status(500).json({
        //msg:"There is something wrong at our end."
    //})
//})
