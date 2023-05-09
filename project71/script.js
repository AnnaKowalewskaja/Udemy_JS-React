'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button');
const width = box.clientWidth;
const height = box.scrollHeight;


btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight+'px';
    //console.log(box.scrollTop);
});

//console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box); //from css, no inline
// console.log(style.display);

document.documentElement.scrollTop=0; // page top 0