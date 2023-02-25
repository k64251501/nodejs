const http= require ('http');
const fs = require ('fs');
const server= http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'})
    fs.readFile('index.html','utf-8',(err,data)=>{
        response.end(data)
    })
})
server.listen(8080,'127.0.0.1',()=>{
    console.log(`serveris running on .......http://127.0.0.1:8080`)
})