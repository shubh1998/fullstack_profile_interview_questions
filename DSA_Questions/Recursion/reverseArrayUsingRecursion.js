const arr = [1, 2, -2, 3, 4, 5, -1]

const reverseArrayUsingRecursion = (arr, start, end) => {
    if(start !== end) {
        let temp = arr[end]
        arr[end] = arr[start]
        arr[start] = temp
        reverseArrayUsingRecursion(arr, start+1, end-1)
    }

    return arr
}

console.log(reverseArrayUsingRecursion(arr, 0, arr.length-1)) //