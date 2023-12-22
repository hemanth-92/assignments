/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise');
        },t*1000);
    });
}

function wait2(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise')
        },t*1000);
    });
}

function wait3(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise');
        },t*1000)
    })
}

function calculateTime(t1, t2, t3) {

    const start = Date.now();
    return wait1(t1)
    .then(()=>{
        //console.log("first promise resolved")
        //return next method that return a promise
        return wait2(t2);
    })
    .then(()=>{
        //console.log("second promise resolved")
        return wait3(t3)
    })
    .then(()=>{
        //console.log("third promise is resolved")
        //record time taken to complete
        const end = Date.now();
        const diff = end - start;
        return diff;
    });
}

module.exports = calculateTime;
