 'use strict';

// //95
// // localStorage.setItem('number',5);
// // console.log(localStorage.getItem('number'));
// // localStorage.removeItem('number');
// // localStorage.clear();

// const checkbox = document.querySelector('#checkbox'),
// form =  document.querySelector('form'),
// change =document.querySelector('#color');


// if(localStorage.getItem('isChecked')){
// checkbox.checked =true;
// }

// if(localStorage.getItem('bg') === 'changed'){

//     form.style.backgroundColor = 'red';
// }

// checkbox.addEventListener('change',() =>{
//     localStorage.setItem('isChecked',true);
// });

// change.addEventListener('click',()=>{
// if(localStorage.getItem('bg') === 'changed'){
//     localStorage.removeItem('bg');
//     form.style.backgroundColor = '#fff';
// }else{
//     localStorage.setItem('bg','changed');
//     form.style.backgroundColor = 'red';
// }
// });
// const persone ={
//     name:'Alex',
//     age:25,
// };

// const serializedPersone =JSON.stringify(persone);
// localStorage.setItem('Alex',serializedPersone);
// console.log(JSON.parse(localStorage.getItem('Alex')));

///////////////////////////////////////////////////////96
// new RegExp('pattern','flags');
//  /pattern/f

// const ans = prompt('Your name');

// const reg = /n/ig;

// console.log(reg.test(ans));

// const ans = prompt('Your number');
// const reg = /\d/g;
// console.log(ans.match(reg));

// const str ='My name is R2D2';
// console.log(str.match(/\w\d\w\d/i));

// i - вне зависимости от регистра
//   g - сразу несколько вхождений
//    m  -многострчный режим

// \d цифры  \D - не цифры
// \w буквы   \W не буквы
// \s пробелы
//console.log(ans.search(reg));
//console.log(ans.match(reg)); //array

// const pass = prompt('Password');
// console.log(pass.replace(/\./g,"*")); //  \. -только точки экранирование


//console.log('12-34-56'.replace(/-/g, ':'));\

////////////////////////// 99
// const persone = {
//     name: 'Alex',
//     age: 25,
//     get userAge() {
//         return this.age;
//     },
//     set userAge(num) {
//         this.age = num;
//     }
// };
// console.log(persone.userAge);
// console.log(persone.userAge = 30);
// console.log(persone.userAge);

////////////////////////// 100

// function User(name,age){
//     this.name = name;
//     this.age = age;
//     this.say = function(){
//         console.log(`Username: ${this.name},age - ${this.age}`);
//     };
// }

// const ivan = new User('Ivan',27);
// console.log(ivan.name);
// console.log(ivan.age);

// ivan.age = 30;
// ivan.say();


// function User(name,age){
//     this.name = name;
//     let userAge = age;
//     this.say = function(){
//         console.log(`Username: ${this.name},age - ${userAge}`);
//     };

//     this.getAge = function(){
//         return userAge;
//     };

//     this.setAge = function(age){
//         if(typeof age ==='number' && age > 0 && age<110){
//             userAge = age;
//         }else{
//             console.log('недопустимое значение');
//         }
//     };
// }


// const ivan = new User('Ivan',27);
// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(303);//недопустимое значение
// ivan.say();
//пример инкапсуляции.когда используется через this-можно изменить свойства
//если создать новую переменную в конструкторе - изменить её нельзя,тк снаружи переменная недоступна
//для изменеия свойств можно использовать геттеры и сеттеры(функции или get,set)



class User{
    constructor(name,age){
        this.name = name;
        this._age = age;
    }
    
   say(){
        console.log(`Username: ${this.name},age - ${this._age}`);
    }

    get age(){
        return this._age;
    }

    set age(age){
        if(typeof age ==='number' && age > 0 && age<110){
            this._age = age;
        }else{
            console.log('недопустимое значение');
        }
    }
}


const ivan = new User('Ivan',27);
console.log(ivan.name);


ivan.age = 99;
console.log(ivan.age);

ivan.say();
// _age ---это значит, что изменять нельзя(в классах переменные видны)