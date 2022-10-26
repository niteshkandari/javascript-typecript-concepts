// class Department {
//     name: string = "";
//     constructor(n: string) {
//         this.name = n;
//     }
// }

// const p = new Department("Nick");
// console.log(p);
//output 
//Department {name: 'Nick'}

// class Department {
//     name: string = "";
//     constructor(n: string) {
//         this.name = n;
//     }
//     print(this:Department) {
//         console.log("name  :",this.name)
//     }
// }

// const p = new Department("Nick");
// console.log(p.print());
//output 
//name  : Nick


// class Department {
//     name: string = "";
//     constructor(n: string) {
//         this.name = n;
//     }
//     print(this:Department) {
//         console.log("name  :",this.name)
//     }
// }

// const p = new Department("Nick");

// const copy = {print:p.print};
// console.log(copy.print()) // here we will get err as there is no name in the copy and this in the print method points to the department, to fix it we will have to add name key in the copy obj as well 



class Department {
    private employee: string[];
    constructor(){
        this.employee = [];
    }
    addEmp(args:string) {
       this.employee.push(args);
    }
    showEmp(){
        console.log(this.employee);
    }
}

const dObj = new Department();

dObj.addEmp("nick");
dObj.addEmp("rick");
// dObj.employee.push("asd");   
// dObj.employee[3] = "hello"  
// flaw here is that we can push data to employee without using addEmp method , so to avoid that we ought to make emp variable as private
// after making emp private we cannot add like this it will simply throw err 
dObj.showEmp();
//output
// (4) ['nick', 'rick', 'asd', 'hello']

class Employee {
    constructor(private id:number,private name:string) {}// shorthand
    describe(){
        console.log(this.id, this.name);
    }
}
const emp = new Employee(12,"Nick");
emp.describe();

// console.log(emp.id,emp.name); this will throw an error as id and name are private so we cant acess it like this

//readonly

class Students {
    constructor(private readonly id:number,private name:string){}
    changeProps(changedId:number,changedName:string){
        // this.id = changedId; this will throw an error as id is readONly so we cant change its value whatsoever
          this.name = changedName;
    } 
    describe(){
      console.log(this.name,this.id); 
    }
}

const std = new Students(12,"nick");
std.describe();
//output 
//nick 12

std.changeProps(1233,"rickkkk");
std.describe();
//output 
//rickkkk 12

//inheritance

class Boss {
    constructor(public id:number = 0,public name:string="default value"){}// shorthand
    assignValue(id:number,name:string) {
       this.id = id;
       this.name = name;
    }
    val(){
        console.log("from boss")
    }
    print(this:Boss) {
        console.log(`name: ${this.name} id: ${this.id}`);
    }
}

class Manager extends Boss {
    describer(){
      Boss.prototype.val();      
    }
};

const m = new Manager();
m.print();
m.assignValue(12,"nick");
m.print();
m.describer();

//super

class Parent {
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }
    print(){
        console.log("parent",this.id,this.name);
    }
}

class Child extends Parent {
    constructor(id:number,name:string){
       super(id,name); // calling the constructor of super class and forwarding the value to it
    }
}

const  c = new Child(12,"nick");
c.print();
