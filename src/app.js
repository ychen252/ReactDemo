// dev
const express = require("express");
const http = require('http');
const models = require('../models');
const app =  express();

app.get('/create',async (req,res)=>{
    let {firstName,lastName,email} = req.query;
    let user = await models.User.create({
        firstName,
        lastName,
        email
    })
    console.log(user);
    res.json({message: "created successfully"});
})
app.get('/list', async(req,res)=>{
    let list = await models.User.findAll();
    res.json(list);

})
app.get("/detailById", async (req, res) => {
    let { id } = req.query;
    let byId = await models.User.findAll({
        where: {
            id
        }
    })
    res.json(byId);

})
app.get("/detailByName", async (req, res) => {
    let { name } = req.query;
    let byName = await models.User.findAll({
        where: {
            firstName:name,
        }
    })
    res.json(byName);
})

app.listen(3000,()=>{
    console.log("server started!!!!!!!!!!");
})

// const server = http.createServer((req,res)=>{
//     res.end("hello!!!");
// })
// server.listen("3000",()=>{
//     console.log("server started!!!!!!!!!!");
// })dd



//127.0.0.1:3000/create?firstName=Aaron&lastName=Chen&email=xxxx@gmail.com
