let fs = require("fs");
let path = require("path");
let helpObj = require("./command/help");
let treeObj = require("./command/tree");
let organizeObj = require("./command/organize");
let inputArr = process.argv.slice(2);
let cmd = inputArr[0];
let inputpath;
if(inputArr.length==2){
    inputpath = inputArr[1];
}
//console.log(cmd, inputpath);
if(cmd=="tree"){
   treeObj.treeFn(inputpath);
}
else if(cmd=="help"){
    helpObj.func();
}
else if(cmd=="organize"){
    let bname = path.basename(inputpath);
   // console.log(bname);
    organizeObj.func(inputpath);
}
