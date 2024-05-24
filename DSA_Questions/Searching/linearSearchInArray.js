const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const findElement = ({array, element}) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return `Element found ${array[i]} at index ${i}`;
        }
    }
    return `Element Not found !`;
}

console.log("General Solution=====", findElement({array: arr, element: 2}))

const findElementWithPredefinedMethod = ({array, element}) => {
    const elementExistIndex = array.indexOf(element)
    if(elementExistIndex >= 0) {
        return `Element found ${element} at index ${elementExistIndex}`;
    }
    return `Element Not found !`;
}

console.log("Predefined Solution=====", findElementWithPredefinedMethod({array: arr, element: 0}))
