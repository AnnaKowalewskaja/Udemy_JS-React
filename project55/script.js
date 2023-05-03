'use strict';

const boxesQuery = document.querySelectorAll('.box');  //NodeList
const boxesGet = document.getElementsByClassName('box'); //HTMLCollection
//коллекция следит за элементами, а массив-нет 

boxesQuery.forEach(box => {
    if (box.matches('.this')) {
        console.log('this');
    }
});
//matches - содержит ли такой атрибут

console.log(boxesQuery[0].closest('.wrapper')); //ближайший с классом

// boxesQuery[0].remove();
// boxesGet[0].remove();

// for(let i = 0;i<5;i++){
//     const div = document.createElement('div');
//     div.classList.add('box');
//    // document.body.append(div);
//   // boxesGet[boxesGet.length] =div;. //так нельзя потому что коллекция
// }

// console.log(boxesQuery);
// console.log(boxesGet);
//console.log(document.body.children);

//console.log(Array.from(boxesGet));//чтобы получить массив из коллекции