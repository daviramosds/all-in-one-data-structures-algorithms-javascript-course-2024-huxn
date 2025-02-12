class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    get(index) {
        return this.data[index]
    }

    pop() {
        const lastElement = this.data[this.length -1]
        delete this.data[this.length -1]
        this.length--
        return lastElement
    }

    shift() {
        const firstElement = this.data[0]

        // re-indexing

        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.length - 1]
        this.length--
        return firstElement
    }

    delete(index) {

        const item = this.data[index]

        for (let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.length - 1]
        this.length--
        return item;
    }
}

const myNewArray = new MyArray()
myNewArray.push('t1')
myNewArray.push('t2')
myNewArray.push('t3')
myNewArray.push('t4')
myNewArray.push('t5')
console.log(myNewArray)
