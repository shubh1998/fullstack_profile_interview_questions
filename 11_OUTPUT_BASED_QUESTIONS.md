## Question 1
```
const Person = () => {
    this.name = 'John'
    return this
}

const person = new Person()
console.log(person.name)
```
**Output:**
```
 TypeError: Person is not a construct, Because In Arrow function we don't have accessibility of this. and we can't access arrow functions with new keyword. That is a fundamental difference between normal functions and arrow functions.
```


## Question 2
```
var demo1 = "Spiderman"
let demo2 = "Captain America"
console.log(window.demo1)
console.log(window.demo2)
```
**Output:**
```
Spiderman
undefined
```


## Question 3
```
function add() {
    return 2+2
}
var add
console.log(add)
```
**Output:**
```
function
```

## Question 4
```
function x() {
    let a = 4
    function y() {
        let b = 2, c = 0
        c = a + b
        return c
    }

    return y
}
var z = x()
console.log(z())
```
**Output:**
```
6
```


## Question 5
```
const arr = ["name"]
const obj={}

obj[arr] = "React JS"

console.log(obj.name)
```
**Output:**
```
React JS
```


## Question 6
```
const arr = ["name"]
const obj={}

obj.name = "Node JS"
obj[arr] = "React JS"

console.log(obj.name)
```
**Output:**
```
React JS
```


## Question 7
```
console.log([] == "")
console.log([] === "")
console.log([] === [])
console.log([] == [])
console.log(undefined === undefined)
console.log(undefined === null)
console.log({} === {})
```
**Output:**
```
true
false
false
false
true
false
false
```


## Question 8
```
function Person() {
    this.name = 'John'
    return this
}

const person = new Person()
console.log(person.name)
```
**Output:**
```
John
```


## Question 9
```
function add(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a+b)
    })
}

add(1, 1).then((sum1) => {
    console.log(sum1)
    return add(sum1, 2)
}).then((sum2) => {
    console.log(sum2)
    throw new Error("Error Occurred")
}, (err) => {
    console.log("error in then====", err)
}).catch(err => {
    console.log("error in catch====", err)
})
```
**Output:**
```
2
4
error in catch==== Error: Error Occurred
```


## Question 10
```
let {x, x:y } = { x:2 }
console.log(x, y)
```
**Output:**
```
2, 2
```