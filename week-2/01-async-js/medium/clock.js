/* Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)
 */

/* setInterval(function(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(`The time is : ${hours} : ${minutes} : ${seconds}`);
},5000);  */


// use setInterval for 1 second
//create a new date object
setInterval(function(){
const date = new Date();

//get the date and time string in local format
const dateTimeString = date.toLocaleString('en-US', {
hour: 'numeric',
minute: 'numeric',
second: 'numeric',
hour12: true,
});

//display the date and time string
console.log(dateTimeString);
},1000);





