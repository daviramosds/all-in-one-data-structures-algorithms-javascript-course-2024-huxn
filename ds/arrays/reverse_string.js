// easy 
const reverseString = (str) => str.split("").reverse().join("")

// i guess i know what i am doing
function ReverseString(str) {
    var strArray = []
    var invertedArray = []
    var finalStr = ''

    // Converting str into array
    for (let i = 0; i < str.length; i++) {
        strArray.push(str[i])
    }

    // Reversing the array
    for (let i = strArray.length - 1; i >= 0; i--) {
        invertedArray.push(strArray[i])
    }

    for (let item of invertedArray) {
        finalStr += item
    }

    return finalStr
}

const reverse = ReverseString('Hello')
console.log(reverse)