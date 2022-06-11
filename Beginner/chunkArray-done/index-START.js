/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    // Code goes here
    let newArrs = []

    for (i = 0; i < array.length; i += size) {
        let chunks = array.slice(i, i + size)
        newArrs.push(chunks)
    }

    return newArrs
}


module.exports = chunkArray