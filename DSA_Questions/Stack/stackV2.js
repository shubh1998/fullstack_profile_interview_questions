class Stack {
    constructor(maxSize=5) {
        this.arr = []
        this.maxStackSize = maxSize
    }

    isEmpty() {
        return `Stack empty ==== ${Boolean(!this.arr.length)}`
    }

    isFull() {
        return `Stack full ==== ${Boolean(this.arr.length === this.maxStackSize)}`
    }

    push(val) {
        if(this.arr.length < this.maxStackSize) {
            if(val) {
                this.arr.push(val)
                return "value Pushed"
            }
            return "Pass valid value in push method !"
        } else {
            return "Stack is full now !"
        }
    }

    pop() {
        if(this.arr.length){
            return `Popped value ${this.arr.pop()}`
        } else {
            return "Stack is empty, Please push some value to pop !"
        }
    }

    peek() {
        if(this.arr.length) {
            return `Peek value ${this.arr[this.arr.length - 1]}`
        } else {
            return "Stack is empty, Please push some value to get its peek !"
        }
    }

    print() {
        return this.arr
    }
}

const myStack = new Stack(5)
console.log(myStack.isEmpty())
console.log(myStack.isFull())
console.log(myStack.pop())
console.log(myStack.push())
console.log(myStack.peek())
console.log(myStack.push(2))
console.log(myStack.push(4))
console.log(myStack.push(6))
console.log(myStack.print())
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.print())
console.log(myStack.push(8))
console.log(myStack.push(10))
console.log(myStack.push(12))
console.log(myStack.push(14))
console.log(myStack.push(16))
console.log(myStack.print())