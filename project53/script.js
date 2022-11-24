'use strict';

const box = document.querySelector('.box');

const newHeight = 300;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);
//nullish  орператор не срабатывает на нулл, undefined
let userName;
let userKey;
console.log(userName ?? userKey ?? "user");