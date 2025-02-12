const palindrome = (str) => str.split("").reverse().join("") == str;

console.log(palindrome("cddc"))
console.log(palindrome('Hello'))