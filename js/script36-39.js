//36. Основы ООП, прототипно-ориентированное наследование
"use strict";
//37. Практика , ч4. Используем объекты

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/





const personalMovieDB = {
    count: 0,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },

    showMyDB: function () {
        if (!this.privat) {
            console.log(personalMovieDB);
        }
    },


    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
                b = prompt("На сколько оцените его?", "");

            if (a != null && a != '' && a.length <= 50 && b != null && b != '' && b.length <= 50) {
                personalMovieDB.movies[a] = +b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },

    toggleVisibleMyDB: function () {
        this.privat = !this.privat;
        console.log(this.privat);
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");

            if (genre === '' || genre === null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });

    },
};

//upr 13
/*
Задача:

У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. 
Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. 
Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

Но эта задача содержит несколько подзадач внутри:
- вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
- определение того, хватает ли бюджета на оплату такого объема;
- все числа идут без единиц измерения для упрощения, просто цифры и все;
- функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.
*/

const shoppingMallData = {
    shops: [{
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let area = 0;
    data.shops.forEach((item, i) => {
        area += item.width * item.length;
    });
    return area * data.height * data.moneyPer1m3 <= data.budget ? 'Бюджета достаточно' : 'Бюджета недостаточно';
}

//console.log(isBudgetEnough(shoppingMallData));

//upr 14

/* У вас есть список учеников, которые хотят поиграть в игру:

Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
Внутри она сначала сортирует имена по алфавиту.
Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
 Эти группы должны быть массивами.
  Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

Пример:

sortStudentsByGroups(students)  =>

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.*/

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [],
        b = [],
        c = [],
        rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}
//console.log(sortStudentsByGroups(students));

//38. Отлавливаем ошибки в своем коде при помощи консоли разработчика. Breakpoints

//39. Динамическая типизация в JS
//число может стать строкой,строка-числом и тд

// console.log(typeof(String(null)));//string
// console.log(typeof(String(4)));//string

// console.log(typeof(5+""));//string

const num = 6;
//console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';


// console.log(typeof(Number('4')));//number
// console.log(typeof(+'5'));//number
// console.log(parseInt("15px",10));//15


//let answ = +prompt('hello',"");

//to boolean

//false :
//0,'',null, undefined, NaN

// let switcher = null;
// if(switcher){
//     console.log('working...');
// }

// switcher = 1;

// if(switcher){
//     console.log('working...');
// }

console.log(typeof(Boolean('4')));//boolean


console.log(typeof(!!'444'));//boolean