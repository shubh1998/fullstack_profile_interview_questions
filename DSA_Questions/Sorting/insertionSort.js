const arr = [20, 15, 12, -2, -1, 999, 1, 0, 8, 100, 500, 200]
let currentElement = null

for (let i = 1; i < arr.length; i++) {
    currentElement = arr[i]
    let j = i-1
    while (j>=0 && arr[j]>currentElement) {
       arr[j+1] = arr[j] 
       j--
    }
    // console.log(currentElement, j)
    arr[j+1] = currentElement
    // console.log(arr)
}

console.log("Insertion sort sorted array ==== ", arr)