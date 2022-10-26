class Department {
  constructor(
    private readonly id: string = "0",
    protected name: string[] = [],
    public jobid: string = "111"
  ) {};

   add(name:string) {
    this.name.push(name);
   }
   describe(){
       console.log({
           Departmment:'Departmment',
           name:this.name,
           id:this.id,
           jobid:this.jobid
       });
   }
}

class Team extends Department {

    add(...args) { //method overriding we can now add our owm implementation of adding
         this.name.push(...args); //since name is protected not private we can access it here
    }
    describe() {
        console.log({
            Team:'Team',
            name:this.name,
            // id:this.id, id is private cannot access it here
            jobid:this.jobid
        })
    }
}

const lead = new Team("190",[], "9898");

lead.add("nick","rick","trick");
lead.describe();