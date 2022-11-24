'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// if (block) {
//     console.log(block.textContent);
// }
//Оператор опциональной цепочки
// console.log(block?.textContent);
// console.log(1 + 2);

const userData =  {
    name:'Ivan',
    age:null,
    say:function (){
        console.log("Hi");
    }
};

console.log(userData.skills?.js);
userData.say();
userData.hi?.();
// const userDataNull = null;

// console.log(userDataNull?.skills.js);