---
title: Javascript Array Methods, You Should Know !!
date: "2022-04-10T16:00:03.284Z"
description: "Javascript Array Methods every developer should know and use it when develop or build an app..."
---

When we develop or build an app using Javascript we will dealing with an Array and we will sometimes will modify that array so in this post i will share Javascript array methods

### 1. Array.map()

Method will create a new array with new result for each element inside the array from a provided function.

```js
const number = [1, 2, 3, 4, 5]
number.map(x => x * 2) // result: [ 2, 4, 6, 8, 10 ]
```

### 2. Array.filter()

Method will create a new array with new result that pass or valid from the provided function.

```js
const number = [1, 2, 3, 4, 5]

const oddNumber = number.filter(x => x % 2 === 1)
// oddNumber result: [ 1, 3, 5 ]

const evenNumber = number.filter(x => x % 2 === 0)
// evenNumber result: [ 2, 4 ]
```

### 3. Array.reduce()

Method will returns an accumulation value by a function from the Array.

```js
const number = [1, 2, 3, 4, 5]
const initVal = 0
const totalVal = number.reduce((prev, curr) => prev + curr, initVal)
// totalVal result: 15
```

### 4. Array.reduceRight()

This method is basicly same like `Array.reduce()` but this one accumulating from right to left.

```js
const number = [1, 2, 3, 4, 5]
const initVal = 0
const totalVal = number.reduceRight((prev, curr) => prev + curr, initVal)
// totalVal result: 15
```

### 5. Array.fill()

Method will changes all the element inside the array with static value.

```js
const number = [1, 2, 3, 4, 5]

//will fill with 0 start from position 2 until position 4
number.fill(0, 2, 4) // [ 1, 2, 0, 0, 5 ]

// fill with 0 from position 1
number.fill(0, 1) // [ 1, 0, 0, 0, 0 ]

//fill all element with 0
number.fill(0) // [ 0, 0, 0, 0, 0 ]
```

### 6. Array.find()

Method will returns the first element inside the array that pass or valid from the provided function.

```js
const number = [1, 2, 3, 4, 5]

//find the first even number
const found = number.find(x => x % 2 === 0)
//found result: 2
```

### 7. Array.indexOf()

Method returns the first index at which a given element can be found in the array, or -1 if it is not present.

```js
const number = [1, 2, 3, 4, 5]
number.indexOf(1) // 0
number.indexOf(3) // 2
number.indexOf(6) // -1
```

### 8. Array.lastIndexOf()

Method returs the last index at which a given element can be found in the array, or -1 if it is not present.

```js
const number = [1, 2, 3, 4, 5, 1]
number.lastIndexOf(1) // 5
number.lastIndexOf(6) // -1
```

### 9. Array.findIndex()

Method returs the index of the first element in the array that pass or valid from the provided function, otherwise it will return -1 if no element pass or valid

```js
const number = [1, 3, 2, 3, 4, 5]

//find the first even number index
number.findIndex(x => x % 2 === 0) // 2
```

### 10. Array.includes()

Method returns true if the values is inside the array and return false if not

```js
const number = [1, 2, 3, 4, 5]
number.includes(1) // true
number.includes(6) // false
```

### 11. Array.pop()

Method will remove the last element of the array and will change the length of the array

```js
const number = [1, 2, 3, 4, 5]
number.pop() // 5
number //[ 1, 2, 3, 4 ]
```

### 12. Array.push()

Method that add new element at the end of array and will change the length of the array

```js
const number = [1, 2, 3, 4, 5]
number.push(1) // 6
number // [1, 2, 3, 4, 5, 1]
```

### 13 Array.shift()

Method will remove the first element of the array and will change the length of the array

```js
const number = [1, 2, 3, 4, 5]
number.shift() // 1
number //[ 2, 3, 4, 5 ]
```

### 14 Array.unshift()

Method that add one or more new element at the start of array and will change the length of the array

```js
const number = [1, 2, 3, 4, 5]
number.unshift(0, 1) // 7
number //[ 0, 1, 1, 2, 3, 4, 5 ]
```

