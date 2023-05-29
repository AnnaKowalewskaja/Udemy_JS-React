"use strict";

// const inputRub = document.querySelector('#rub'),
//     inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset = utf-8');
//     request.send();


// request.addEventListener('readystatechange',()=>{
// if(request.readyState===4 && request.status ===200){
//     console.log(request.response);
//     const data =JSON.parse(request.response);
//     inputUsd.value =(+inputRub.value/data.current.usd).toFixed(2);
// }else{
//     inputUsd.value='Error';
// }
// });
//     //status
//     //statusText
//     //response    (answer)
//     //readyState


// });


//////////////////////////////////////103
// import {two} from './main';
// import {one as first} from './main';

// import * as data from './main';
// console.log(`${data.one} and ${data.two}`);
// data.sayHi();

import sayHi from "./main";
//export default function //only one export default