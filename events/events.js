const EventEmitter=require("events");//it is a class 
const event=new EventEmitter();//it is a OBJECT
event.on("eventNameAsInJquery",()=>{
    console.log("event created")
})
event.on("eventNameAsInJquery",()=>{
    console.log("event created")
})
event.on("eventNameAsInJquery",()=>{
    console.log("event created")
    
})
event.emit("eventNameAsInJquery")




event.on("callBack",(statusCode,msg)=>{
    console.log(`my status code is ${statusCode} and the page is sety to be ${msg}`)

})
event.emit("callBack",200,"ok")


let m=0;
event.once("aysnc",()=>{
   

    console.log("sayn")

})
event.emit("aysnc")
event.emit("aysnc")//nice