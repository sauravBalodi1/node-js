const http=require('http')
const fs=require('fs')
const server=http.createServer((incomingMessage,serverResponse)=>{
  //  console.log(incomingMessage.url)
  if(incomingMessage.url=="/")
    serverResponse.end("This i have created online server")
    else if(incomingMessage.url=="/about")
    serverResponse.end("routed to about page")
    else if(incomingMessage.url=="/userapi")
    {
    fs.readFile(`${__dirname}/NodeApi/userApi.json`,"utf-8",(err,data)=>{
        console.log(data)
        const obj=JSON.parse(data)//converting into object
        serverResponse.end(obj.name)
    })
    fs.writeHead(200,{"content-type":"application/json"})
    }
    else if(incomingMessage.url=="/contact")
    serverResponse.end("contact page")
    else{
     serverResponse.writeHead(404,{"Content-type":"text/html"}) 
    serverResponse.end("<h1>404 error</h1>")
    }
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("the live server is created")
    
 })
// const http = require('http');
// const server = http.createServer((req, res) => {
//   const ip = res.socket.remoteAddress;
//   const port = res.socket.remotePort;
//   res.end(`Your IP address is ${ip} and your source port is ${port}.`);
// }).listen(3000);