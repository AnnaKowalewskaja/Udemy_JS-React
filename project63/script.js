///////////////////////////////////////////////// 63
const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); //2
// console.log(btns[0].classList); //classes

// console.log(btns[0].classList.item(1)); //first class
// console.log(btns[0].classList.add('red')); //red class
//btns[0].classList.toggle('red');
// btns[0].classList.remove('red');

// if(btns[0].classList.contains('red')){
//     console.log('red');
// }

// btns[0].addEventListener('click', () => {
//     // if(!btns[1].classList.contains('red')){
//     //     btns[1].classList.add('red');
//     // }else{
//     //     btns[1].classList.remove('red');
//     // }

//    // btns[1].classList.toggle('red');
// });

wrapper.addEventListener('click', (event) => {
    //console.dir(event.target);
    // if(event.target && event.target.tagName == 'BUTTON'){
    //     console.log('button');
    // }

    // if(event.target && event.target.classList.contains('blue') ){
    //     console.log('blue');
    // }

    // if(event.target && event.target.matches("button.blue") ){
    //     console.log('i have blue');
    // }



});

// btns.forEach(btn =>{
//     btn.addEventListener('click',() =>{
// console.log('click forEach');
//     });
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);

