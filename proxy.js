//proxy

// const target = {
//     message1: "foo",
//     message2: "bar"
// }

// handler = {
//     get(target,props,reciever){
//       console.log(target,"target");  
//       console.log(props,"props");  
//       console.log(reciever,"reciever");  
//     }
// }

// const proxy = new Proxy(target,handler);

// console.log(proxy.handler);
let handler = {
    get: function(target, name) {
      return name in target ? target[name] : 42
    }
  }
  
  let p = new Proxy({}, handler)
  p.a = 1
  console.log(p.a, p.b) // 1, 42


  const handler2 = {
    get(obj, prop) {
      return prop in obj ?
        obj[prop] :
        37;
    }
  };
  
  const p = new Proxy({}, handler2);
  p.a = 1;
  p.b = undefined;
  
  console.log(p.a, p.b);
  //  1, undefined
  
  console.log('c' in p, p.c);
  //  false, 37