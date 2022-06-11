/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    // Code goes here
    n = n + 1
    let arr = [0, 1]
    for (let i = 1; i <= n; i++){
        arr.push(arr[i] + arr[i -1])
    }
    console.log(arr[n])
    return arr[n]
}

module.exports = fibonacci

//Parameters - n is a number representing the index of the sequence
//Return - the number at the nth index
//Example - 5th index in the sequence returns 8
//Pseudocode - for 



//Emily solution
// function fibonacci(n) {
    // Code goes here
//     let previousNum = 0
//     let currentNum = 1
//     let counter = 1
//     while (counter <= n) {
//         let sum = 0
//         sum = previousNum + currentNum
//         previousNum = currentNum;
//         currentNum = sum
//         counter++
//       }
//     return currentNum

// }