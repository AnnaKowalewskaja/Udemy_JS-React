'use strict';

const box = document.getElementById("box"),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    wrapper = document.querySelector('.wrapper'),
    oneHeart = document.querySelector('.heart'); //first element

box.style.backgroundColor='blue';
box.style.width = '20px';
btns[1].style.borderRadius = '30%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color:yellow;';

// for(let i = 0;i < hearts.length;i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item =>{
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
//const text = document.createTextNode('hi gays');

div.classList.add('black');

//document.body.append(div);

//wrapper.append(div);
//wrapper.prepend(div);
//wrapper.appendChild(div);
//wrapper.insertBefore(div,hearts[0]);
//wrapper.removeChild(hearts[1]);
//wrapper.replaceChild(circles[0],hearts[0]);

//div.innerHTML =" <h1>'hello,world'</h1>";
div.insertAdjacentHTML('afterbegin',"<h2>Hello</h2>");


//hearts[0].before(div);
//hearts[0].after(div);
//circles[0].remove();

