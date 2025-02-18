function intReversal(int) {
    const reversed = int.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(int)
}

console.log(intReversal(1234))