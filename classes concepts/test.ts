class Test {
  constructor(
    private emp: Array<string> = ["default"],
    protected readonly id: string = Math.random().toString(36).slice(2, 6)
  ) {};
  add(...args: Array<string>){
      this.emp.push(...args);
  }
  describe(this:Test){
    console.log({
        emp:this.emp,
        id:this.id  
    })
  }
};

class Sub extends Test {
    constructor(emp:Array<string>,id?:string){
        super(emp,id);
    }
    showParentProps() {
      console.log(this.id);
  }
}

const subInstace = new Sub(['nick','rick']);
subInstace.describe();
