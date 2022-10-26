const dogs = [
  { name: "John", age: 5 },
  { name: "Jo", age: 3 },
  { name: "RO", age: 4 },
  { name: "hn", age: 1 },
  { name: "ohn", age: 2 },
  { name: "o", age: 4 },
  { name: "hn", age: 5 ,val:12},
];
const dogNames = Array.from(dogs, ({ name, age,val = 'no' }) => {
  return { name, age ,val};
});
console.log(dogNames);
console.log(dogNames[dogs.length-1].val);
