const item = [{ id: 1 }, [{ id: 2 }, { id: 3 }], [{ id: 4 }]];
const flattenItems = item.flat();
console.log(flattenItems);

//also depth level can be defined 

const numbers = [1,[[[2]]],3];
const flattenNumbers = numbers.flat(2);
console.log(flattenNumbers);