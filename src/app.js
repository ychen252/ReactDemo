// dev
const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("hello 2e2232ewerww!2!");
})
server.listen("3000",()=>{
    console.log("server started!!!!!");
})




