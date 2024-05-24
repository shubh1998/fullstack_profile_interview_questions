const arr = [10, 14, 31, 43, 56, 63, 77, 89, 99, 105]

const recursiveBinarySearch = ({ element, startIndex, endIndex }) => {
    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2)
        if (arr[middleIndex] === element) {
            return `element ${element} found at index ${middleIndex}`
        }

        startIndex = arr[middleIndex] < element ? middleIndex + 1 : startIndex;

        endIndex = arr[middleIndex] > element ? middleIndex - 1 : endIndex;
        
        recursiveBinarySearch({ element, startIndex, endIndex })
    }

    return `element ${element} not found in array`
}

console.log(recursiveBinarySearch({ element: 89, startIndex: 0, endIndex: arr.length - 1 }))
