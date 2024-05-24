class Stack {
    constructor(maxSize=5) {
        this.arr = []
        this.maxStackSize = maxSize
        this.topElement = null
        this.size = 0
    }

    isEmpty() {
        if(this.size) {
            return `Stack empty ==== No`
        }
        return `Stack empty ==== Yes`
    }

    isFull() {
        return `Stack full ==== ${Boolean(this.size === this.maxStackSize)}`
    }

    push(val) {
        if(this.size < this.maxStackSize) {
            if(val) {
                this.arr[this.size] = val
                this.size += 1
                this.topElement = val
                return "value Pushed"
            }
            return "Pass valid value in push method !"
        } else {
            return "Stack is full now !"
        }
    }

    pop() {
        if(this.size){
            this.size -= 1
            this.topElement = this.arr[this.size]
            this.arr.length = this.size
            return `Popped value ${this.topElement}`
        } else {
            return "Stack is empty, Please push some value to pop !"
        }
    }

    peek() {
        if(this.size) {
            return `Peek value ${this.topElement}`
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