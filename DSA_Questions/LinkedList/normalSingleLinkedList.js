/**
 * In Linked List, We have concept of node which have some value and next property which 
 * contains address of another node
 * 
 * 1. Node has value and next property
 * 2. Head points to first node in linked list and it can be updated or removed, When we 
 * remove head, the next node becomes head of linked list.
 * 3. Tail points to first node in linked list and it can be updated or removed, When we 
 * remove tail, the previous node becomes tail of linked list. and when we add new node at
 * the end of linked list, the new node becomes tail of linked list.
 * 
 * @Note At the start of linked list, When we only have a single node then Head and tail are 
 * the same. Tail is the last end of linked list in which node have next property which point 
 * to null that means no other nodes exist after this node.
 */


class Node {
    constructor(value) { 
        this.val= value
        this.next= null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    getHead() { 
        if(this.head === null) return "List is empty, Add Nodes to get Head !"
        return `Head of list======> ${JSON.stringify(this.head)}` 
    }

    getTail() {
        if(this.head === null) return "List is empty, Add Nodes to get Tail !"
        return `Tail of list======> ${JSON.stringify(this.tail)}` 
    }

    getSize() {
        return `Size of list======> ${this.size}` 
    }

    appendNode({ value }) {
        const node = new Node(value)
        let currentNode
        if(this.head === null && this.tail === null) {
            this.head = this.tail = node
        } else {
            currentNode = this.head
            while(currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
            this.tail = node
        }
        this.size++;
        return "Node Added Successfully."
    }

    traverseNodesValues() { 
        let currentNode = this.head
        const arrValues = []
        while (currentNode.next) {
            arrValues.push(currentNode.val)
            currentNode = currentNode.next
        }
        arrValues.push(currentNode.val)
        return `All Node Traversed And theirs values are => ${arrValues}`
    }

    updateNodeValuesAtPosition({ index, newValue=0 }) { 
        if(index < 0) return "Pass valid index to update Node value !"
        if(index > this.size) return `Pass valid index to update Node value in List. Use index from ${0} to ${this.size}`
        if(this.head === null) return "List is empty, Add Nodes to update node values !"
        let currentNode = this.head

        for (let count = 0; count <= index; count++) {
            if(count === index) {
                currentNode.val = newValue
            }
            currentNode = currentNode.next
        }
        return `Node's value at index ${index} updated with new value ${newValue}`
    }

    searchValueInNode({ searchValue = 0 }) {  
        if(this.head === null) return "List is empty, Add Nodes to search node value !"
        if(searchValue === this.head.val) return `Value ${searchValue} find on node present at index 0`
        if(searchValue === this.tail.val) return `Value ${searchValue} find on node present at index ${this.size-1}`
        
        let currentNode = this.head
        let index = 0
        while (currentNode.next) {
            if(currentNode.val === searchValue) {
                return `Value ${searchValue} find on node present at index ${index}`
            }
            currentNode = currentNode.next
            index++
        }
        return `No value like ${searchValue} found !`
    }

    removeNodeFromIndex({ index = 0 }) {   
        if(index < 0) return "Pass valid index to remove Node from list !"
        if(index > this.size) return `Pass valid index to remove Node from List. Use index from ${0} to ${this.size}`
        let currentNode = this.head
        if(index === 0) {
            this.head = this.head.next
            this.size--
            return `Removed node from index ${index} successfully.`
        }
    
        for (let count = 1; count <= index; count++) {
            if(count === index) {
                currentNode.next = currentNode.next.next
            }
            currentNode = currentNode.next
        }
        this.size--
        return `Removed node from index ${index} successfully.`
    }

    addNodeOnIndex({ index = 0, value = 0 }) { 
        if(this.head === null) return "List is empty, append Node first !"
        if(index < 0) return "Pass valid index to add Node in list !"
        if(index > this.size) return `Pass valid index to add Node in List. Use index from ${0} to ${this.size}`
        
        const newNode = new Node(value)
        if(index === 0) {
            newNode.next = this.head
            this.head = newNode
            this.size++
            return `New node Added at ${index} index successfully.`
        }
        if(this.size === index) {
            this.tail = newNode
        }
        
        let currentNode = this.head
        for (let count = 1; count <= index; count++) {
            if(count === index) {
                newNode.next = currentNode.next
                currentNode.next = newNode
                break;
            }
            currentNode = currentNode.next
        }
        this.size++
        return `New node added at index ${index} successfully.`
    }
}

const myList = new LinkedList()
console.log(myList.appendNode({ index: 0, value: 200 }))
console.log(myList.getHead())
console.log(myList.getTail())
console.log(myList.getSize())
console.log(myList.searchValueInNode({searchValue: 10}))
console.log(myList.updateNodeValuesAtPosition({index:-1, newValue: 0}))
console.log(myList.updateNodeValuesAtPosition({ index: 0 }))
console.log(myList.appendNode({ value: 1 }))
console.log(myList.appendNode({ value: 2 }))
console.log(myList.appendNode({ value: 3 }))
console.log(myList.traverseNodesValues())
console.log(myList.getHead())
console.log(myList.getTail())
console.log(myList.getSize())
console.log(myList.updateNodeValuesAtPosition({ index: 0 }))
console.log(myList.updateNodeValuesAtPosition({ index: 1, newValue: 1 }))
console.log(myList.updateNodeValuesAtPosition({ index: 2, newValue: 2 }))
console.log(myList.traverseNodesValues())
console.log(myList.getHead())
console.log(myList.getTail())
console.log(myList.getSize())
console.log(myList.appendNode({ value: 3 }))
console.log(myList.traverseNodesValues())
console.log(myList.getTail())
console.log(myList.getSize())
console.log(myList.searchValueInNode({ value: 4 }))
console.log(myList.appendNode({ value: 5 }))
console.log(myList.traverseNodesValues())
console.log(myList.getTail())
console.log(myList.getSize())
console.log(myList.searchValueInNode({ searchValue: 5 }))
console.log(myList.searchValueInNode({ searchValue: 0 }))
console.log(myList.searchValueInNode({ searchValue: 15 }))
console.log(myList.removeNodeFromIndex({ index:-1 }))
console.log(myList.removeNodeFromIndex({ index: 0 }))
console.log(myList.getHead())
console.log(myList.removeNodeFromIndex({ index: 2 }))
console.log(myList.getHead())
console.log(myList.appendNode({ value: 6 }))
console.log(myList.getHead())
console.log(myList.getTail())
console.log(myList.getSize())
console.log(myList.getTail())
console.log(myList.removeNodeFromIndex({ index: 2 }))
console.log(myList.getHead())
console.log(myList.getSize())
console.log(myList.getTail())
console.log(myList.removeNodeFromIndex({ index: 15 }))
console.log(myList.updateNodeValuesAtPosition({ index: 21, newValue: 100 }))
console.log(myList.addNodeOnIndex({ index: -10, newValue: 100 }))
console.log(myList.addNodeOnIndex({ index: 21, newValue: 100 }))
console.log(myList.addNodeOnIndex({ index: 0, value: 100 }))
console.log(myList.traverseNodesValues())
console.log(myList.getSize())
console.log(myList.getTail())
console.log(myList.addNodeOnIndex({ index: 1, value: 200 }))
console.log(myList.addNodeOnIndex({ index: 4, value: 500 }))
console.log(myList.addNodeOnIndex({ index: 5, value: 600 }))
console.log(myList.traverseNodesValues())
console.log(myList.addNodeOnIndex({ index: 8, value: 600 }))
console.log(myList.traverseNodesValues())
console.log(myList.getSize())
console.log(myList.getTail())
console.log(myList.searchValueInNode({ searchValue: 500 }))
