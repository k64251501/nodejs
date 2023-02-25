const http= require ('http');
const server = http.createServer ((request, response)=>{
      response.writeHead(200,{
        "Content-type":"text/plain"
      })
      response.end('welocome-Node js server')
})
server.listen(8080,(err)=>{
    if (err) throw err
    console.log(`server is Running on: http://localhost:${8080}`)
})