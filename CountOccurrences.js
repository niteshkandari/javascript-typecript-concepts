const array = ["a", "a", "b", "c", "c", "d", "b", "a"];

const countMap = new Map();

array.forEach((item) => {
  const currentCount = countMap.has(item) ? countMap.get(item) : 0;
  countMap.set(item, currentCount + 1);
});
console.log(countMap);// Map(4) { 'a' => 3, 'b' => 2, 'c' => 2, 'd' => 1 }
console.log(countMap.keys()); //[Map Iterator] { 'a', 'b', 'c', 'd' }
console.log(countMap.values()); //[Map Iterator] { 3, 2, 2, 1 }
console.log(countMap.size); //4
console.log(countMap.entries()); //[Map Entries] { [ 'a', 3 ], [ 'b', 2 ], [ 'c', 2 ], [ 'd', 1 ] }
console.log(countMap.get('b')); //2
console.log(countMap.has('b')); // true
countMap.forEach((key,value) => {
  console.log('key => ',key, 'value => ',value);
})
Array.from(countMap,(key,index) => {
  console.log('key => ',key, 'index => ',index);
})
Array.from(countMap,(key,index) => {
 console.log('index => ',index,':',key.map(Number).filter(Boolean).join(''));
})
