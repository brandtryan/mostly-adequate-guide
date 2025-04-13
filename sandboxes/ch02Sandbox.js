const hi = name => `Hi ${name}`;
const greeting = name => hi(name);

// Here, the function wrapper around hi in greeting is completely redundant. Why? Because functions are callable in JavaScript. When hi has the () at the end it will run and return a value. When it does not, it simply returns the function stored in the variable.

console.log(hi);
console.log(hi('Brandt'));
