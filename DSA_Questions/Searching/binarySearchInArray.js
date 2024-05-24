const arr = [10, 14, 31, 43, 56, 63, 77, 89, 99, 105]

const findElementUsingBinarySearch = ({ element }) => {
    let startIndex = 0, endIndex = arr.length-1

    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex)/2)
        if(arr[middleIndex] === element) {
            return `element ${element} found at index ${middleIndex}`
        } else if (arr[middleIndex] < element) {
            startIndex = middleIndex + 1; 
        } else {
            endIndex = middleIndex - 1; 
        }
    }

    return `element ${element} not found in array`
}

console.log(findElementUsingBinarySearch({ element: 89 }))
