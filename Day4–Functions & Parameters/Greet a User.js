
// Write a function called greetUser that takes two parameters: 1) name (a string) 2) timeOfDay (a string like "morning", "afternoon", or "evening")

function greetUser(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`;
}

// Example usage:
console.log(greetUser("Alice", "morning"));   // Output: Good morning, Alice!
console.log(greetUser("Bob", "evening"));     // Output: Good evening, Bob!
