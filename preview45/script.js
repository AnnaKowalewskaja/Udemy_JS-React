'use strict';
const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function(){
//     alert('clik');
// };
//let i = 0;
const deleteElem = (e) => {
    //e.target.remove();
    console.log(e.target);
    console.log(e.type);

    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElem);
    // }
};
// btn.addEventListener('click', deleteElem);
// overlay.addEventListener('click', deleteElem);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElem);
});

// btn.addEventListener('mouseenter', (e) => {
//     //console.log(e.target);
// });

//addeventlistener лучше потому что можно назначить несаолько обработчиков событий и все сработают

const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault(); //отменить стандартное поведение
    console.log("hihihiih");
});