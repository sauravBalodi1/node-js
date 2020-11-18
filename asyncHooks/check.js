const async=require("async")

var start=()=>{
    download(()=>{
        process(()=>{
            upload(()=>{
                  del(()=>{
                      console.log("Finished")
                  })
            })
        })
    })
}
var download=(callback)=>{
    console.log("starting download")
    delay();
    console.log("Finished download")
    callback();
}
var process=(callback)=>{
    console.log("starting process")
    delay();
    console.log("Finishing process")
    callback();
}
var upload=(callback)=>{
    console.log("starting UPLOAD")
    delay();
    console.log("Finishing UPLOAD")
    callback();
}
var del=(callback)=>{
    console.log("starting del")
    delay();
    console.log("finishing DELETE")
    callback();
}

var delay=()=>{
for(var i=0;i<1000;i++)
{
    for(var j=0;j<1000;j++)
    {

    }
}
}
start()