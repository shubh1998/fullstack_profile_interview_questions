const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const position = 4

// General Solution
const insertELementAtIndex = ({ array, position }) => {
    const copyArr = JSON.parse(JSON.stringify(array))
    for (let i=position; i<=copyArr.length-1; i++) {
        copyArr[i] = copyArr[i+1]
    }   
    copyArr.length = copyArr.length - 1
    return copyArr
}
console.log("General Solution=====", insertELementAtIndex({array: arr, position}))


// Solution With Predefined Function
const insertUsingSplice = ({ array, position }) => {
    const copyArr = JSON.parse(JSON.stringify(array))
    const deleteElements = 1
    copyArr.splice(position, deleteElements)
    return copyArr
}
console.log("Predefined Solution=====", insertUsingSplice({array: arr, position}))
