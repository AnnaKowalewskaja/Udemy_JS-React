'use strict';

// const box = document.querySelector('.box');
// let observer = new MutationObserver(mutationRecords => {
//     console.log(mutationRecords);
// });

// observer.observe(box, {
//     childList: true,
// });

////////////////////////////////////////////////////////////////////////////////////75

// function User(name,id){
//     this.name= name;
//     this.id = id;
//     this.human = true;
// this.hello = function(){
//     console.log(`Hello ${name}`);
// };
// }


// //User { name: 'Ivan', id: 28, human: true } User { name: 'Alex', id: 20, human: true }

// User.prototype.exit = function(){
//     console.log(`User ${this.name} is exit`);
// };

// const Ivan = new User('Ivan',28);
// const Alex = new User('Alex',20);
// Ivan.hello();
// Ivan.exit();


////////////////////////////////////////////////////////////////////////////////////76

// function showThis(a,b){
//    // console.log(this);//undefined
//     function sum(){
//      //   console.log(this); //undefined
//         //return this.a+this.b; //error
//         return a+b;
//     }
//     console.log(sum());
// }
// showThis(4,5);


//обычнавя функция this-window
//use strict - this undefined

// const obj ={
//     a:20,
//     b:15,
//     sum:function(){
//         console.log(this); //{ a: 20, b: 15, sum: [Function: sum] }
//     }
// };

// obj.sum(); 


// function User(name,id){
//     this.name= name;
//     this.id = id;
//     this.human = true;
// // this.hello = function(){
// //     console.log(`Hello ${name}`);
// // };
// }

// let ivan = new User('Ivan',23);

//this в конструкторах и классах-новый экзэмпляр объекта


// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name:'John',
// };

// sayName.call(user,'Smith');
// sayName.apply(user,["Smith"]);

// function count(num){
//     return this*num;
// }

// const double = count.bind(2);

// console.log(double(3));



// const btn = document.querySelector('button');

// // btn.addEventListener('click',function(){
// //     this.style.backgroundColor='red';
// // });


// // btn.addEventListener('click',() =>{
// //     this.style.backgroundColor='red';
// // });
// //TypeError: undefined is not an object (evaluating 'this.style.backgroundColor='red'')

// //у стрелочный ункции нет контекста

// const obj ={
//     num:5,
//     sayNumber:function(){
//         const say = () =>{
//             console.log(this);
//         };
//         say();
//     }
// };

// obj.sayNumber(); //{num: 5, sayNumber: function}
// //стрелочная функция say взяла контекст у родителя.А так родитель-метод,то контекст-объект

// const double = a => a*2;

// console.log(double(4));

////////////////////////////////////////////////////////////////////////////////////77
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     calcArea() {
//         return this.height * this.width;
//     }
// }


// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height,width);
//         this.text = text;
//         this.bgColor = bgColor;


//     }
// showMyProps(){
//     console.log(`Text:${this.text}, color: ${this.bgColor}`);
// }
// }

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// // console.log(long.calcArea());
// // console.log(square.calcArea());

// const div = new ColoredRectangleWithText(25,10,"Hello",'red');
// div.showMyProps();
// console.log(div.calcArea());

////////////////////////////////////////////////////////////////////////////////////80
// const log = function(a){
//     console.log(a);
// };

// //log(1,2,'o','e',1,3,4,5);  //12[oe1345]

// function calcOrDouble(number,basis =2){
//     log(number*basis);
// }

// calcOrDouble(3);


///////////////////////////////////////////Test

// function getSum(a, b) {
//     function sum() {
//         console.log(this.a);
//         return a + b;
//     }
 
//     console.log(sum());
// }
 
// getSum(4, 5);

// class Slider {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
 
//     showSliderWidth() {
//         console.log(this.width);
//     }
// }
 
// const slider = new Slider('500px', '150px');
 
// slider.showSliderWidth();

// const urlObj = {
//     protocol: 'https',
//     domain: 'mysite.com',
//     showCurrentURL: function() {
//         const extractCurrDomain = () => {
//             return this.domain;
//         }
//         const extractCurrProtocol = () => {
//             return this.protocol;
//         }
 
//         console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`)
//     }
// }
 
// urlObj.showCurrentURL();

// const urlObj = {
//     protocol: 'https',
//     domain: 'mysite.com'
// }
 
// function showCurrentURL() {
//     const extractCurrDomain = () => {
//         return this.domain;
//     }
//     const extractCurrProtocol = () => {
//         return this.protocol;
//     }
 
//     console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`)
// }
 
// const url = showCurrentURL.bind(urlObj);
 
// console.log(url);

////////////////////////////////////////////////////////////////////////////////////82

// const persone = {
//     name:'Alex',
//     tel:'+485000000',
//     parents:{
//         mom:'Olga',
//         dad:'Viktor'
//     }
// };

// //console.log(JSON.stringify(persone)); //{"name":"Alex","tel":"+485000000"}
// //console.log(JSON.parse(JSON.stringify(persone))); //{name: "Alex", tel: "+485000000"}

// const clone = JSON.parse(JSON.stringify(persone));///Deep copy of object
// clone.parents.dad = 'Dima';
// console.log(clone);
// console.log(persone);

//Deep copy of object
