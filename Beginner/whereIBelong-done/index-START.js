/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/



function whereIBelong(arr, num) {
   // Code goes here
   let index = 0
   for ( let i = 0; i < arr.length; i++){
      if (num > arr[i]){
         index++
      }
   }
   return index
}



module.exports = whereIBelong

//Parameters - arr is an array of numbers and num is a number that will be placed into the array 
//Returns - we are to return a number representing the lowest index at which num can be placed into the array while maintaining numeric order
//Example - ([2, 4, 6, 8], 7)  would return 3 because 7 would be the 4th number in numeric order
//Pseudocode - go through each number of the array, test if num is <, >, or = to the number at that index, and return the index at which num ould fit in numeric order