const arr = [20, 15, 12, -2, -1, 999, 1, 0, 8, 100, 500, 200]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}

console.log("Bubble sort sorted array ==== ", arr)