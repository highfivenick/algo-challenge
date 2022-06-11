/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




// function capSentence(text) {
//   // Code goes here

//   //split each word
//   let arr = text.toLowerCase().split(' ')
//   let caps = []

//   //capitalize the first letter of each
//   arr.forEach(e => {
//     caps.push(e[0].toUpperCase() + e.slice(1))

  
//   })
//   //joing to new string
//   return arr.join(' ')
//   //return


// }

// function capSentence(text) {
//   let wordsArray = text.toLowerCase().split(' ')
//   let capsArray = []

//   wordsArray.forEach(word => {
//       capsArray.push(word[0].toUpperCase() + word.slice(1))
//   });

//   return capsArray.join(' ')
// }

//Parameters - text
//Return - string with first letter of each word capitalized
//Example - 'my name' returns 'My Name'
//Pseudocode - split each word, capitalize the first letter of each, joing to new string, return

module.exports = capSentence