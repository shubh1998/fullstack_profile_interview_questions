const mergeTwoArrays = (arr1, arr2) => {
    const mergedArray = [];
    let i=0, j=0;

    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++
        } else {
            mergedArray.push(arr2[j]);
            j++
        }
    }

    while(i < arr1.length){
        mergedArray.push(arr1[i]);
        i++
    }

    while(j < arr2.length){
        mergedArray.push(arr2[j]);
        j++
    }

    return mergedArray
}
  

const array1 = [3, 8, 10, 15, 20, 30, 40, 50];
const array2 = [5, 12, 18, 20, 22];

console.log("mergedArray======", mergeTwoArrays(array1, array2))

