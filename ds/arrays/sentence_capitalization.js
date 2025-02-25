// Make the string lowercarse (toLowerCase)
// Convert string to array (split)
// Capitalize each word (map)
// Convert array back to string

const capitalize = str => {
    return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

console.log(capitalize('Hello World'))