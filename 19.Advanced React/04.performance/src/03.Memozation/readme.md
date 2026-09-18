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

based on previous subject we have:

```Javascript
const x = 2;
const y = 2;
x === y // =true, values are exactly the same
```

and

```Javascript
    const x = {id:2};
    const y = {id:2};
    x === y; // =false, values are the same but object's references are not the same
```

The fundamental reason for this difference lies in how JavaScript stores data in memory and how the strict equality operator (===) evaluates operands.

Here is the step-by-step breakdown:

1. Primitive Values: Compared by Value
   Primitives (numbers, strings, booleans, null, undefined, symbols, and BigInts) are immutable data types stored directly on the Call Stack.

When you declare primitive variables:

```JavaScript
const x = 2;
const y = 2;
x === y; // true
```

Memory Allocation: The stack holds the literal value 2 in the slot reserved for x, and the literal value 2 in the slot reserved for y.

Equality Check: The === operator compares the actual data values stored in those stack slots. Since 2 is identical to 2, it evaluates to true.

```Plaintext
CALL STACK                        MEMORY HEAP
+-------+-----------+          +-----------------------+
|  x    |  #0x101   | -------->| #0x101: { id: 2 }     |
+-------+-----------+          +-----------------------+
|  y    |  #0x202   | -------->| #0x202: { id: 2 }     |
+-------+-----------+          +-----------------------+
```

When you instantiate two identical objects:

```JavaScript
const x = { id: 2 };
const y = { id: 2 };
x === y; // false
```

Memory Allocation:

JavaScript creates a new object in the Heap at address #0x101 with content { id: 2 }.

It creates a second new object in the Heap at address #0x202 with content { id: 2 }.

On the Call Stack, variable x stores the address #0x101, and variable y stores the address #0x202.

Equality Check: The === operator checks whether both variables contain the same memory address pointer on the stack, not whether the contents inside those heap addresses look the same.

```Plaintext
CALL STACK MEMORY HEAP
+-------+-----------+          +-----------------------+
| x     | #0x101    | -------->| #0x101: { id: 2 } |
+-------+-----------+          +-----------------------+
| y     | #0x202    | -------->| #0x202: { id: 2 } |
+-------+-----------+          +-----------------------+
```

Because #0x101 !== #0x202, x === y evaluates to false.

3. Achieving true with Objects
   To make an equality check between objects return true, both variables must point to the exact same location in memory:

```JavaScript
const x = { id: 2 };
const y = x; // Copying the reference (address #0x101)

x === y; // true
```

```Plaintext
CALL STACK MEMORY HEAP
+-------+-----------+
| x     | #0x101    | ---\     +-----------------------+
+-------+-----------+     >    | #0x101: { id: 2 }     |
| y     | #0x101    | ---/     +-----------------------+
+-------+-----------+
```

Here, y holds a copy of the pointer #0x101. Because both variables hold the identical memory address, === evaluates to true.
