/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/



function fizzBuzz(n) {
    // Code goes here
    
   for (let i = 1; i <= n; i++){
        if (i % 15 === 0){
            console.log('fizzbuzz')
        }

        else if (i % 3 === 0){
            console.log('fizz')
        }

        else if (i % 5 === 0){
            console.log('buzz')
        }
        else  {
            console.log(i)
        }
   }
    
}


module.exports = fizzBuzz

//Parameter - n is a number
//Returns - an array of numbers from 1 to n with multiples of 3 appearing as 'Fizz', multiples of 5 returning 'Buzz', and multiples of 3 and 5 returning 'FizzBuzz'
//Example - 5 would return [1, 2, 'Fizz', 4, 'Buzz]
//Pseudocode - for every number 1 to n, push it to an array, converting them to 'Fizz', 'Buzz', or 'FizzBuzz' for multiples of 3, 5, or 3 & 5 respectively