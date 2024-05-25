## Question 1
```
Given two strings. The task is to check whether the given strings are anagrams of each 
other or not. An anagram of a string is another string that contains the same characters, 
only the order of characters can be different. For example, “abcd” and “dabc” are an anagram 
of each other.

Examples:
Input: str1 = “listen”  str2 = “silent”
Output: “Anagram”
Explanation: All characters of “listen” and “silent” are the same.

Input: str1 = “gram”  str2 = “arm”
Output: “Not Anagram”
```


## Question 2
```
A string is a palindrome if it is read the same from forward or backward. For example, 
dad reads the same either from forward or backward. So the word dad is a palindrome. 
Similarly, madam is also a palindrome.
```


## Question 3
```
A string is a palindrome if it is read the same from forward or backward. For example, 
dad reads the same either from forward or backward. So the word dad is a palindrome. 
Similarly, madam is also a palindrome.
```


## Question 4
```
A palindrome number is a numerical sequence that reads the same forwards and backward, 
It remains unchanged even when reversed, retaining its original identity.

Example:
Input : Number = 121
Output : Palindrome

Input : Number = 1331
Output : Palindrome
```


## Question 5
```
An Armstrong Number is an n-digit number that is the sum of the nth power of its all digits. 
For instance, Consider a 3-digit number, i.e., 153, which is a 3-digit number, & the sum of 
the cube of all its digits will be the number itself, i.e. 153.

153 = 1*1*1 + 5*5*5 + 3*3*3
1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4
456 != 4*4*4 + 5*5*5 + 6*6*6
123 != 1*1*1 + 2*2*2 + 3*3*3
```


## Question 6
```
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. X can be placed before L (50) and C (100) to make 40 and 90. C can be placed before D (500) and M (1000) to make 400 and 900. Given a roman numeral, convert it to an integer.

I: V,X
X: L, C
C: D, M
```
`Solution:`
```
const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };


const romanToInt = (str) => {
  let sum = 0
  
  for (let i = 0; i <= str.length - 1; i++) {
      const current = map[str[i]];
      const next = map[str[i+1]];
      if (next > current) {
          const diff = next - current;
          sum += diff;
          ++i
      } else {
           sum += current;
      }
  }

  return sum
}

console.log(romanToInt('IV'))
console.log(romanToInt('LVIII')); // 58 // decending order
console.log(romanToInt('MCMXCIV')); // 1000+900+90+4 = 1994
console.log(romanToInt('MMMCMXCIX')); // 3000+900+90+9 = 3999
```


## Question 7
[Two Sum Problem](https://leetcode.com/problems/two-sum/description/)

`Solution`
```
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
```


## Question 8
```
Print table of 2
Print table of 2 after every every passed second
```


## Question 9
```
Remove special characters from string javascript without regex
```
`Solution:`
```
function removeSpecialCharacters(inputString) {
  var resultString = '';
  
  for (var i = 0; i < inputString.length; i++) {
    var char = inputString[i];
    
    // Check if the character is alphanumeric
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
      resultString += char;
    }
  }

  return resultString;
}

// Example usage
var originalString = "Hello, @world! 123";
var stringWithoutSpecialChars = removeSpecialCharacters(originalString);

console.log(stringWithoutSpecialChars);
```


## Question 10
```
How to get the size of object in js?
```
`Solution:`
```
function getObjectSize(obj) {
  let size = 0;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      size++; // Count the property itself

      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // Recursively count the size of nested objects
        size += getObjectSize(obj[key]);
      }
    }
  }

  return size;
}

const myObject = {
  key1: 'value1',
  key2: {
    key21: 'value21',
    key22: {
      key221: 'value221'
    }
  },
  key3: 'value3'
};

const objectSize = getObjectSize(myObject);

console.log('Object size:', objectSize); // Output: 6
```


## Question 11
```
How to create a deep copy of the object without using any of the inbuilt function
```
`Solution:`
```
function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const newObj = {};
  for (const key in obj) {
    newObj[key] = deepCopy(obj[key]);
  }

  return newObj;
}
```


## Question 12
```
Program to generate fibonacci series up to n terms
```
`Solution:`
```
// take input from the user
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```


## Question 13
```
Remove Duplicates from Sorted Array: Given a sorted array, remove the duplicates 
in-place such that each element appear only once and return the new length.
```
`Solution:`
```
function removeDuplicates(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
```


## Question 14
```
Rotate array by passing an index.
Example: 
arr = [1, 2, 3, 4, 5, 6, 7]
arr = []
```
`Solution:`
```
function rotateArrayByRotations (arr, rotations) {
  const k = rotations % arr.length
  const copyArr = [...arr]
  for (let i = 0; i < k; i++) {
    const firstElem = copyArr.shift()
    copyArr.push(firstElem)
  }
  return copyArr
}
```