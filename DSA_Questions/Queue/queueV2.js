class Queue {
    constructor(maxSize=5) {
        this.arr = []
        this.maxQueueSize = maxSize
    }

    isEmpty() {
        return `Queue empty ==== ${Boolean(!this.arr.length)}`
    }

    isFull() {
        return `Queue full ==== ${Boolean(this.arr.length === this.maxQueueSize)}`
    }

    enqueue(val) {
        if(this.arr.length < this.maxQueueSize) {
            if(val) {
                this.arr.push(val)
                return "value enqueue"
            }
            return "Pass valid value in enqueue method !"
        } else {
            return "Queue is full now !"
        }
    }

    dequeue() {
        if(this.arr.length){
            return `Dequeued value ${this.arr.shift()}`
        } else {
            return "Queue is empty, Please enqueue some value to dequeue !"
        }
    }

    front() {
        if(this.arr.length) {
            return `Front value ${this.arr[0]}`
        } else {
            return "Queue is empty, Please push some value to get its front !"
        } 
    }

    rear() {
        if(this.arr.length) {
            return `Rear value ${this.arr[this.arr.length-1]}`
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
console.log(myQueue.front())
console.log(myQueue.rear())
console.log(myQueue.enqueue(2))
console.log(myQueue.enqueue(4))
console.log(myQueue.enqueue(6))
console.log(myQueue.print())
console.log(myQueue.dequeue())
console.log(myQueue.print())
console.log(myQueue.dequeue())
console.log(myQueue.front())
console.log(myQueue.rear())
console.log(myQueue.print())
console.log(myQueue.enqueue(8))
console.log(myQueue.enqueue(10))
console.log(myQueue.enqueue(12))
console.log(myQueue.enqueue(14))
console.log(myQueue.enqueue(16))
console.log(myQueue.print())