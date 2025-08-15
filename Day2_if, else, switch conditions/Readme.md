<h2>🚀 Day 2 – JavaScript Problem Solving (if-else, switch) </h2>

This repo contains three small but essential JavaScript programs I wrote as part of my daily problem-solving practice.
The focus for today was conditional statements (if, else if, and else) to make decisions in code. <hr>

<h3>📂 Problems Covered </h3> <hr>
1️⃣ Grade Calculator (GradeCalculator.js)

<b>Problem:</b>
Given a student’s score (0–100), output the grade:

A → 90–100

B → 80–89

C → 70–79

D → 60–69

F → below 60

<h3>My Approach: </h3>

Used a series of if-else if conditions to check the score range.

Returned the corresponding grade as a string.

💡 Tip: Remember, in JavaScript 89 > a >= 80 doesn’t work as in math. You need to use a >= 80 && a <= 89 to check ranges.<hr>

<h3><b>2️⃣ Traffic Light Simulator (Traffic-light-simulator.js)</h3></b>

Problem:
Take the current traffic light color and:

"red" → Stop

"yellow" → Get Ready

"green" → Go

Anything else → Invalid signal

<b>My Approach:</b>

First wrote a normal fixed-variable check.

Then added user input using Node.js readline module so the program can respond to real-time input.

💡 Tip: Always toLowerCase() user input before comparing—it avoids bugs when users type in different letter cases (e.g., Green, GREEN).<hr>

<h3><b>3️⃣ Positive-Negative-Zero Checker (positive-negative-zero.js)</b></h3>

Problem:
Given a number, determine if it’s positive, negative, or zero.

My Approach:

Used if-else if-else conditions for checking.

Provided two versions:

Fixed test values in the code.

Takes user input with readline.

💡 Tip: Always convert user input to Number() before checking—it’s read as a string by default in Node.js.<hr>

<h3><b>📌 Things I Learned Today</h3></b>

How to handle decision-making in JavaScript with if-else.

How to take user input using Node.js readline module.

Importance of input sanitization (trim(), toLowerCase(), type conversion).<hr>
<h3><b>
💡 Pro Tips for Anyone Trying This</h3></b>

Keep your conditions clean and readable.

Test with different edge cases (e.g., 0, 100, unexpected inputs).

Always check for logical errors—syntax may be right but logic can still fail.

Write both static and interactive versions of your programs—it improves adaptability.<hr>

<b>✅ Summary:</b> <br>
In this day’s challenge, I built three JavaScript programs using if-else logic and user input handling.
It was a great practice to improve conditional decision-making skills in code.<hr>

<b>🔥 Pro Tip:</b><br>
As soon as you solve a problem, add one twist to it (like user input, random values, or extended conditions). That’s how you make simple problems interesting and learn faster.
