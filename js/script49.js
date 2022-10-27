'use strict';
//49. События на мобильных устройствах
//touchstart
//touchmove
//toucheend
//touchenter
//touchleave
//touchcacncel


//touches
//targetTouches
//changedTouches

window.addEventListener('DOMContentLoaded',() =>{
const box = document.querySelector('.box');
box.addEventListener('touchstart',(e)=>{
    e.preventDefault();
    console.log('start');
    console.log(e.touches);
});

box.addEventListener('touchmove',(e)=>{
    e.preventDefault();
    console.log(e.targetTouches[0].pageX);
});

// box.addEventListener('toucheend',(e)=>{
//     e.preventDefault();
//     console.log('end');
// });

});




