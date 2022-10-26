
// ! tells ts it will be available
const button = document.querySelector("button")!;
console.log(document,"documnet")
button.addEventListener('click',() => {
    console.log("hello")
});


//literals

const combine = (num1:number,num2:number, conversion:"string" | 'number') => {
   if(conversion === "string") {
       return ''+num1 + num2;
   }
   else {
       return num1 + num2;
   }
}
//void 
(function():void {
    console.log("An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.")
})()

console.log(combine(1,2,"string"))

const foo = (num:number,cb:(num:number) => void) => {
  num += 4;
  cb(num);
}

foo(12,(num:number) => console.log(num,"call back"));

//unknown type

let val:unknown;

val = "ASD"
val = {213:"ASD"}
val = [];

//never
const generateError = (err:string,code:number):never => {
    throw {message:err,type:code};
}

generateError("something went wrong",500); //if we try to console this line nothing will be printd not even undefined cos throw will stop the further running of the script


// ! this tells that we will get the value in future 
