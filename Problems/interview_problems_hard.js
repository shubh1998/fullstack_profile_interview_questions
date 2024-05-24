// =============================== Question 1 =======================================
// ---------------- Swap vowels with each other ---------------


// /* hello */
// /* holle */

const isVowelExist = (strChar) => {
  return (
    strChar === 'a' ||
    strChar === 'e' ||
    strChar === 'u' ||
    strChar === 'o' ||
    strChar === 'i' ||
    strChar === 'A' ||
    strChar === 'E' ||
    strChar === 'I' ||
    strChar === 'O' ||
    strChar === 'U'
  );
};

const reverseStr = (str) => {
  let str1 = str.split('')
  let i = 0, j = str1.length - 1

  while (i < j) {
    if (isVowelExist(str1[i]) && isVowelExist(str1[j])) {
      let temp = str1[i]
      str1[i] = str1[j]
      str1[j] = temp
      i++;
      j--;
    } 
    else if (!isVowelExist(str1[i])) {
      i++
    } 
    else if (!isVowelExist(str1[j])) {
      j--
    }
  }

  return str1.join('')
}

console.log(reverseStr('my name is shubham gupta'))
// my namu as shubhim gepta






// =============================== Question 2 =======================================

// Have a function Numeronyms(string) the letters between the first and last are replaced with
//  a number representing the number of letters omitted, such as "i18n" for "internationalization".

// Your program will output all combinations(array) of numeronyms. If string length is 3 or less return empty array.

// Numeronyms('nailed') OUTPUT: [ 'n2led', 'na2ed', 'nai2d', 'n3ed', 'na3d', 'n4d']
// output: [2,2,2,3,3,4]

// apple
// output: ['a2le', 'ap2e', 'a3e']

// cat
// output: []

const fun = (str) => {
    let arr = []
    if(str.length <= 3) {
        return arr
    }

    for (let counter = 2; counter <= str.length - 2; counter++) {
        for (let start = 1; start < str.length-counter; start++) { 
            let startIndex = start;
            let endIndex = start + counter - 1;
            console.log({ startIndex, endIndex});
            const newStr = str.substring(startIndex, endIndex+1);
            const str1 = str.replace(newStr, counter)
            arr.push(str1)
        }
    }

    return arr
}

console.log(fun("nailed"))


// =============================== Question 3 =======================================
const a = [];
let i = 0;
setTimeout(() => {
    console.log("Done");
}, 10);

console.time()
for (;i < Number.MAX_SAFE_INTEGER; i++){
        a.push(`String: ${i}`);
};

console.log(a);

console.timeEnd();

const arr = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]


// =============================== Question 4 =======================================
// Valid Parentheses: Given a string containing just the characters 
// '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
function isValid(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();
      if (char === ')' && top !== '(') {
        return false;
      } else if (char === '}' && top !== '{') {
        return false;
      } else if (char === ']' && top !== '[') {
        return false;
      }
    }
  }
  return stack.length === 0;
}