### 15 Array.splice()

Method will changes the content of the array by removing or replacing the existing element.

```js
const number = [1, 2, 3, 4, 5]

// remove array value at start position 1 until position 2
number.splice(1, 2) // [2,3]
number //[ 1, 4, 5 ]

// add a value at position 1
number.splice(1, 0, "a")
number // [ 1, 'a', 4, 5 ]

// replace value at position 1
number.splice(1, 1, 1)
number // [ 1, 1, 4, 5]
```

### 16 Array.slice()

Method returns a [shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy) of array into new array object

```js
const number = [1, 2, 3, 4, 5]
const newArr = number.slice(0, 2)

newArr // [ 1, 2 ]
number // [1, 2, 3, 4, 5]
```

### 17 Array.Join()

Method joins all the element inside the array into one string

```js
const number = [1, 2, 3, 4, 5]
number.join(" ") // '1 2 3 4 5'
```

### 18 Array.reverse()

Method thats will reverse all the element inside the array

```js
const number = [1, 2, 3, 4, 5]
number.reverse() // [ 5, 4, 3, 2, 1 ]
```

### 19 Array.sort()

Method that will sort the element of array, default sort order is ascending

```js
const letters = ["B", "A", "D", "E", "C"]
letters.sort() // [ 'A', 'B', 'C', 'D', 'E' ]

const number = [7, 2, 1, 3, 5]
number.sort() // [ 1, 2, 3, 5, 7 ]
number.sort((a, b) => b - a) // [ 7, 5, 3, 2, 1 ]
```

### 20 Array.some()

Method returns true if at least one values is pass or valid the provided function and return false if not

```js
const number = [2, 5, 4, 8, 6]
//at least 1 value is odd number
number.some(x => x % 2 === 1) // true
```

### 21 Array.every()

Method returns true if all values is pass or valid the provided function and return false if not

```js
const number = [2, 10, 4, 8, 6]
//all value is even number
number.some(x => x % 2 === 0) // true
```

### 22 Array.from()

Methods create a new [shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy) array instance from an array-like or iterable object.

```js
Array.from("hello") // [ 'h', 'e', 'l', 'l', 'o' ]

Array.from([1, 2, 3, 4, 5], x => x * 2) // [ 2, 4, 6, 8, 10 ]
```

### 23 Array.of()

Methods create a new Array instance from a variable number of arguments.

```js
Array.of(1, 2, 3, 4, 5) // [ 1, 2, 3, 4, 5 ]

Array.of(1) // [1]
```

### 24 Array.isArray()

Methods returns a true if given value is an Array

```js
Array.isArray([1, 2, 3, 4, 5]) // true
Array.isArray(1) // false
```

### 25 Array.at()

Methods returns value from given index

```js
const number = [1, 2, 3, 4, 5]
number.at(1) // 2
number.at(-1) // 5
number.at(-2) // 4
```

### 26 Array.copyWithin()

Method copy an array to another location in the same array without modifying the array length

```js
const number = [1, 2, 3, 4, 5]
//copy to position 0 from position 2 until end
number.copyWithin(0, 2) // [ 3, 4, 5, 4, 5 ]

const number1 = [1, 2, 3, 4, 5]
//copy to position 0 from position 2 until 4
number1.copyWithin(0, 2, 4) // [ 3, 4, 3, 4, 5 ]
```

### 27 Array.flat()

Methods create a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```js
const val1 = [1, 2, 3, [4, 5]]
val1.flat() //[ 1, 2, 3, 4, 5 ]

const val2 = [1, 2, [[3, [4, 5]]]]
val2.flat(2) // [ 1, 2, 3, [ 4, 5 ] ]
```

### 28 Array.flatMap()

```js
let number = [1, 2, 3, 4, 5]

number.map(x => [x * 2]) // [[2], [4], [6], [8], [10]]

number.flatMap(x => [x * 2]) // [ 2, 4, 6, 8, 10 ]
```
