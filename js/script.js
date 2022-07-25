// "use strict";
// // ///////28 числа и строки
// // const str="Test";
// // //const arr = [1,2,4];

// // //console.log(arr.length);

// // // console.dir(String) - можно посмотреть свойства  и методы типа данных

// // //console.log(str.toUpperCase());
// // //console.log(str.toLowerCase());

// // //console.log(str);

// // const fruit = "Some fruit";
// // //console.log(fruit.indexOf("q")); //-1

// // const logg = "Hello, world";
// // //console.log(logg.slice(6,12))//начало и конец откуда вырезать, не включая то, что пишется,те 6,12
// // //возвращает строку
// // //можно указать отккуда и не указывать до какого числа
// // //-5, -1 -с конца

// // //console.log(logg.substring(6,12))
// // //console.log(logg.substr(6,5));//сколько символов нужно вырезать

// // //////числа Math

// // const num = 12.2;
// // //console.log(Math.round(num));

// // const test = "12.2px";
// // //console.log(parseInt(test));//12
// // //console.log(parseFloat(test))//12.2

// //29
// /* Задание на урок:

// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно*/
// //домашнее задание

// // Код возьмите из предыдущего домашнего задания
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }

// }

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {

//     },
//     actors: {

//     },
//     genres: [],
//     privat: false,
// }

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
//     }
// }

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов?", ""),
//             b = prompt("На сколько оцените его?", "");
//         if (a != null && a != '' && a.length <= 50 && b != null && b != '' && b.length <= 50) {
//             personalMovieDB.movies[a] = +b;
//             console.log('done')
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// function detectPersonalLevel() {

//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         alert('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         alert('Вы киноман');
//     } else {
//         alert('Произошла ошибка');
//     }
// };



// start();
// //rememberMyFilms();
// //detectPersonalLevel();
// writeYourGenres();
// showMyDB(personalMovieDB.privat);

/////

// function calculateVolumeAndArea(a) {
//     if(isNaN(a) || a <= 0 || !Number.isInteger(a)){
//         return 'При вычислении произошла ошибка';
//     }
//     return `Объем куба: ${Math.pow(a,3)}, площадь всей поверхности: ${Math.pow(a,2)*6}`;
//     }

//     console.log(calculateVolumeAndArea(15.5));

function getCoupeNumber(place) {
    if (place > 36 || place < 1) {
        return 'Таких мест в вагоне не существует';
    }
let res;
    for (let i = 1; i <= place; i = i + 4) {
        res = Math.ceil(i / 4);
    }
    return res;
}

console.log(getCoupeNumber(1));