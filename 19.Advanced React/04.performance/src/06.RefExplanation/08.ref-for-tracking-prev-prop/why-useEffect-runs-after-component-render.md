# When UseEffect Runs

The primary reason useEffect runs after render and browser painting is to prevent blocking the main browser thread and avoid a slow user interface (Non-blocking UI).

Generally in React, the process of applying a change to the UI is split into two main phases:

1. **Render Phase:** Calculating the new UI representation and preparing the updates.

2. **Commit & Paint Phase:** Applying changes to the real DOM and rendering (painting) them on screen via the browser.

## Why useEffect is designed this way

1. **Fast & Responsive UI:**
   Operations inside useEffect typically involve heavy or time-consuming tasks like fetching data from APIs, setting up event listeners, or tracking analytics. If React waited for these side effects to run before updating the screen, users would experience frame drops and frozen UI. React displays the updated UI first and handles side effects afterward.

2. **Ensuring DOM Elements Exist:**
   Most side effects require direct access to DOM nodes. Running useEffect after render guarantees that all DOM elements have been safely created and are ready for interaction.

## What if you need to run code before the browser paints

If you need to perform an operation before the browser draws the frame (for example, measuring DOM element dimensions to prevent visual flickers), you should use useLayoutEffect instead of useEffect.

useLayoutEffect runs synchronously after DOM mutations, but before the browser paints the screen.
