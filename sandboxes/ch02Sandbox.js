// const hi = name => `Hi ${name}`;
// let greeting = name => hi(name);

// // Here, the function wrapper around hi in greeting is completely redundant. Why? Because functions are callable in JavaScript. When hi has the () at the end it will run and return a value. When it does not, it simply returns the function stored in the variable.

// console.log(hi);
// console.log(hi('Brandt'));

// greeting = hi;
// console.log(greeting('times'));

// // In other words, hi is already a function that expects one argument, why place another function around it that simply calls hi with the same bloody argument? It doesn't make any damn sense. It's like donning your heaviest parka in the dead of July just to blast the air and demand an ice lolly.
// // It is obnoxiously verbose and, as it happens, bad practice to surround a function with another function merely to delay evaluation (we'll see why in a moment, but it has to do with maintenance)

// // More obnoxious examples

// const getServerStuff = callback => ajaxCall(json => callback(json));

// // enlightened
// const getServerStuffed = ajaxCall;

// Chapter 03

const xs = [1, 2, 3, 4, 5];

// pure
const pure1 = xs.slice(0, 3); // [1, 2, 3]
const pure2 = xs.slice(0, 3); // [1, 2, 3]
const pure3 = xs.slice(0, 3); // [1, 2, 3]
const pure4 = xs.slice(0, 3); // [1, 2, 3]
console.log(pure1, pure2, pure3, pure4);

// impure
const impoure1 = xs.splice(0, 3); // [1, 2, 3]
const impoure2 = xs.splice(0, 3); // [4, 5]
const impoure3 = xs.splice(0, 3); // []
console.log(impoure1, impoure2, impoure3);

// impure
let minimum = 21;
const checkAge = age => age >= minimum;
console.log(checkAge(minimum));

// pure
const checkAgePure = age => {
	const minimum = 21;
	return age >= minimum;
};
console.log(checkAgePure(minimum));
