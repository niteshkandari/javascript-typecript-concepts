abstract class Boss {
    constructor(protected name: string[] = [],private readonly id:number=0){}
  
   abstract addName(): void; 
//    abstract addId(_id:number): void;
   
   show() {
       console.log({
           name:this.name,
           id:this.id
        })
    }
};

class Manager extends Boss {
    addName(...args){
        this.name.push(...args);
    };
    // addId(_id:number) { //cannot do this as id is readonly on top of that it is also private
    //    this.id = _id;
    // }
};

const mang = new Manager([],78);

mang.addName("nick","trick","rick");
mang.show();
console.log(mang instanceof Manager)