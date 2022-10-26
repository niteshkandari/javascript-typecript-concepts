// static 

class Reports {
    static report:string = "";
    
    static createReport(val:string) {
        this.report = val;
    }
}

console.log(Reports.report === "" && new Error('no report'));
Reports.createReport("new year report 222 changes")
console.log(Reports.report);
