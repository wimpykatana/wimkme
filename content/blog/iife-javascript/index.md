---
title: What is IIFE in Javascript ?
date: "2022-04-26T16:00:03.284Z"
description: "IIFE ( Immediately Invoked Function Expression ) is a javascript function thats run as soon as it's defined."
---

What is IIFE ?
IIFE ( Immediately Invoked Function Expression ) is a way to run/execute functions as soon as they created. IIFE name is promoted by **Ben Alman** in [his blog](https://benalman.com/news/2010/11/immediately-invoked-function-expression/).

We can create IIFE with this syntax:

<!-- prettier-ignore-start -->
```js
(function () {
  // your code goes here
})()
```
<!-- prettier-ignore-end -->

We can define IIFE using Arrow function:

<!-- prettier-ignore-start -->
```js
(() => {
  //your code goes here
})()
```
<!-- prettier-ignore-end -->

And we also can define async IIFE:

<!-- prettier-ignore-start -->
```js
(async () => {
  //your code goes here
})()
```
<!-- prettier-ignore-end -->

## Avoid polluting the global namespace

IIFE is very usefull we can isolate variable declarations and they don't pollute the global namespace. Because when we build an application sometimes we could include so many functions and global variable from any source, Thats it's important to limit the number of global variables.

<!-- prettier-ignore-start -->
```js
(() => {
  // some initiation code
  let firstVariable
  let secondVariable
})()

// firstVariable and secondVariable will be discarded after the function is executed
```
<!-- prettier-ignore-end -->

## Execute an async function

When we use `async` it will allows use to use `await` inside our IIFE.

<!-- prettier-ignore-start -->
```js
(async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)
})()
```
<!-- prettier-ignore-end -->

## IIFE Start With Semicolon [ ; ]

Semicolon is used to terminate the statement or any previous code from executing. Because of thats reason we will find IIFE start with semicolon but it will be rarely to find it.

```js
;(function () {
  //your code goes here
})()
```

## IIFE With Unary Operator

We also can use unary operator inside IIFE, and make our code is more harder to read.

<!-- prettier-ignore-start -->
```js
+(function () {
  return 5
})() //5

-(function () {
  return 5
})() //-5

~(function () {
  return 5
})() //-6

!(function () {
  return 5
})() //false
```

<!-- prettier-ignore-end -->
