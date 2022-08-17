"use strict";

//31. Callback- функции
function first() {
    //do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}
// first();
// second();

function learnJS(lang, callback) {
    console.log(`I learn ${lang}`);
    callback();
}

function done() {
    console.log("finish");
}
//learnJS('JavaScript', done);

//32. Objects, methods

//const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function () {
        console.log('test');
    }
};

// console.log(options.name);
//delete options.name;
// console.log(options);

// function forInTest() {
//     let counter = 0;
//     for (let key in options) {
//         if (typeof(options[key]) === 'object'){
//             for (let i in options[key]){
//                 console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//                 counter++;
//             }
//         }else{
//             console.log(`Свойство ${key} имеет значение ${options[key]}`);
//             counter++;
//         }

//     }
//     console.log(counter);
// }
//// forInTest()


// console.log(Object.keys(options).length);
// options.makeTest();

// const {border,background} = options.colors;
// console.log(border,background);

//33. Mассивы и псевдомассивы

const arr = [2, 23, 13, 56, 18];
arr.sort(compareNum);
//console.log(arr);

function compareNum(a, b) {
    return a - b;
}
//псевдомассивы не имеют методов массивов

//arr.pop(); //удаляет последний элемент из массива
//arr.push(10);//добавляет элемент в конец

//console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//for of  можно использовать breack, continiue
// for (let value of arr){
//     console.log(value);
// }

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`); 
// });

// arr[99] = 0;
// console.log(arr.length); //100
// console.log(arr);


// const str = prompt("","");
// const products = str.split(", "); //разделение строки на элементы массива
// products.sort();
// console.log(products.join('; '));

//35. Передача по ссылке или по значению, Spread оператор (ES6-ES9)КОПИИ МАСИВОВ И ОБЪЕКТОВ

let a = 5,
    b = a;
b = b + 5;
// console.log(b);
// console.log(a);

const obj = {
    a: 5,
    b: 1,
};

// const copy = obj; //link for obj
// copy.a = 10;
// // console.log(copy);
// // console.log(obj);

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a:2,
    b: 'hello',
    c:{
        x:7,
        y:4
    }
};

let newNumbers = copy(numbers);
    newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);

newNumbers.c.x =12;
// console.log(newNumbers.c.x);
// console.log(numbers.c.x);

const add = {
    d:17,
    i:20,
};

const clone = (Object.assign({}, add));  //////создать копию!!!
clone.d= 23;
// console.log(clone);
// console.log(add);

const oldArray = ['a', 'b','c'];
const newArray = oldArray.slice();
newArray[1] = "hello copy";
// console.log(newArray);
// console.log(oldArray);

const video = ['youtube','vimeo','rutube'],
blogs = ['wordpress','livejournal', 'blogger'],
internet= [...video,  ...blogs, 'vk', 'facbook'];
// console.log(internet);

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,5,7];
//log(...num);

const array = ['a', 'b'];
const newAaray= [...array];

const q =   {
    one:1,
    two :2,
};

const newObj ={...q};





