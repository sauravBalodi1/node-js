const { O_APPEND } = require("constants");
const r=require("fs");
//r.writeFileSync("file.txt","hello");
const buf_data=r.readFileSync("file.txt");
const o=buf_data.toString();
console.log(buf_data.toString());
