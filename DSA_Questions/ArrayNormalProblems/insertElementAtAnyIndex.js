const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const position = 5
const element = 23

// General Solution
const insertELementAtIndex = ({ array, el, position }) => {
    const copyArr = JSON.parse(JSON.stringify(array)) 
    for (let i=copyArr.length-1; i>=position; i--) {
        copyArr[i+1] = copyArr[i]
        if(i === position) {
            copyArr[i] = el
            break;
        }
    } 
    return copyArr
}
console.log("General Solution=====", insertELementAtIndex({array: arr, el: element, position}))


// Solution With Predefined Function
const insertUsingSplice = ({ array, el, position }) => {
    const copyArr = JSON.parse(JSON.stringify(array))
    const deleteElements = 0
    copyArr.splice(position, deleteElements, el)
    return copyArr
}
console.log("Predefined Solution=====", insertUsingSplice({array: arr, el: element, position}))
