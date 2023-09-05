const app= require('express')();
const UserRoute=require('./route/UserRoute')
const bodyParser = require('body-parser')
const PORT = 3002
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/user", UserRoute)

app.listen(PORT,(err)=>{
    if(err) 
    console.log('error in listen')
    console.log("listenin the port 3002 ")
})
