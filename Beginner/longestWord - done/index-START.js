/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    // Code goes here
    let arr = text.split(' ')
    // console.log(arr)
    const lengthMap = arr.map(x => x.length)
    // console.log(lengthMap)
    let longest =  Math.max(...lengthMap)
    // console.log(longest)
    let result = lengthMap.indexOf(longest)
    return arr[result]
}

//Parameters - text is a string
//Returns - the longest word in the string
//Example - 'random words here' returns 'random'
//Pseudocode - 

module.exports = longestWord