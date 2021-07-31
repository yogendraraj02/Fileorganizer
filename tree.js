let fs = require("fs");
let path = require("path");

function tree(srcPath) {
    if (srcPath == undefined)
        srcPath = process.cwd();
        console.log("tree command executed with path",srcPath);
    // console.log("Tree command", srcPath);
    let content = fs.readdirSync(srcPath);
    console.log(content);
    // └──
    // ├──
    let parentFOlderName = path.basename(srcPath);
    let completePath = "└──" + parentFOlderName;   //organizedFiles
    // console.log(completePath);
 
    for (let i = 0; i < content.length; i++) {
        completePath = completePath + "\n\t" + "├──"+content[i];
        typecontent = fs.readdirSync(path.join(srcPath , content[i]));
        //if(fs.lstatSync())
        for(let i = 0; i<typecontent.length;i++){
            completePath = completePath +"\n\t\t" +"├──" + typecontent[i];
        }
        //completePath = completePath +"\n\t\t" +"├──" + typecontent;
       // console.log(completePath)
       // console.log("`````````````````");
    }
    
    console.log(completePath);
}
module.exports = {
    treeFn: tree
}

