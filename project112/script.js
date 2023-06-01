 'use strict';


// const btnPhone = document.querySelector('#iphone'),
//     btnMacbook = document.querySelector('#macbook'),
//     images = document.querySelectorAll('img');





// let phoneAnimation;
// btnPhone.addEventListener('click', () => {
//     if (!phoneAnimation) {
//         phoneAnimation = images[0].animate([{
//                 transform: 'translateY(0) rotate(0deg)',
//                 filter: 'opacity(100%) '
//             },
//             {
//                 transform: 'translateY(100px) rotate(180deg)',
//                 filter: 'opacity(70%) '
//             },
//             {
//                 transform: 'translateY(-100px) rotate(360deg)',
//                 filter: 'opacity(40%) '
//             },
//             {
//                 transform: 'translateY(0) rotate(180deg)',
//                 filter: 'opacity(70%) '
//             },
//         ], {
//             duration: 3000,
//             iterations: Infinity,
//         });
//     } else if (phoneAnimation.playState === 'paused') {
//         phoneAnimation.play();
//     } else {
//         phoneAnimation.pause();
//     }
// });


///////////////////////////////
// const multiply20 = (price) => price * 20;
// const divide100 = (price) => price / 100;
// const normalizePrice = (price) => price.toFixed(2);

// const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);

// const composeWithArgs = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)));

// const discount = compose(normalizePrice, divide100, multiply20);

// discount(2000);


///////////////////////////
// const promisify = (item, delay) =>
//     new Promise(resolve => setTimeout(() => resolve(item), delay));
 
// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);
 
// async function one() {
//     const promises = [a(), b(), c()];
//     const [outpu1, outpu2, outpu3] = await Promise.all(promises);
//     return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
// }
 
// async function two() {
//     const promises = [a(), b(), c()];
//     const outpu1 = await Promise.race(promises);
//     return `two is done: ${outpu1}`;
// }
 
// async function three() {
//     const outpu1 = await a();
//     const outpu2 = await b();
//     const outpu3 = await c();
//     return `three is done: ${outpu1} ${outpu2} ${outpu3}`
// }
 
// one().then(console.log);
// two().then(console.log);
// three().then(console.log);
//////////////////////////////////////////////////////114
// console.log(1);

// setTimeout(()=>{
//     console.log('timeout');
// },2000);

// setTimeout(()=>{
//     console.log('timeout__4000');
// },4000);

// console.log(2);

// let k =0;
// function count(){
//     for(let i= 0; i<1e9 ;i++){
//         k++;
//     }
//     alert('done');
// }


// setTimeout(()=>{
//     console.log(1);
// },0);
// console.log(2);

///////////////////////////////////////////////////////115

setTimeout(() => {
    console.log('timut');
});

Promise.resolve()
.then(() =>console.log('promise'));
Promise.resolve()
.then(() =>console.log('promise'));
Promise.resolve()
.then(() =>console.log('promise'));
Promise.resolve()
.then(() =>console.log('promise'));
Promise.resolve()
.then(() =>console.log('promise'));
Promise.resolve()
.then(() =>console.log('promise'));

setTimeout(() => {
    console.log('timut');
});

Promise.resolve()
.then(() =>console.log('promise'));
Promise.resolve()
.then(() =>console.log('promise'));
Promise.resolve()
.then(() =>console.log('promise'));
Promise.resolve()
.then(() =>console.log('promise'));
Promise.resolve()
.then(() =>console.log('promise'));
Promise.resolve()
.then(() =>console.log('promise'));

console.log('code');


/*
code
promise
promise
promise
promise
promise
promise
promise
promise
promise
promise
promise
promise
timut
timut

*/

//first -micro tasks(then,catch,finaly,awiat)
//second - macrotasks ()=>{}