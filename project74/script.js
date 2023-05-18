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


////////////////////////////////////////////////////////////////////////////////////86
// console.log('запрос..');

// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('подготовка...');
//         const product = {
//             name: 'TV',
//             price: 2000,
//         };
//         resolve(product);

//     }, 2000);
// });

//then == resolve
// req.then((product) =>{
//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             //reject(product); //error
//             resolve(product);
//         }, 2000);
//     }).then(data => {
//         console.log(data);
//     }).catch(()=>{
//         console.error('Ошибка');
//     });


// });

////////////////////////////////////////////////////////////////////////////////////87
// fetch('https://jsonplaceholder.typicode.com/posts'),{
//     method:'POST',
//     body:JSON.stringify({
//         name:"Alex",
//         headers:{
//             'Content-type':'application/json',
//         }
//     })
// }
//       .then(response => response.json())
//       //приходит ответ от сервера в формате json,переводим в обхект ( .json), возвращает промис и дальшев консоль

//       .then(json => console.log(json));

////////////////////////////////////////////////////////////////////////////////////88
//filter
// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
// const shortNames = names.filter((name) =>name.length < 5);
// console.log(shortNames);

//map
// const answers =['IvaN','AnnA','Hello'];
// const result = answers.map((item)=>item.toLowerCase());
// console.log(result);

// //every/some
// const some =[4,'qwq','qddffcds'];
// // console.log(some.some((item)=>typeof item ==='number')); //true
// console.log(some.every((item)=>typeof item ==='string'));

//reduce
// const arr = [4,5,1,3,2,6];
//                             // 0   4
//                             // 4   5
//                             // 9   1
//                             // 10 ...
// const result = arr.reduce((sum,current)=>sum+current);
// console.log(result);//21

//                             // 3   4
//                             //     5
//                             //     1
//                             //    ...
// const result = arr.reduce((sum,current)=>sum+current,3);


// const arr = ['apple','pear','plum'];

// const result = arr.reduce((sum,current)=>`${sum}, ${current}`);
// console.log(result);


// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
//     .filter((item) => item[1] === 'persone')
//     .map(item => item[0]);
// console.log(newArr);

////////////////////////////////////////////////////////////////////////////////////
// Задания на работу с методами массивов


// Задачи:
// 1) У вас есть список фильмов с рейтингом в виде массива объектов.
// Напишите функцию showGoodFilms, которая будет принимать этот массив, 
//а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.

const films = [{
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(item => item.rating >=8);
}

//console.log(showGoodFilms(films));

// 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив,
// а возвращать будет строку,
// которая содержит названия фильмов через запятую.
// Пример:
// showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"
 function showListOfFilms(arr) {
    //return arr.reduce((sum,current)=>`${sum}, ${current}`);
    return arr.reduce((acc,curr)=>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
 }

 //console.log(showListOfFilms(films));

//  3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, 
//а возвращать будет такой же массив с фильмами, 
//но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.
// Пример:
// setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]
function setFilmsIds(arr) {

    return arr.map((film,i)=>{
        film.id = i;
        return film;
    });

 }
//console.log(setFilmsIds(films));

//4) Запишите результат предыдущей функции в переменную tranformedArray. 
//Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. 
//Если это так - функция возвращает true.
// Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray); :)

 const tranformedArray = setFilmsIds(films);

 function checkFilms(arr) {
    return arr.every((film)=>film.hasOwnProperty('id'));
 }

 console.log(checkFilms(tranformedArray));



// 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.
// Пример:
// showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"
// 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.
// Пример:
// setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]
// 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray); :)
// P.S. Вот тут вы столкнетесь с интересным моментом, который я хочу, чтобы вы запомнили. Внимательно проследите за тем, что происходит внутри коллбэка и что будет проверяться. Дополнительно расписал этот момент в комментариях в ответах.
// Ответ с кодом этих задач можно найти тут: ссылка
// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.
// Но постарайтесь решить самостоятельно 🙂