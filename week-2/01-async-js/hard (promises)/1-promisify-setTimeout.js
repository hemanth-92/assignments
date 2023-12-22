/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n){
    return new Promise((resolve,reject)=>{
        // set timeout to delay 
        setTimeout(()=>{
            //after delay is completed then resolve
            resolve();
            // converting milliseconds into seconds
        },n*1000);
    });
}
module.exports = wait;
