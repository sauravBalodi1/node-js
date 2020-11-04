const fs=require("fs")
//fs.writeFile('read.txt',"helo async",
//(err)=>{
//console.log("file is created in async")
//}
//)
 
//overwriting in a file
//fs.appendFile('read.txt',"apeen kra haiiii",(err)=>{
  //  console.log("Task is completed")
//})

fs.readFile('read.txt',"UTF-8",(err,data)=>{
    console.log(data)
})