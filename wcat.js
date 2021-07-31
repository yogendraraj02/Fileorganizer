let fs = require("fs");
let path = require("path");

let inputArr = process.argv.slice(2);
let commands = [];
let filepaths = [];
for(let i in inputArr){
    let input = inputArr[i];
   
    if( input.length <=2){
        commands.push(input);
    }else{
        filepaths.push(input);
    }
}

for(let i=0;i<commands.length ;i++){
   
  //  console.log("command:",commands[i]);

}
let content = "";
for(let i=0;i<filepaths.length ;i++){
   // console.log("filepaths:",filepaths[i]);
   let doesexist = fs.existsSync(filepaths[i]);
   if( doesexist == false){
       console.log("File doesn't exist");
       return;
   }
    content = content + fs.readFileSync(filepaths[i]) +"\n";
   
   
}
if(commands.length == 0){
    console.log(content);
    return;
}

content = content.split("\n");

//console.log(content);


let issPresent = commands.includes("-s");
let isnPresent = commands.includes("-n"); 
let isbPresent = commands.includes("-b");
let isbnPresent = isnPresent && isbPresent;
let tempArr = [];
//console.log(isbnPresent);

if(isbnPresent){
    let cmd = commands[0];
    if(cmd == "-n"){
        isbPresent = false;
    } else {
        isnPresent = false;
    }

}



if(issPresent){
    
    for(let i = 1; i < content.length; i++){
        if(content[i]== '' && content[i-1] ==''){
            content[i] = null;
        }
        else if(content[i] == ''&& content[i - 1] == null ){
            content[i] = null;
        }
        //console.log(content[i]);
    }

    for(let i =0;i < content.length ; i++){
        if(content[i] !=null){
            tempArr.push(content[i]);
        }
    }
    content = tempArr;
    console.log(content.join("\n"));
}
//console.log(content);


if(isnPresent){
    let num = 1;
    for(let i = 0; i< content.length ;i++){
            content[i] = num++  +"."+  content[i]; 
        
    }
    console.log(content.join("\n"));
}


if(isbPresent){
    let num = 1;
    for(let i = 0; i< content.length ;i++){
        if(content[i] !=''){
            content[i] = num++  +"."+  content[i]; 
        }
    }
    console.log(content.join("\n"));
}


// "/home/hp/Desktop/pp web dev/wcat command/f1.txt"  f1
//"/home/hp/Desktop/pp web dev/wcat command/f2.txt"    //f2
//"/home/hp/Desktop/pp web dev/wcat command/f3.txt"    //f3
