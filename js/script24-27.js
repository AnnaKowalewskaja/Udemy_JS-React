////////////////24  Практика, ч2. Применяем условия и циклы

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {

//     },
//     actors: {

//     },
//     genres: [],
//     privat: false,
// }

// // 1 способ
// for (let i = 0; i < 2; i++) {
//     let a = prompt("Один из последних просмотренных фильмов?", ""),
//      b = prompt("На сколько оцените его?", "");
//     if (a === null || a === "" || a.length > 50 || b === null || b === "" || b.length > 50) {
//         i--;
//         continue;
//     }
//     let scoreLastFilms = prompt("На сколько оцените его?", "");
//     personalMovieDB.movies[lastFilms] = +scoreLastFilms;

// }

// //2 способ
// for (let i = 0; i < 2; i++) {
//     let a = prompt("Один из последних просмотренных фильмов?", ""),
//      b = prompt("На сколько оцените его?", "");
//      if(a != null && a!= '' && a.length <= 50 && b != null && b!= '' && b.length <= 50){
//         personalMovieDB.movies[a] = +b;
//         console.log('done')
//      }else{
//          console.log('error');
//          i--;
//      }
// }

// if (personalMovieDB.count < 10) {
//     alert('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     alert('Вы классический зритель');
// }else if(personalMovieDB.count >= 30){
//     alert('Вы киноман');
// }else{
//     alert('Произошла ошибка');
// }

//     console.log(personalMovieDB);



// /////////////////////////25. Функции, стрелочные ф-ции (ES6)
// let num = 20;
// function showFirstMessage(text){
//     console.log(text);
//     let num = 30;
//     console.log(num);
// }
// h
// showFirstMessage("hello,world!");
// console.log(num);

// function calc(a,b){
//     return a+b;
// }
// console.log(calc(3,7));
// console.log(calc(13,7));
// console.log(calc(3,57));

//function declaretion
// //можно вернуть какие-то данные после их работы в функции
// function ret(){
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


//function expression
// const logger = function(){
// console.log("logger")
// };

// logger();

//arrow function
//dont have  'this'
//const calc = (a, b) => a + b;

// //26 
// const usdCurr = 28;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, curr);

//27 RETURN

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);

// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return;
//     }
//     console.log('done')
// }

// test();

// //function return undefined always

// function doNothing(){};
// console.log(doNothing() ===undefined)

//27-tasks

// function getMathResult(a, b) {
//     if (typeof b !== "number" || b <= 0) {
//         return a;
//     }
//     let res = "";
//     const seg = "---";
//     for (let i = 1; i <= b; i++) {
//         res += a * i;
//         if (i !== b) {
//             res += seg;
//         } else return res;
//     }
// }

//console.log(getMathResult(5, 3))