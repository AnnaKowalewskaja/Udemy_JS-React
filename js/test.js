//console.log('test');
// var name = 'John';

// var user=  {
//     name:"Peter",
//     printMessage(){
//         console.log(`Hello, ${this.name}!`);
//     }
// };

// var printMessage = user.printMessage;
// printMessage();

// const foo = bar();
// const number =2;
// function bar() {return number;}

// let name ="John";

// function  printName(){
//     let name ='Peter';
//     console.log(name);
// }

// printName();

// function  getThs(){
//     return this;
// }
// console.log(getThs());


// function foo(a,b){
//     return a*b;
// }
// const bar = foo.bind(null,2);
// bar(2);


// "use strict";

// const details = {
//     message:'Hello',
// }

// function getMessage(){
//     return this.message;
// }

// console.log(getMessage.call(details));

// console.group(message);
// var message = 'hello';

// function foo(){console.log(this);}
// foo.call(null);

// console.log(message);
// let message ='hello';

// printMessge();
// function printMessage(){
//     console.log('hello');
// }

// function foo(){
//     return{bar:1};
// }
// console.log(typeof foo().bar);

// var name = "John";

// function printName(){
//     console.log(name);
// var name ="Peter";
// console.log(name);
// }

// printName();

// var name = "John";

// function printName(){
//     console.log(name);
// }

// setTimeout(() =>{
//     let name = "Peter";
//     printName();
// },1000);

// const details = {
//     name:'John',
// }
// function getMessage(message){
//     return `${message} ${this.name}`;
// }
// console.log(getMessage.apply(details,["Hello"]));

// function foo(){
//     console.log(arguments);
// }
// foo(1,2,3);

var a =1,b = function a(x){x && a(--x);};
console.log(a);