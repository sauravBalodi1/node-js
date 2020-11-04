const { O_APPEND } = require("constants");
const r=require("fs");
//r.writeFileSync("file.txt","hello");
const buf_data=r.readFileSync("file.txt","utf-8");
const o=buf_data.toString();
console.log(buf_data);
