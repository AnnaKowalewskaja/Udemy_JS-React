// 'use strict';

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


//console.log('12-34-56'.replace(/-/g, ':'));