/* ## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. */

const fs = require("fs");
// const filePath = 'week-2/01-async-js/easy/write.txt';

fs.writeFile("write.txt","Im learning async js and promises","utf-8",(err,data)=>{
    if(err){
        console.error("Error reading the file :",err);
        return;
    }
    console.log("Data written");
});

fs.readFile("write.txt","utf-8",(err,data) =>{
    if(err){
        console.error("Error Reading the file:",err);
    }else{
        console.log("File content : ",data);
    }
});
