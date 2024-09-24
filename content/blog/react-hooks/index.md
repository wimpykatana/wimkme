---
title: 'Comprehensive Guide to React Hooks: Why, When, and How to Use Them'
date: "2024-09-24T08:00:03.284Z"
description: "React Hooks are special functions that let you use features like state and lifecycle methods in your functional components. Before hooks, these features were only available in class components. With hooks, you can use state, side effects, and more without writing classes."
---
React Hooks are special functions that let you use features like state and lifecycle methods in your functional components. Before hooks, these features were only available in class components. With hooks, you can use state, side effects, and more without writing classes.

React Hooks were introduced in React 16.8, transforming how developers build components and manage state in functional components. This article will explain key React Hooks `useState`, `useEffect`, `useContext`, `useRef`, `useReducer`, `useMemo`, `useCallback`, `useLayoutEffect` and also custom hooks with examples of how to use them in your projects.

# useState: Managing Local Component State
**Why Use It?**
`useState` is used to add local state to functional components. It replaces the need for `this.state` in class-based components and provides a cleaner, more intuitive API.

**When to Use It?**
Use `useState` when you need to track a simple, mutable value within a component, such as user inputs, toggling UI elements, or any other temporary state.

**How to Use It?**
```jsx
const [count, setCount] = useState(0);
```
- `count`: the value you want to keep track of (starts at 0).
- `setCount`: the function you call to change count.

**Example:**
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
Now, every time you click the button, the count goes up by 1.

# useEffect: Handling Side Effects
**Why Use It?**
`useEffect` allows functional components to handle side effects such as fetching data, setting up subscriptions, or manually changing the DOM.

**When to Use It?**
Use `useEffect` whenever you need to perform an action in response to changes in state or props, like data fetching, timers, or interacting with external APIs.

**How to Use It?**
```jsx
useEffect(() => {
  console.log("Component rendered");
  return () => {
    console.log("Cleanup on component unmount");
  };
}, [dependency]);
```

- Effect Function: The first argument to `useEffect` is a function that contains the side effect logic. In this case, the function logs "Component rendered" to the console.

- Cleanup Function: The function returned from the effect function is a cleanup function. This cleanup function is executed when the component is unmounted or before the effect is re-executed. Here, it logs "Cleanup on component unmount" to the console.

- Dependency Array: The second argument to useEffect is an array of dependencies. The effect will only re-run if one of the dependencies has changed. In this case, the effect depends on dependency. If dependency changes, the cleanup function will run first, followed by the effect function.

**Example:**
```jsx
function DocumentTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
In this example, the document title updates every time the count changes.

# useRef: Keeping a Value Without Rerendering
**Why Use It?**
`useRef` lets you hold onto a value that doesn’t need to change the UI when updated. It's often used to access DOM elements like input fields.

**Why Use It?**
If you need to work with elements in the DOM, like focusing an input field, `useRef` helps you do that.

**How to Use It:**
```jsx
const inputRef = useRef(null);
```
- `inputRef` is now a reference to an element you want to access directly.

**Example:**
```jsx
function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // focus the input field
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}
```
In this example, clicking the button will focus the input field.

# useReducer: Handling Complex State Logic
**What is it?**
`useReducer` is like a more powerful version of `useState` for managing more complicated state updates. Instead of a simple value, you use actions to change the state.

**Why Use It?**
If your state logic is more complex (like having multiple related values or actions), `useReducer` is better than `useState`.

**How to Use It:**
```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```
- `state`: the current state value.
- `dispatch`: a function that sends an action to update the state.

**Example:**
```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```
This is a counter with both increment and decrement buttons, using more advanced state logic.

# useContext: Sharing Data Across Components
**What is it?**
`useContext` allows you to share values between components without manually passing them down as props.

**Why Use It?**
If you want to use the same data in many components (like a theme or user information), `useContext` makes it easy.

**How to Use It:**
```jsx
const ThemeContext = React.createContext('light');
const theme = useContext(ThemeContext);
```
- `ThemeContext`: the context object created with `React.createContext`.

- `theme`: the current value from the context.

**Example:**
```jsx
import React, { createContext, useContext } from 'react';

// 1. Create a Context
const ThemeContext = createContext('light');

function App() {
  // 2. Provide the Context
  const theme = 'dark';

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // 3. Consume the Context
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
      I am styled by theme context!
    </button>
  );
}

export default App;
```
In this example, the background color changes based on the theme value.

# useCallback: Optimizing Functions
**What is it?**
`useCallback` is used to memoize (store) a function so it’s not recreated every time the component renders.

**Why Use It?**
If you pass functions to child components, `useCallback` helps prevent unnecessary re-renders by remembering the function.

**How to Use It:**
```jsx
const memoizedFunction = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```
- `memoizedFunction`: the memoized function that won’t change between renders.

- `[a, b]`: the dependencies that trigger the function to change.

**Example:**
```jsx
import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Increment function with useCallback
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <IncrementButton onIncrement={increment} />
    </div>
  );
}

