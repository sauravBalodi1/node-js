const fs=require('fs')
const bioData={
    name:"saurav",
    age:18,
    stream:"cse"
}
//console.log(bioData.name)
 const j=JSON.stringify(bioData)//converting data into json
// console.log(j)

// const data=JSON.parse(j)
// console.log(data)
// fs.writeFile('jsonFile.json',j,(err)=>{
//     console.log("done")
// })
fs.readFile('jsonFile.json',"utf-8",(err,data)=>{
   console.log(data)
   const orginalData=JSON.parse(data)
   console.log(orginalData)
})

