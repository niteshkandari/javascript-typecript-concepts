class Departmenttt {
    name: string = "";
    constructor(n: string) {
        this.name = n;
    }
    print(this:Departmenttt) {
        console.log("name  :",this.name)
    }
}

const p = new Departmenttt("Nick");
p.print();
const copy_P = {print:p.print};
copy_P.print(); //now that we have added this para in print here it will throw err as copy_P is not the insatnce of Departmenttt

//with this para above line would have given undefined