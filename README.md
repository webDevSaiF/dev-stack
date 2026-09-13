# Dev Stack

A simple web app where you can browse different frontend, backend, and database technologies, and add the ones you like to your own personal stack.

## Tech Used

- React
- TypeScript
- Tailwind CSS
- React-Toastify
- Vite

## Features

- Browse technology cards and add or remove them from your stack
- Works well on mobile, tablet, and desktop screens
- Shows toast messages when you add, remove

  **1.What is JSX, and why is it used in React?**
  Ans: JSX means JavaScript XML. It helps us to write HTML markup inside js file. Without JSX, creating a simple element requires tedious function calls like
  -> React.createElement('h1', null, 'Hello').
  -> With JSX, you write <h1>Hello</h1>.

  **2. What is the difference between props and state?**
  Ans: Difference Between Props and State in React:

  -> Props: Think of props like arguments passed to a function. They allow components to be reusable by letting parent components pass data downward.
  -> State: Think of state like local variables inside a function that React remembers across renders. When user actions like typing or clicking update the state, React re-renders the UI automatically.

  **3. What does the useState hook do, and where did you use it in this project?**
  Ans: It is a React Hook that gives a component its own internal memory.
  -> It lets you declare a value that React tracks across renders.
  -> It provides an updater function to change that value. When called, React updates the data and automatically re-renders the screen to reflect the changes.

  **4. What does the useEffect hook do, and why did you need it to load the JSON data?**
  Ans: It is a React Hook used to handle side effects—operations that interact with the outside world outside the normal rendering process like fetching data, setting timers, or manually touching the DOM.

  **5. Why does every item in a .map() list need a unique key prop?**
  Ans: React requires a unique key prop on elements inside a .map() list to help React identify unique elements and optimize DOM re-rendering.

  **6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
  Ans: Conditional rendering is when we want to show UI markups or components dynamically based on a condition. I used it in my StackSidebar.tsx file when the stack is empty, it shows empty stack bar markups, but when there are items, it shows <Stack/> and the [Remove All Button] instead.

  **7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?.**
  Ans: A parent passes data to a child using props. A child sends something back to the parent by calling a callback function passed down as a prop such as invoking handleAddStack via an onClick.
