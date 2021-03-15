//读取系统cpu
const os = require("os");
const cpus = os.cpus();
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log(cpus.length);
console.log(totalMemory/1024/1024/1024," GB");
console.log(freeMemory/1024/1024/1024," GB");

//web 服务
//ajax -->api-->web server(nodeJs)

const http = require("http");
const server = http.createServer(function onRequest(req,res){

    res.end("hello");
})
server.listen(3000,()=>{
    console.log("server successfully started")
});