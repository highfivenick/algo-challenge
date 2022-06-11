/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    // Code goes here
    let reverse = text.split('').reverse().join('')
    
    console.log(text, reverse)
    if (text == reverse) {
        return true
    }else{
       return false 
    } 

}



module.exports = palindromeChecker;

//Parameters - text is a string of text
//Return - true or false, whether it is a palindrome or not
//Example - emily would return false, otto would return true
//Pseudocode - reverse text and compare it the original string to find out if they are the same