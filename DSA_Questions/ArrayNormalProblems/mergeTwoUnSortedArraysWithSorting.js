const mergeTwoArrays = (arr1, arr2) => {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}
  

const array1 = [70, 10, 5, 50, -2];
const array2 = [8, 2, 5, 220];

console.log("mergedArray======", mergeTwoArrays(array1, array2))

