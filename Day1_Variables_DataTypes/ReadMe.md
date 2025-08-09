# 🌟 Beginner JavaScript Practice Problems

This repo is my little collection of beginner-friendly JavaScript problems that I worked on while learning.  
Each problem is small but teaches you an important programming concept.  
I’ve also written the logic behind each one so you understand *why* it works, not just *what* it does. 🚀

---

## 📌 Problems in this repo (with logic)

### 1️⃣ Area of Circle ⚪
**What it does:**  
Takes a radius and calculates the area of the circle.

**Logic:**  
- Formula: `area = π × radius × radius`  
- Here, π (pi) is a constant ≈ 3.14159, but in JS you can use `Math.PI` for accuracy.  
- We multiply the radius by itself, then multiply that by π.  
- This gives the space covered inside the circle.

---

### 2️⃣ Even or Odd 🔢
**What it does:**  
Checks if a given number is even or odd.

**Logic:**  
- Use the modulo operator (`%`).  
- If `number % 2` is 0, it’s even; otherwise, it’s odd.  
- This works because even numbers are divisible by 2 without a remainder.

---

### 3️⃣ Sum of Three Numbers ➕
**What it does:**  
Takes 3 numbers and prints their sum.

**Logic:**  
- Add them directly if values are fixed in the code.  
- If taking input from the user, read the values, convert them to numbers (so `"5" + "10"` becomes `15` not `"510"`), and then sum them up.  
- Shows the difference between static and dynamic input handling.

---

### 4️⃣ Swap Two Numbers 🔄
**What it does:**  
Switches the values of two variables.

**Logic:**  
- Method 1: Use a temporary variable to hold one value while swapping.  
- Method 2: Use array destructuring `[a, b] = [b, a]` for a shorter way.  
- The goal is to exchange values without losing any.

---

### 5️⃣ Easy1 — Variables & Types 📝
**What it does:**  
Creates a string, a number, and a boolean. Prints each value and its type.  
Also loops through an array of people’s names and ages to print their details.

**Logic:**  
- Use `typeof` to check the data type of a value.  
- Arrays of objects are great for storing structured data like people’s info.  
- Looping (`forEach`) lets you go through each item and do something with it.

---

## 🎯 Why this repo
- 🧠 To build confidence with small, clear problems.  
- 💻 To practice writing, running, and modifying JavaScript code.  
- 🛠️ To explore more than one way to solve the same problem.  

---

## 💬 Final words
These problems may look small, but they are the building blocks of your coding journey.  
I started with these to get comfortable with JavaScript basics, and trust me — **you can do it too** 💪.  
Play with the code, break it, fix it, and watch your logic skills grow. 🌱
