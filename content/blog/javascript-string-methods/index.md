---
title: Javascript String Methods Cheatsheet
date: "2022-08-05T16:00:03.284Z"
description: "List of string methods we can use to manipulate string, for our daily task"
---

String is one of data type inside Javascript [JS], and string is very usefull for holding data that can be represented in text form. And we as developer is often use it inside our daily task or job.

Below this i will share some string methods we can use inside Javascript [JS]

## length

We can use `length` to get the length of the string

```js
const txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const length = txt.length
console.log(length) //output: 26
```

## slice()
The `slice()` method is will extracts a part of string without modifying the original string and will return the extracted part into a new string. And it also can take negative value
```js
const fruits = 'Apple, Banana, Kiwi'
const newStr =  fruits.slice(-4, 19)
console.log(newStr) //output: 'Kiwi'
```

## substring()
`substring()` is also same like `slice()` but substring cannot accept negative value
```js
const fruits = 'Apple, Banana, Kiwi'
const newStr =  fruits.substring(15, 19)
console.log(newStr) //output: 'Kiwi'
```

## substr()
`substr()` is also same like `slice()` but the difference is the second parameter is specifies the number of characters need to be extract
```js
const fruits = 'Apple, Banana, Kiwi'
const newStr =  fruits.substr(-4, 4)
console.log(newStr) //output: 'Kiwi'
```

## replace()
We can use `replace()` to replace a specifed value with another value
```js
const text = 'Please visit Jakarta'
const newText = text.replace('Jakarta', 'Bali')
console.log(newText) //output: 'Please visit Bali'
```

## toUpperCase()
`toUpperCase()` is a method we can use to convert some string to become upper case
```js
const text = 'Hello World!'
const newText = text.toUpperCase()
console.log(newText) //output: 'HELLO WORLD!'
```

## toLowerCase()
`toLowerCase()` is a method we can use to convert some string to become lower case
```js
const text = 'Hello World!'
const newText = text.toLowerCase()
console.log(newText) //output: 'hello world!'
```

## concat()
We can use `concat()` method to join some string into one string
```js
const text1 = 'Hello'
const text2 = 'World!'
const text3 = text1.concat(' ',text2)
console.log(text3) //output: 'Hello World!'
```

## trim()
The `trim()` method will remove whitespace inside some string from both ends of string
```js
const text = '   Hello world!   '
const trimText =  text.trim()
console.log(trimText) //output: 'Hello world!'
```

## padEnd()
`padEnd()` is a method will pads the current string with a given value and repeat it until reaches a given length
```js
const text = 'Hello'
const paddedText =  text.padEnd(10,'.')
console.log(paddedText) //output: 'Hello.....'
```

## padStart()
`padStart()` is also same with `padEnd()` but padStart() will pads the string infront of current string
```js
const text = 'Hello'
const paddedText =  text.padStart(10,'.')
console.log(paddedText) //output: '.....Hello'
```

## split()
`split()` is a method that can convert some string into an array
```js
const fruits = 'Apple,Banana,Kiwi'
const fruitsArr = fruits.split(',')
console.log(fruitsArr) //output: [ 'Apple', 'Banana', 'Kiwi' ]
```