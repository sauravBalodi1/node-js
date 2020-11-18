const async=require("async")

// var start=()=>{
//     download(()=>{
//         process(()=>{
//             upload(()=>{
//                   del(()=>{
//                       console.log("Finished")
//                   })
//             })
//         })
//     })
// }

var start=()=>{
    console.log("starting")
    async.waterfall([download,process,upload,del],(err,data)=>{
           if(err)
           console.log(`Error is :${err}`)
           else
           console.log(`Everything is done`)
    })
}
var download=(callback)=>{
    console.log("starting download")
    delay();
    console.log("Finished download")
    callback(null,"passing data to process USING CALLBACK");
}
var process=(data,callback)=>{
    console.log("starting process")
    console.log(`the data is: ${data}`)
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