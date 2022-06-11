/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer(array) {
    return array.filter((value) =>{
      return Boolean(value)  
    })
}


module.exports = falsyBouncer

//Parameters - array is an array
//Returm - we are to return a new array with every value of the previous that is not falsy
//Example - [7, null, 0, 8, 'four'] would return [7, 8, 'four']
//Pseudocode - look through the array, push any truthy values to a new array, and return