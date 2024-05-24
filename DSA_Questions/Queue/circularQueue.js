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
        if(!val) {
            return "Pass valid value in enqueue method !"
        }
        if(this.size !== this.maxQueueSize) {
            if (this.rear == this.maxQueueSize - 1) {
                this.rear = 0;
            } else {
                this.rear++;
            }
            this.arr[this.rear] = val
            this.size += 1
            
            if(this.front === -1) { 
                this.front = 0
            }
            return "value enqueue"
        } 
    }

    dequeue() {
        if(this.size !== 0){
            const dequeuedElement = this.arr[this.front]
            this.arr[this.front] = null
            if(this.front === this.maxQueueSize - 1) {
                this.front = 0
            } else {
                this.front += 1
            }
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
console.log(myQueue.enqueue(10))
console.log(myQueue.enqueue(20))
console.log(myQueue.dequeue())
console.log(myQueue.print())
console.log(myQueue.enqueue(30))
console.log(myQueue.enqueue(40))
console.log(myQueue.enqueue(50))
console.log(myQueue.enqueue(60))
console.log(myQueue.dequeue())
console.log(myQueue.enqueue(222))
console.log(myQueue.print())
console.log(myQueue.getFront())
console.log(myQueue.getRear())