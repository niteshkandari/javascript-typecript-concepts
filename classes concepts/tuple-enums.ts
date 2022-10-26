const obj:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number, string] //tuple (which is of fixed length) here we are telling it can have only two values but ts cant catch push 
} = {
    name:"nick",
    age:22,
    hobbies:["guitar","cooking","brewing"],
    role:[1,"author"]
}
obj.role.push("item");
// obj.role[0] = "123"; //ts will throw error as in our tuple first el can only be num
// obj.role = [0,"123","asdasd"]; // will throw err as we cannot inc length of the role although with push it is allowd
 console.log(obj);

 enum Role { ADMIN = 7, USER_TYPE_1, USER_TYPE_2, USER_TYPE_3}
console.log(Role);
//output
/**
ADMIN: 7
USER_TYPE_1: 8
USER_TYPE_2: 9
USER_TYPE_3: 10
 */
 console.log(Role.USER_TYPE_3); //output 10