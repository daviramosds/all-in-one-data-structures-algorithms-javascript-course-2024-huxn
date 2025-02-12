const groceries = ['milk', 'bread', 'eggs', 'flour', 'chesse', 'sugar']

const searchForItem = (item) => {

    // O(n)
    for (let i = 0; i < groceries.length; i++) {
        if (item == groceries[i]) {
            console.log(item)
        }
    }

    for (let j = 0; j < groceries.length; j++) {
        if (item == groceries[j]) {
            console.log(item)
        }
    }
}

searchForItem('milk')