 'use strict';

// // // const data = [
// // //     {
// // //         id: 'box',
// // //         tag: 'div'
// // //     },
// // //     {
// // //         id: '',
// // //         tag: 'nav'
// // //     },
// // //     {
// // //         id: 'circle',
// // //         tag: 'span'
// // //     }
// // // ];

// // // data.forEach((blockObj,i) => {
// // //     const block = document.createElement(blockObj.tag);
// // //     //if(!blockObj.id) throw new Error(`In object number ${i+1} no id`);
// // //     block.setAttribute('id', blockObj.id);
// // //     document.body.append(block);
// // // });

// // // const err = new SyntaxError('kkkkk');
// // // console.log(err.name,err.message,err.stack);


// // 'use strict';

// // const data = [{
// //         id: 'box',
// //         tag: 'div'
// //     },
// //     {
// //         id: '',
// //         tag: 'nav'
// //     },
// //     {
// //         id: 'circle',
// //         tag: 'span'
// //     }
// // ];



// // // const err = new SyntaxError('kkkkk');
// // // console.log(err.name,err.message,err.stack);

// // try {
// //     data.forEach((blockObj, i) => {
// //         const block = document.createElement(blockObj.tag);
// //         if (!blockObj.id) throw new SyntaxError(`In object number ${i+1} no id`);
// //         block.setAttribute('id', blockObj.id);
// //         document.body.append(block);
// //     });
// // } catch (e) {
// //     if(e.name ==="SyntaxError"){
// //         console.log(e.message);
// //     }else throw e;
// // }

// ////////////////////////////////////////////////////////////109
// /*   React
// 1) JSX
// 2) Babel
// 3) Webpack
// 4) React
// 5) NodeJS

// Vue.JS
//  1) JS
//  2) Webpack
//  3) NodeJS

// */

// ////////////////////////////////////////////////////////////110
// //npm i jquery --save


// // import $ from 'jquery';

// // // const btn = $('#btn');
// // // console.log(btn);

// // $(document).ready(function () {
// //     $('.list-item:first').hover(function () {
// //         $(this).toggleClass('active');
// //     });

// //     $('.list-item:eq(2)').on('click', function () {
// //         $('.image:even').fadeToggle();
  
// //     });

// //     $('.list-item:eq(4)').on('click', function () {
// //         $('.image:odd').animate({
// //             opacity:'toggle',
// //             height:'toggle'
// //         },2000);
   
// //      });
// // });


// ////////////////////////////////////////////////////////////111

// function* generator(){
//     yield 's';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const str =generator();

// // console.log(str.next());
// // console.log(str.next());
// // console.log(str.next());

// // console.log(str.next());
// // console.log(str.next());
// // console.log(str.next());

// // console.log(str.next());
// // console.log(str.next());
// // //{ value: undefined, done: true }
// // console.log(str.next());  

// function* count(n){
//     for(let i =0;i<n;i++){
//         yield i;
//     }
// }

// for(let k of count(3)){
//     console.log(k);
// }

// // const counter = count(3);
// // console.log(counter.next().value);
// // console.log(counter.next().value);
// // console.log(counter.next().value);
// // console.log(counter.next().value);



////////////////////////////////////////////////////////////112
//requestAniamtionFrame

//////////////////////////////114

// yourScript.js

import { tns } from "../node_modules/tiny-slider/src/tiny-slider";
tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true
  });