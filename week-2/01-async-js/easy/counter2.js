/* ## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. */

let n = 0;

function myFn(incrementCounter,duration){
    setTimeout(incrementCounter,duration)
}

function incrementCounter(){
    console.log(n++);
    myFn(incrementCounter,1000)
}

incrementCounter();





// (Hint: setTimeout) 