function IncrementButton({ onIncrement }) {
  console.log('IncrementButton rendered');
  return <button onClick={onIncrement}>Increment</button>;
}

export default Counter;
```
- Parent Component (`Counter`): The `Counter` component manages the count state and defines the `increment` function using `useCallback`.

- Child Component (`IncrementButton`): The `IncrementButton` component receives the `increment` function as a prop and uses it as the `onClick` handler for the button

- Memoization: By using `useCallback`, the `increment` function is only re-created when the `count` value changes. This prevents unnecessary re-renders of the `IncrementButton` component, optimizing performance.

# useMemo: Optimizing Expensive Calculations
**What is it?**
`useMemo` is used to memoize (remember) the result of a calculation so it doesn’t run again unless necessary.

**Why Use It?**
If you have a function that takes a long time to run, you can use `useMemo` to only recalculate when certain values change.

**How to Use It:**
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
- `memoizedValue`: the memoized value that won’t change between renders.

- `computeExpensiveValue(a, b)`: the function that calculates the value.

- `[a, b]`: the dependencies that trigger the calculation to run.

**Example:**
```jsx
import React, { useState, useMemo } from 'react';

function ExpensiveComputation({ num }) {
  console.log('Expensive computation running...');
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += num;
  }
  return result;
}

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  // Memoize the result of the expensive computation
  const result = useMemo(() => ExpensiveComputation({ num }), [num]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Result: {result}</p>
      <button onClick={() => setNum(num + 1)}>Increment Num</button>
    </div>
  );
}

export default App;
```
- Parent Component (`App`): The `App` component manages the `count` and `num` states. It also defines the `result` variable, which is the result of the `ExpensiveComputation` function.

- Memoization: By using `useMemo`, the `result` of the `ExpensiveComputation` function is only recalculated when the `num` value changes. This prevents the expensive computation from running on every render, optimizing performance.

- Dependencies: The second argument to `useMemo` is an array of dependencies. In this case, the computation is memoized until the `num` value changes.

# useLayoutEffect: Synchronous Side Effects
**Why Use It?**
`useLayoutEffect` is similar to `useEffect`, but it fires synchronously after all DOM mutations. It can be used when you need to measure the DOM or trigger synchronous updates.

**When to Use It?**
Use `useLayoutEffect` when you need to perform DOM manipulations or measurements before the browser has painted the screen.

**How to Use It?**
```jsx
useLayoutEffect(() => {
  const rect = elementRef.current.getBoundingClientRect();
  console.log(rect);
}, []);
```
- Effect Function: The function that contains the side effect logic, such as measuring the DOM.

- Dependency Array: An empty array `[]` means the effect runs once after the initial render.

**Example:**
```jsx
import React, { useState, useLayoutEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    // This code runs after the DOM has been updated but before the browser has painted
    console.log('useLayoutEffect: DOM updated');
    console.log('Div width:', divRef.current.offsetWidth);
  }, [count]); // Dependency array ensures the effect runs when `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <div ref={divRef} style={{ width: count * 10 + 50, height: 50, backgroundColor: 'lightblue' }}>
        Resizable Div
      </div>
    </div>
  );
}

export default App;
```
- Parent Component (`App`): The `App` component manages the `count` state and defines a `divRef` to reference the `div` element.

- useLayoutEffect: The `useLayoutEffect` hook is used to log the width of the `div` element after the DOM has been updated but before the browser has painted. This ensures that we are reading the layout synchronously.

- Dependencies: The second argument to `useLayoutEffect` is an array of dependencies. In this case, the effect runs whenever the `count` value changes.

# Custom Hooks: Reusing Logic Across Components
**Why Use It?**
Custom hooks allow you to extract reusable logic from components, making the code more modular and maintainable.

**When to Use It?**
Use custom hooks when you have common logic that needs to be shared across multiple components.

**How to Use It:**
```jsx
function useFetchData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);
  return data;
}

const data = useFetchData('https://api.example.com');
```

**Example:**
```jsx
// useFetchData.js
import { useState, useEffect } from 'react';

// Custom hook to fetch data from a given URL
function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetchData;
```
```jsx
// App.js
import React from 'react';
import useFetchData from './useFetchData'; // Import the custom hook

function App() {
  const { data, loading, error } = useFetchData('https://api.example.com/data');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
```

- Custom Hook: `useFetchData` encapsulates the logic for fetching data from an API.
- State Management: The hook manages `data`, `loading`, and `error` states.
- Effect Hook: The `useEffect` hook fetches data whenever the URL changes.
- Reusable Logic: The custom hook can be reused in multiple components to fetch data from different URLs.

# Conclusion
React hooks make it easier to manage state, side effects, and context in functional components, offering cleaner, more modular code. Understanding when and how to use each hook—whether it's for managing simple state with `useState`, performing side effects with `useEffect`, or handling complex logic with `useReducer` will empower you to build more efficient and maintainable React applications.
