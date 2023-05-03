'use strict';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //56
// // // const obj = {
// // //     name:'Test',
// // //     [Symbol('hello')]:1,
// // // };
// // // //если нужно выввести символ
// // // //внутри обхекта создать метод через this[id] вывести можно
// // // let id = Symbol('id');
// // // obj[id]=1;
// // // let id2 = Symbol('id');
// // // obj[id2]=1;

// // // //console.log(id === id2); //всегда уникальные сущности
// // // let noDescription = Symbol();
// // // obj[noDescription] = 3;
// // // // console.log(obj[id]);
// // // //console.log(obj);

// // // for(let value in obj) console.log(value);

// // const myAweesomeDB={
// //     movies:[],
// //     actors:[],
// //     [Symbol('id')]:1123,
// //     [Symbol.for('noUnicality')]:'nie unikalnye'
// // };
// // //чтобы никто не мог поменять id можно свойству давать название через символ

// // //code

// // myAweesomeDB.id='3232323';
// // console.log(myAweesomeDB[Symbol.for('noUnicality')]);
// // console.log(myAweesomeDB);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //57 флаги
// //writable 
// //enumerable
// //configurable

// // const user ={
// //     name:'Alex',
// //     surname: 'Smith',
// //     showMyBuplicData:function(){
// //         console.log(`${this.name} ${this.surname}`);
// //     }
// // };

// //console.log(Object.getOwnPropertyDescriptor(user,'name'));
// //{ value: 'Alex', writable: true, enumerable: true, configurable: true }

// // Object.defineProperty(user,'name',{writable:false});
// // user.name='NewName';
// //TypeError: Cannot assign to read only property 'name' of object '#<Object>'


// //Object.defineProperty(user,'gender',{value:'male'});
// //console.log(Object.getOwnPropertyDescriptor(user,'gender'));
// /*
// {
//   value: 'male',
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// */

// //Object.defineProperty(user,'birtday',{writable:false});

// // Object.defineProperty(user,'birtday',{value:prompt('Date?'),enumerable:true,configurable:true});
// // console.log(Object.getOwnPropertyDescriptor(user,'birtday'));


// // Object.defineProperty(user,'showMyBuplicData',{enumerable:false}); // не перечесляется в перборе
// // for (let key in user) console.log(key);

// //console.log(Object.getOwnPropertyDescriptor(Math,'PI'));

// // Object.defineProperties(user,{
// //     name:{writable:false},
// //     surname:{writable:false},
// //     showMyBuplicData:{enumerable:false},

// // });
// // console.log(user);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //58

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     burthday: '20/04/1993',
//     showMyBuplicData: function () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };
// // for (const key in user){
// //     console.log(user[key]);
// // }

// // const arr = ['b','a','c'];
// // for (const key in arr){
// //     console.log(arr[key]);
// // }

// // const str = 'string';
// // for (const key in str){
// //     console.log(str[key]);
// // }

// // const arr = ['b','a','c'];
// // for (const key of arr){
// //     console.log(key);
// // } 

// const salaries = {
//     john: 500,
//     ivan: 1000,
//     anna: 5000,
//     sayHello: function () {
//         console.log('Hello');
//     }
// };

// salaries[Symbol.iterator] = function () {
//     return {
//         current: this.john,
//         last: this.anna,
//         next() {

//             if (this.current < this.last) {
//                 this.current = this.current + 500;
//                 return {
//                     done: false,
//                     value: this.current
//                 };
//             } else {
//                 return {
//                     done: true,
//                 };
//             }
//         }
//     };
// };

// // for(let res of salaries){
// //     console.log(res);
// // }

// const iterator = salaries[Symbol.iterator]();
// console.log(iterator.next());


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////59

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     burthday: '20/04/1993',
//     showMyBuplicData: function () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };

const shops = [{
        rice: 500
    },
    {
        oil: 600
    },
    {
        bread: 120
    }
];

const map = new Map([
    [{paper:400},8000]
]);
// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);


// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 25000);

const budget = [5000,15000,25000];
shops.forEach((shop,i) =>{
    map.set(shop,budget[i]);
});

//console.log(map);

//console.log(map.get(shops[0])); //5000
// console.log(map.has(shops[0])); //true
//// map.delete(key);
//// map.clear();
//// map.size;

//console.log(map); 
// let goods=[];
// for(let shop of map.keys()){
//     goods.push(Object.keys(shop));
    
// }

// console.log(goods);

// for (let price of map.values()){
//     console.log(price);
// }


// for (let [shop,price] of map.entries()){
//     console.log(price,shop);
// }

