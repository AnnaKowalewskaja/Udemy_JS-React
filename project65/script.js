'use strict';
// const timerId1 = setTimeout(function(text){
//     console.log(text);
// },2000,'Hello');




// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;
//     const id = setInterval(frame, 10);

//     function frame() {
//         if (pos === 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);


// function logger(){
//     if(i===3){
//         clearInterval(timerId);
//     }
//     console.log("text");
//     i++;
// }


// btn.addEventListener('click',()=>{
//     //const timerId = setTimeout(logger,2000);
//     timerId = setInterval(logger,1000);
// });


// let id = setTimeout(function log(){
// console.log('Hello');
// id = setTimeout(log,500);
// },500);

////////////////////////////////////////////////////////////////////////////////68

//const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.getMonth());

// console.log(now.setHours(10));
// console.log(now);


// const nonow = new Date('2020-05-01');
// const nonow2 = new Date(2020,5,1,20);
// const nonow3 = new Date(0);
// const nonow4 = new Date(-9999999);
// console.log(nonow2);

// let start = new Date();

// for (let i =0;i<10000000;i++){
//     let some = i**3;
// }

// let end = new Date();
// console.log(`Start -end = ${end-start}`); 

/////////////////////////////////112
// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;
// const elem = document.querySelector('.box');
// let pos = 0;

// function myAnimation() {
//     pos++;
//     elem.style.top = pos + 'px';
//     elem.style.left = pos + 'px';
//     if (pos < 300) {
//         requestAnimationFrame(myAnimation);
//     }


// }

// btn.addEventListener('click', () =>{requestAnimationFrame(myAnimation)});