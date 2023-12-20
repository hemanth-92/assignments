/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    //[1,2,33,-1]
    let largestElement = numbers[0];
    //call back fn so check the numbers in the array
    numbers.forEach((number) => {
        if(number > largestElement){
            largestElement = number;
        }
    });
    return largestElement;
}

module.exports = findLargestElement;