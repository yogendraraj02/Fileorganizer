let fs = require("fs");

let path =  require("path");

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function organizeFunc(src){
    // to make different types of folders
    console.log("organize command executed with path",src);
    let destpath;
    if(src==undefined){
        console.log("Enter again");
        return; 
    }
    else{
        
       if(fs.existsSync(src)){
           destpath = path.join(src,"organizedFiles");
           if(fs.existsSync(destpath)==false){
               fs.mkdirSync(destpath);
           }
       }
       else{
           console.log("Path doesn't exist");
           return;

       }
    
       createFolders(src,destpath);

    }
    
}

function createFolders(src,destpath){
    let files = fs.readdirSync(src);
    //console.log(folders);
    let fpath;
    for(let i=0;i<files.length;i++){
          fpath = path.join(src,files[i]);
        
        let arr = (files[i].split('.'));
        let ext = arr[arr.length - 1];
        let categoryfolders = fs.readdirSync(destpath);  //archieves media ...
        
        for(let type in types){
            
            let typearr = (types[type]);
            let fp = path.join(destpath,type);
            if(fs.existsSync(fp)==false){
             fs.mkdirSync(fp);
            }




            for(let j=0;j<typearr.length;j++){
                
                if(ext == typearr[j]){
                    fs.copyFileSync(fpath, path.join(fp,files[i]));
                    fs.unlinkSync(fpath);
                    
                   
                }
            }

        }

       // console.log(ext);
        
    }
    console.log("Files moved with known extensions");
    let dpath = path.join(destpath,"others");
    if(fs.existsSync(dpath)==false){
        fs.mkdirSync(dpath);
    }
    for(let i=0;i<files.length;i++){
       // console.log("remaining files",files[i]);
       fpath = path.join(src,files[i]);
       let bname = path.basename(fpath);
       if(bname=="organizedFiles"){
           continue;
       }
       let isFile =  fs.lstatSync(fpath).isFile();
       if(isFile){
       fs.copyFileSync(fpath,path.join(dpath,files[i]));
       fs.unlinkSync(fpath);
       }else{
           
           fs.renameSync(fpath,path.join(dpath,files[i]));
            
       }
       
       
    }
    console.log("Others file/folders moved to #others folders");

}



module.exports = {
    func : organizeFunc
}
