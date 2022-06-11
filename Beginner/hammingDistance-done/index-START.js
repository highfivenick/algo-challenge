/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    // Code goes here
    let counter = 0
    for(let i = 0; i <= stringA.length; i++){
        if(stringA.charAt(i) != stringB.charAt(i) ){
            counter++
        }
    }
    return counter
}



module.exports = hammingDistance


//Parameters - stringA and stringB are string of equal length
//Returns - total number of character that differ between the two strings
//Example - five, fire would return 1
//Pseudocode - go through each letter and compare if they are the same, if not inncrease counter