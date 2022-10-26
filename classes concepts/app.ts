// function Logger(constructor:Function) {
//     console.log('logging...');
//     console.log(constructor);
// }

// @Logger
// class Person {
//    constructor(private readonly email:string) {
//       this.email = email;
//    }
// }

//decorator factory

function Logger(loggingString:string) {
    return function(constructor:Function) {
       console.log(loggingString);
       console.log(constructor);
    }
}

@Logger('LOGGING - PERSON')
class Person {
      constructor(private readonly email:string) {
      this.email = email;
   }
}