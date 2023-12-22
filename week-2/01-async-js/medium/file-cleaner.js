/* ## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is hemanth */

const fs = require("fs");

fs.readFile("file-cleaner.txt","utf-8",(err,data)=>{
    if(err){
        console.error("Error in reading the file : ",err);
        return;
    }
const cleanerData = data.replace(/\s+/g," ");

fs.writeFile("file-cleaner.txt",cleanerData,"utf-8",(err,data)=>{
    if(err){
        console.error("Error in writing the file : ",err);
        return;
    }
    console.log("The cleanerData is  : ",cleanerData);
});
});