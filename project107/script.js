// // 'use strict';

// // const data = [
// //     {
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

// // data.forEach((blockObj,i) => {
// //     const block = document.createElement(blockObj.tag);
// //     //if(!blockObj.id) throw new Error(`In object number ${i+1} no id`);
// //     block.setAttribute('id', blockObj.id);
// //     document.body.append(block);
// // });

// // const err = new SyntaxError('kkkkk');
// // console.log(err.name,err.message,err.stack);


// 'use strict';

// const data = [{
//         id: 'box',
//         tag: 'div'
//     },
//     {
//         id: '',
//         tag: 'nav'
//     },
//     {
//         id: 'circle',
//         tag: 'span'
//     }
// ];



// // const err = new SyntaxError('kkkkk');
// // console.log(err.name,err.message,err.stack);

// try {
//     data.forEach((blockObj, i) => {
//         const block = document.createElement(blockObj.tag);
//         if (!blockObj.id) throw new SyntaxError(`In object number ${i+1} no id`);
//         block.setAttribute('id', blockObj.id);
//         document.body.append(block);
//     });
// } catch (e) {
//     if(e.name ==="SyntaxError"){
//         console.log(e.message);
//     }else throw e;
// }

////////////////////////////////////////////////////////////109
/*   React
1) JSX
2) Babel
3) Webpack
4) React
5) NodeJS

Vue.JS
 1) JS
 2) Webpack
 3) NodeJS





*/