const names = ["Nick",null,"Kandari"];

//filter falsy values
const filtered  = names.filter(Boolean);
console.log(filtered);

//check if atleast one value is truthy
const anyTruthy = names.some(Boolean);
console.log(anyTruthy);

//check if all values are truthy
const allTruthy = names.every(Boolean);
console.log(allTruthy);