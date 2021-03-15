const express = require("express");
const app = express();
// app.use((req,res)=>{
//     res.json({
//         name:"Aaron!"
//     })
// })
app.get("/name/:age",(req,res)=>{
    let {age} = req.params;
    res.json({
        name:"aaron",
        age
    })

})
app.get("/demo/byname/:name",(req,res)=>{
    let {name} = req.params;
    res.json({
        name
    })
})
app.get("/demo/byid",(req,res)=>{
    let {id} = req.query;
    res.json({
       id
    })
})


app.listen(3000,()=>{
    console.log("express frame started");
})