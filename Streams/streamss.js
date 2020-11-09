//here we are creating a server and a file and as the modification will go on ,we will the live changes ,which we call as streaming
const fs=require('fs')
const http=require('http')
const server=http.createServer();
server.on('request',(req,res)=>{
// fs.readFile("st.txt",(err,data)=>{
//     if(err)return console.log(err)
//     else
//     res.end(data.toString())
// })

//THIS WAS MY OLD WAY,NOW NEXT M DOING STREAMING WAY
const rstream=fs.createReadStream("st.txt")
// rstream.on('data',(chunkData)=>{//data is a property
// res.write(chunkData)
// })
// rstream.on('end',()=>{//data is a property
// res.end()
// })
// rstream.on("error",()=>{
//     res.end("file not found")
// })


//using pipes
rstream.pipe(res)//easy

})
server.listen(8000,"127.0.0.1")//isse server ko shuru kia hai