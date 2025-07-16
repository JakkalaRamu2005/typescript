
## ✅ Understanding Types in JavaScript / TypeScript

> **Type** defines what **properties** and **methods** you can use on a value.

---

### 📌 Why are Types Important?

1. ✅ Helps us write **cleaner and more maintainable code**.
2. 🧠 Makes it easier to understand the **flow of large codebases**.
3. 🔍 Helps with **error checking** at compile time (especially in TypeScript).
4. 🚀 Improves **developer experience** with auto-completion and tool support.

---

### 🛠️ How to Define a Type?

#### 1. **Type Annotations**

```ts
let username: string = "Ramu";
let age: number = 17;
```

#### 2. **Type Interfaces**

```ts
interface Person {
  name: string;
  age: number;
  isCR: boolean;
}

const student: Person = {
  name: "Ramu",
  age: 17,
  isCR: false,
};
```

---

### 📦 Data Types

#### 🔹 Primitive Data Types

> A primitive holds a **single value** directly in memory.

* `string` – e.g., `let a = "hi";`
* `number` – e.g., `let b = 25;`
* `bigint`
* `boolean` – `true` or `false`
* `undefined` – declared but not assigned
* `null` – intentional absence of value
* `symbol` – unique identifier (mostly in advanced use cases)

---

#### 🔸 Object Data Types

> Objects store **multiple values** as key–value pairs or collections.

* `Object`
* `Array`
* `Function`
* `Class`

```js
let person = {
  name: "Ramu",
  age: 17,
  isCR: false,
};
```

---

### 🔍 Properties vs Methods

* **Property**: A characteristic of a value
  👉 Example:

  ```js
  array.length;  // length is a property
  ```

* **Method**: A function associated with a value
  👉 Example:

  ```js
  array.indexOf("item");  // indexOf() is a method
  ```

  > 💡 If it has **parentheses `()`**, it’s a **method**. If not, it’s a **property**.

---
type annotation - we tell typescript what is that variable storing  
type inferrencing - typescript will figure on its own what is stored in a variable

when to use type annotations?  
1. where if any function returns any type  
2. if a variable need to store more than one primitive type  
3. if variable is declared and will be assigned a value later.  

when to use type interfence?  
always

JSON.parse({"5"}) --------> 5  
JSON.parse({}) -----------> null  
JSON.parse({"IB-1"}) -----> "IB-1"  

TS cannot predict what will be the output of the parse  
during that time we have type annotations
---


functions -> annotations & inference 
objects -> annotations & inference 
arrays -> annotations & inference
tuples -> annotations & inference 
type aliasing - why we use it & it's advantages 
interface -> intro 

3-> arrow functions, 
   function expressions 
   function declarations 

fn declaration: 

function add(a,b){
  return a+b
}

fn exp:
--------
const add = function(a,b){
  return a+b;
}

arrow-functions:
-----------
const add=(a,b)=>a+b;

// interfaces 