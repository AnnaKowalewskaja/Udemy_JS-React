"use strict";
//20. условия

// const num = 50;
// switch (num) {
//     case 49:
//         console.log("no");
//         break;
//     case 100:
//         console.log("no");
//         break;
//     case 50:
//         console.log("yes")
//         break;
//     default:
//         console.log("default");
//         break;
//     }


//21.Логические операторы

//null,undefined,NaN,"",0 - false

// const hamburger = 5,
//     fries = 0;

// if (hamburger && fries) {
//     console.log('ja syt');
// }

// const hamburger = 3,
//     cola = 0,
//     fries = 1;

// console.log(hamburger >= 3 && cola && fries); // 0 

// console.log(1 && 0); //0
// console.log(1 && 5);//5
// console.log(null && 5); //null
// console.log(0 && 'hello my bp');//0

// if (hamburger >= 3 && cola === 1 && fries) {
//     console.log('all good');
// } else {
//     console.log('go out')
// }


// const hamburger = 3,
//     cola = 0,
//     nuggets =2,
//     fries = 3;

// if (hamburger >= 3 && cola >=  2 || fries >=3 && nuggets) {
//     console.log('all good');
// } else {
//     console.log('go out')
// }

//console.log(!0); //true

// let johnReport, alexReport, samReport,mariaReport = 'done';

// console.log(johnReport||alexReport||samReport||mariaReport);

// console.log( NaN || 2 || undefined );//2

// console.log( NaN && 2 && undefined );//NaN

// console.log( 1 && 2 && 3 );//3

// console.log( !1 && 2 || !3 );//false

// console.log( 25 || null && !3 );//25

// console.log( NaN || null || !3 || undefined || 5);//5

// console.log( NaN || null && !3 && undefined || 5);//5

// console.log( 5 === 5 && 3 > 1 || 5);//true


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) { 
//    console.log('Done!')
// }
// //true && false || true &&  true
// // false  || true
// //---------t

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// //f ||  f|| f || t  --------t

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// //f &&f || f && t
// //f || f
// //f

//22. циклы

let num = 50;

// while(num <= 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

//23. (д) Цикл в цикле и метки
// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);

//     }
// }

// *
// **
// ***
// ****
// *****
// ******

// for (let i = 0; i < 6; i++) {
//     let ris="";
//     for (let j = 0; j <= i; j++) {
//        ris+='*';
//     };
//     console.log(ris)
// }

// let result = '';
// const length = 7;
// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level ${i}` );
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level ${j}` );
//         for (let k = 0; k < 3; k++) {
//             if(k===2){
//                 break first; //ищет метку first и идет туда(break mozno)
//             }
//             console.log(`Third level ${k}` );
    
//         }
//     }
// }