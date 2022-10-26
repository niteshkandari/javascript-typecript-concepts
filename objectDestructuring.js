const product = {
  name: "iphone",
  price: "kidney",
  tags: ["phone", "device", "expensive"],
};
const { 0: firstTag, 2: thirdTag } = product.tags;
console.log(firstTag, thirdTag);
const [p,q,r,t] = product.name;
console.log(p,q,r,t); 
// output = i p h o

// const { name ,keyNotThere = 12 } = product;
// console.log(name,keyNotThere); 
// output = iphone