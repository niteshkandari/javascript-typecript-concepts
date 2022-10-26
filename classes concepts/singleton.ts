//singleton pattern is used to ensure that there is only one instance of a class thats it or to ensure u cannot make multiple objects based on a class name

class Account{
    private static instance: Account;

    private constructor(private name: string,private readonly id: number){}
    
    static createInstance (name:string,id:number) {
        this.instance = new Account(name,id);
        console.log('instance created successfully');
    }
    static getInstance(){
        if(Account.instance) {
            return this.instance;
        }    
    }
    show(){
        console.log(Account.instance.name,  Account.instance.id , "show method")
    }
    static describe() {
        console.log(this.instance.name,  this.instance.id , "desc method")        
    }
}
Account.createInstance("nick",123);
const acc = Account.getInstance();
console.log(acc);
acc.show(); // since show is not static method we can call it using its instance 
Account.describe(); //now static method can only be accessed using class name 
