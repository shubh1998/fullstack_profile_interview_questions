const arr = [20, 15, 12, -2, -1, 999, 1, 0, 8, 100, 500, 200]

const ascendingSort = (arr) => {
    let minimumValueIndex = 0
    for (let i = 0; i < arr.length; i++) {
        minimumValueIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minimumValueIndex]) {
                minimumValueIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minimumValueIndex]
        arr[minimumValueIndex] = temp
    }

    return arr
}

const descendingSort = (arr) => {
    let maximumValueIndex = 0
    for (let i = 0; i < arr.length; i++) {
        maximumValueIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[maximumValueIndex]) {
                maximumValueIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[maximumValueIndex]
        arr[maximumValueIndex] = temp
    }

    return arr
}

console.log("======= Selection sort ========")
console.log("Ascending order sorted array ==== ", ascendingSort(arr))
console.log("Descending order sorted array ==== ", descendingSort(arr))