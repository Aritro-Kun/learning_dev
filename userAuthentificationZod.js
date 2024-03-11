//email and password, validator, in Express using ZOD Library.

const express = require("express");
const app = express();
const z = require("zod");
//
// {
//     email: ___@ gmail.com
//     password: atleast 8 digits
//     country: IN or US
// }
//
//

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    country: z.literal("IN").or(z.literal("US"))
})

app.use(express.json());
app.post("/user-auth", function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const country = req.body.country;
    const User = {
        email: email,
        password: password,
        country: country
    }
    const response = schema.safeParse(User);
    if (!response.success) {
        res.status(411).json({
            msg: 'There is something wrong with inputs.',
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
