/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(seconds) {
    return new Promise(resolve=>
        setTimeout(resolve,seconds)) 
}
async function example() {
    // console.log('Start');
    await sleep(2000); // Sleep for 2000 milliseconds
    // console.log('End');
} 
example();

module.exports = sleep;
