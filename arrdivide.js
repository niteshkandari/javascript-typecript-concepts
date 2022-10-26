const arr = Array(10).fill('lol');
arr.push(...Array(10).fill('o'))
arr.push(...Array(10).fill('oeq'))
arr.push(...Array(10).fill('owedwe'))
arr.push(...Array(10).fill('o21312'))
arr.push(...Array(10).fill('o1'))
arr.push(...Array(10).fill('21o123'))
arr.push(...Array(10).fill('342342'))
arr.push(...Array(10).fill('3242'))
arr.push(...Array(10).fill('@%*^#%&^'))

const optimize = () => {
  const ar2 = [];
  let start = 0;
  let end = 10;
  while (arr.length > 0) {
    ar2.push(Object.assign({}, { data: arr.splice(start, end) }));    
  }
  return ar2;
};

console.log(optimize());
