// class Stack {
//     constructor() {
//         this.arr = [] 
//         this.size = 0
//     }

//     push(val) {
//         this.arr[this.size] = val
//         this.size += 1
//     }

//     pop() {
//         const lastElement = this.arr[this.size - 1]
//         this.size -= 1
//         this.arr.length = this.size
//         return lastElement
//     }

//     reverseString(str) {
//         const strArr = str.split('')
//         for (let i = 0; i < strArr.length; i++) {
//             this.push(strArr[i])
//         }

//         for (let i = 0; i < strArr.length; i++) {
//             strArr[i] = this.pop()
//         }

//         let reverseString = strArr.join('')
//         console.log(`Original String ====`, str)
//         console.log(`Reversed String ====`, reverseString)
//     }
// }

// const stack = new Stack()
// stack.reverseString('anil')


class Stack {
    constructor() {
        this.arr = [] 
        this.size = 0
        this.reverseArray = []
    }

    push(str) {
        const strArr = str.split('')
        for (let i = 0; i < strArr.length; i++) {
            this.arr[this.size] = strArr[i]
            this.size += 1
        }
        console.log("Pushed string === ", str)
    }

    pop() {
        const lastElement = this.arr[this.size - 1]
        this.size -= 1
        this.arr.length = this.size
        return lastElement
    }

    reverseString() {
        const sizeIfArray = this.size
        for (let i = 0; i < sizeIfArray; i++) {
            this.reverseArray[i] = this.pop()
        }

        let reverseString = this.reverseArray.join('')
        console.log(`Reversed String ====`, reverseString)
    }
}

const stack = new Stack()
stack.push('anil')
stack.reverseString()