/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    // Code goes here
    let counter = 0
    let str = text.toLowerCase
    let arr = Array.from(str)
    console.log(arr)

    for (let i = 0; i < arr.length; i++){
        if ((arr[i] = 'a') || (arr[i] = 'e') || (arr[i] = 'i') || (arr[i] = 'o') || (arr[i] = 'u' )){
            counter++
            return counter
        }
        console.log(counter)
        return counter
    }

}



module.exports = vowelsCounter;

//Parameters - text is a string 
//Return - Number; the total number vowels inside of text
