function print(){
    console.log("help command executed");
    console.log("list of all the commands");
    console.log("1. node main.js tree \"path\" ");
    console.log("2. node main.js organize \"path\" ");
    console.log("3. node main.js help");
}

module.exports = {
    func : print
}