# Memoization

## understand how Javascript compare values

### how the objects store in memory

JavaScript splits memory allocation into two main structures: the Call Stack and the Heap.
![Stack variables storing references to Heap objects. Source: Felix Gerschau](./stack-heap-pointers.png)

1. The Call Stack (Fast & Fixed Size)
   - Stores simple, primitive values directly (like numbers, booleans, or null).

   - Also stores variable names and their memory pointer (reference).

   - Small and highly structured, but limited in space.

2. The Memory Heap (Unstructured & Flexible)
   - A large, unstructured region of memory designed for dynamic data.

   - Holds actual object bodies, arrays, and functions—items whose size can grow or shrink at runtime.

#### Step-by-Step Execution

When you write:

```Javascript
const user = { name: "Alice", age: 30 };
```

Heap Allocation: JavaScript allocates space in the Heap to hold the payload { name: "Alice", age: 30 }. This payload gets a specific memory address (e.g., #0x8f22).

Stack Assignment: JavaScript creates the variable user on the Call Stack. Instead of storing the object directly, it stores the address #0x8f22.

| CALL STACK             |                   | HEAP                                                                                  |
| :--------------------- | :---------------: | :------------------------------------------------------------------------------------ |
| **`user`** `(#0x8f22)` | $\longrightarrow$ | **`#0x8f22`**<br>`{` <br>&nbsp;&nbsp;`name: "Alice",`<br>&nbsp;&nbsp;`age: 30`<br>`}` |

When working with objects, there is a fundamental difference between mutating an existing object and reassigning a variable to a brand-new object.

Here is how both operations alter the Call Stack and Memory Heap:

**Scenario 1:** Mutating an Object
Mutating modifies the existing contents inside the Heap. The memory address on the Call Stack stays identical.

```JavaScript
const user = { name: "Alice", age: 30 };

// Mutation
user.age = 31;
```

```plaintext
CALL STACK                      MEMORY HEAP
+---------------+              +----------------------------------+
|               |              |                                  |
|  user         |------------->|  [#0x8f22]                       |
|  (#0x8f22)    |              |  { name: 'Alice', age: 31 }      |
|               |              |                                  |
+---------------+              +----------------------------------+
```

- **Call Stack:** The variable user still points to #0x8f22.
- **Memory Heap:** The data living inside #0x8f22 is updated directly in place.

**Scenario 2:** Reassigning an Object Variable
Reassigning creates a completely new object at a new location in the Heap, then updates the pointer on the Call Stack.

```JavaScript
let user = { name: "Alice", age: 30 }; // Stored at #0x8f22

// Reassignment
user = { name: "Bob", age: 25 }; // Stored at #0x9c44
```

```Plaintext
CALL STACK                      MEMORY HEAP
+---------------+              +----------------------------------+
|               |              |                                  |
|               |   (broken)   |  [#0x8f22]                       |
|  user         | - - - - - - X|  { name: 'Alice', age: 30 }      |
|  (#0x9c44)    |              |  (Unreferenced / Garbage Target) |
|               |              |                                  |
|               |              |  [#0x9c44]                       |
|               |--------------|->{ name: 'Bob', age: 25 }        |
+---------------+              +----------------------------------+
```

- **Call Stack:** The value of user changes from #0x8f22 to #0x9c44.
- **Memory Heap**: A brand-new object is created at #0x9c44.
- **Garbage Collection:** The original object at #0x8f22 has zero references pointing to it, making it eligible to be freed from memory.

```Javascript
const user = { name: "Alice", age: 30 };
// Mutation
user.age = 31;
```

```Javascript
const x = 2;
const y = 2;
x === y // =true, values are exactly the same
```

for objects, the reference of the x and the reference of the y in memory are different so they are not equal.

```Javascript
    const x = {id:2};
    const y = {id:2};
    x === y; // =false, values are the same but object's references are not the same
```
