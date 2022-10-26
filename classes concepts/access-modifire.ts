class Departmentt {
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];
  
    constructor(private readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
    }
  
    describe(this: Departmentt) {
      console.log(`Departmentt (${this.id}): ${this.name}`);
    }
  
    addEmployee(employee: string) {
      // validation etc
      // this.id = 'd2';
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  class ITDepartmentt extends Departmentt {
    admins: string[];
    constructor(id: string, admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
    }
  }
  
  class AccountingDepartmentt extends Departmentt {
    constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
    }
  
    addEmployee(name: string) {
      if (name === 'Max') {
        return;
      }
      this.employees.push(name);
    }
  
    addReport(text: string) {
      this.reports.push(text);
    }
  
    printReports() {
      console.log(this.reports);
    }
  }
  
  const it = new ITDepartmentt('d1', ['Max']);
  
  it.addEmployee('Max');
  it.addEmployee('Manu');
  
  // it.employees[2] = 'Anna';
  
  it.describe();
  it.name = 'NEW NAME';
  it.printEmployeeInformation();
  
  console.log(it);
  
  const accounting = new AccountingDepartmentt('d2', []);
  
  accounting.addReport('Something went wrong...');
  
  accounting.addEmployee('Max');
  accounting.addEmployee('Manu');
  
  accounting.printReports();
  accounting.printEmployeeInformation();
  
  // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
  // accountingCopy.describe();