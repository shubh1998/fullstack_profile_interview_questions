class Queue {
    constructor(maxSize=5) {
        this.arr = []
        this.maxQueueSize = maxSize
        this.front = -1
        this.rear = -1
        this.size = 0
    }

    isEmpty() {
        return `Queue empty ==== ${Boolean(!this.size)}`
    }

    isFull() {
        return `Queue full ==== ${Boolean(this.size === this.maxQueueSize)}`
    }

    enqueue(val) {
        if(this.size < this.maxQueueSize) {
            if(val) {
                if(this.front === -1) { 
                    this.front = 0
                } 
                this.rear += 1
                this.arr[this.rear] = val
                this.size += 1
                return "value enqueue"
            }
            return "Pass valid value in enqueue method !"
        } else {
            return "Queue is full now !"
        }
    }

    dequeue() {
        if(this.size){
            const dequeuedElement = this.arr[this.front]
            for (let i = 0; i < this.size; i++) {
                this.arr[i] = this.arr[i+1]                
            }
            this.arr.length = this.arr.length - 1
            this.rear -= 1
            this.size -= 1
            return `Dequeued value ${dequeuedElement}`
        } else {
            return "Queue is empty, Please enqueue some value to dequeue !"
        }
    }

    getFront() {
        if(this.size) {
            return `Front value ${this.arr[this.front]}`
        } else {
            return "Queue is empty, Please push some value to get its front !"
        } 
    }

    getRear() {
        if(this.size) {
            return `Rear value ${this.arr[this.rear]}`
        } else {
            return "Queue is empty, Please push some value to get its rear !"
        } 
    }

    print() {
        return this.arr
    }
}

const myQueue = new Queue(5)
console.log(myQueue.isEmpty())
console.log(myQueue.isFull())
console.log(myQueue.dequeue())
console.log(myQueue.enqueue())
console.log(myQueue.getFront())
console.log(myQueue.getRear())
console.log(myQueue.enqueue(2))
console.log(myQueue.enqueue(4))
console.log(myQueue.enqueue(6))
console.log(myQueue.print())
console.log(myQueue.dequeue())
console.log(myQueue.print())
console.log(myQueue.dequeue())
console.log(myQueue.getFront())
console.log(myQueue.getRear())
console.log(myQueue.print())
console.log(myQueue.enqueue(8))
console.log(myQueue.enqueue(10))
console.log(myQueue.enqueue(12))
console.log(myQueue.enqueue(14))
console.log(myQueue.enqueue(16))
console.log(myQueue.print())