    // 'use strict';
    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //56
    // // // // const obj = {
    // // // //     name:'Test',
    // // // //     [Symbol('hello')]:1,
    // // // // };
    // // // // //если нужно выввести символ
    // // // // //внутри обхекта создать метод через this[id] вывести можно
    // // // // let id = Symbol('id');
    // // // // obj[id]=1;
    // // // // let id2 = Symbol('id');
    // // // // obj[id2]=1;

    // // // // //console.log(id === id2); //всегда уникальные сущности
    // // // // let noDescription = Symbol();
    // // // // obj[noDescription] = 3;
    // // // // // console.log(obj[id]);
    // // // // //console.log(obj);

    // // // // for(let value in obj) console.log(value);

    // // // const myAweesomeDB={
    // // //     movies:[],
    // // //     actors:[],
    // // //     [Symbol('id')]:1123,
    // // //     [Symbol.for('noUnicality')]:'nie unikalnye'
    // // // };
    // // // //чтобы никто не мог поменять id можно свойству давать название через символ

    // // // //code

    // // // myAweesomeDB.id='3232323';
    // // // console.log(myAweesomeDB[Symbol.for('noUnicality')]);
    // // // console.log(myAweesomeDB);

    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //57 флаги
    // // //writable 
    // // //enumerable
    // // //configurable

    // // // const user ={
    // // //     name:'Alex',
    // // //     surname: 'Smith',
    // // //     showMyBuplicData:function(){
    // // //         console.log(`${this.name} ${this.surname}`);
    // // //     }
    // // // };

    // // //console.log(Object.getOwnPropertyDescriptor(user,'name'));
    // // //{ value: 'Alex', writable: true, enumerable: true, configurable: true }

    // // // Object.defineProperty(user,'name',{writable:false});
    // // // user.name='NewName';
    // // //TypeError: Cannot assign to read only property 'name' of object '#<Object>'


    // // //Object.defineProperty(user,'gender',{value:'male'});
    // // //console.log(Object.getOwnPropertyDescriptor(user,'gender'));
    // // /*
    // // {
    // //   value: 'male',
    // //   writable: false,
    // //   enumerable: false,
    // //   configurable: false
    // // }
    // // */

    // // //Object.defineProperty(user,'birtday',{writable:false});

    // // // Object.defineProperty(user,'birtday',{value:prompt('Date?'),enumerable:true,configurable:true});
    // // // console.log(Object.getOwnPropertyDescriptor(user,'birtday'));


    // // // Object.defineProperty(user,'showMyBuplicData',{enumerable:false}); // не перечесляется в перборе
    // // // for (let key in user) console.log(key);

    // // //console.log(Object.getOwnPropertyDescriptor(Math,'PI'));

    // // // Object.defineProperties(user,{
    // // //     name:{writable:false},
    // // //     surname:{writable:false},
    // // //     showMyBuplicData:{enumerable:false},

    // // // });
    // // // console.log(user);


    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //58

    // // const user = {
    // //     name: 'Alex',
    // //     surname: 'Smith',
    // //     burthday: '20/04/1993',
    // //     showMyBuplicData: function () {
    // //         console.log(`${this.name} ${this.surname}`);
    // //     }
    // // };
    // // // for (const key in user){
    // // //     console.log(user[key]);
    // // // }

    // // // const arr = ['b','a','c'];
    // // // for (const key in arr){
    // // //     console.log(arr[key]);
    // // // }

    // // // const str = 'string';
    // // // for (const key in str){
    // // //     console.log(str[key]);
    // // // }

    // // // const arr = ['b','a','c'];
    // // // for (const key of arr){
    // // //     console.log(key);
    // // // } 

    // // const salaries = {
    // //     john: 500,
    // //     ivan: 1000,
    // //     anna: 5000,
    // //     sayHello: function () {
    // //         console.log('Hello');
    // //     }
    // // };

    // // salaries[Symbol.iterator] = function () {
    // //     return {
    // //         current: this.john,
    // //         last: this.anna,
    // //         next() {

    // //             if (this.current < this.last) {
    // //                 this.current = this.current + 500;
    // //                 return {
    // //                     done: false,
    // //                     value: this.current
    // //                 };
    // //             } else {
    // //                 return {
    // //                     done: true,
    // //                 };
    // //             }
    // //         }
    // //     };
    // // };

    // // // for(let res of salaries){
    // // //     console.log(res);
    // // // }

    // // const iterator = salaries[Symbol.iterator]();
    // // console.log(iterator.next());


    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////59

    // // const user = {
    // //     name: 'Alex',
    // //     surname: 'Smith',
    // //     burthday: '20/04/1993',
    // //     showMyBuplicData: function () {
    // //         console.log(`${this.name} ${this.surname}`);
    // //     }
    // // };

    // const shops = [{
    //         rice: 500
    //     },
    //     {
    //         oil: 600
    //     },
    //     {
    //         bread: 120
    //     }
    // ];

    // const map = new Map([
    //     [{
    //         paper: 400
    //     }, 8000]
    // ]);
    // // map.set(shops[0], 5000);
    // // map.set(shops[1], 15000);
    // // map.set(shops[2], 25000);


    // // map.set(shops[0], 5000)
    // //     .set(shops[1], 15000)
    // //     .set(shops[2], 25000);

    // const budget = [5000, 15000, 25000];
    // shops.forEach((shop, i) => {
    //     map.set(shop, budget[i]);
    // });

    // //console.log(map);

    // //console.log(map.get(shops[0])); //5000
    // // console.log(map.has(shops[0])); //true
    // //// map.delete(key);
    // //// map.clear();
    // //// map.size;

    // //console.log(map); 
    // // let goods=[];
    // // for(let shop of map.keys()){
    // //     goods.push(Object.keys(shop));

    // // }

    // // console.log(goods);

    // // for (let price of map.values()){
    // //     console.log(price);
    // // }


    // // for (let [shop,price] of map.entries()){
    // //     console.log(price,shop);
    // // }




    // ///////////////////////////////////////////////////////////// 60 SET 
    // //Set -набор данных которые не повторяются
    // const arr = [1, 1, 2, 2, 4, 6, 5];
    // const set = new Set(arr);

    // function uniquie(array) {
    //     return Array.from(new Set(array));
    // }


    // const arrStudent = ['Marina', 'Sveta', 'Oleg', 'Dima'];
    // const setStudent = new Set(arrStudent);


    // setStudent.add('Ivan', 'Sveta');
    // //Set(5) { 'Marina', 'Sveta', 'Oleg', 'Dima', 'Ivan' }
    // //console.log(setStudent);

    // for (let value of setStudent) {
    // // console.log(value);
    //     /* Marina
    //     Sveta
    //     Oleg
    //     Dima
    //     Ivan*/
    // }

    // console.log(uniquie(arrStudent));

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 62 BigInt

    //console.log(Number.MAX_SAFE_INTEGER);

    // const bigint =1234567891234561234123456789123456785623456n;
    // const sameBigint = BigInt(123456789123456789123456789456789);
    // console.log(typeof(sameBigint));
    // console.log(1n+2n);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Сложная задача на вычисление количества страниц
    /*
    В каждой книге есть n страниц с номерами страниц от 1 до n. 
    Написать функцию amountOfPages, аргумент которой summary составляется путем сложения количества цифр всех номеров страниц. 
    Эта функция возвращает число - количество страниц n в книге. Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.
    Пример:
    Если на входе функции summary = 25, то на результат должен быть 17.
    Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.

    */
    //     function amountOfPages(summary) {
    //         let result = '';
    //         for (let i = 1; i <= summary; i++) {
    //             result += i;

    //             if (result.length == summary) {
    //                 return i;
    //             }
    //         }

    //     }
    //    console.log(amountOfPages(25));

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /*
    Задание:
    Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).
    Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.
    Пример:
    isPangram(«The quick brown fox jumps over the lazy dog») => true
    isPangram(«Hello world») => false

    */

    // function isPangram(string) {
    //     let mas = string.toLowerCase()
    //         .split(' ')
    //         .join('')
    //         .split('')
    //         .sort();

    //         let masSet =new Set(mas);
    //         mas =  Array.from(masSet);
    //         const alphabet = 'qwertyuioplkjhgfdsazxcvbnm'.split('').sort();
    //         return alphabet.length==mas.length && alphabet.every(function(v,i) { return v === mas[i]});
    //     //console.log(alphabet == mas);
    // }

    // console.log(isPangram('The quick brown fox jumps over the lazy dog'));

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы.
    Учтите, что сам вложенный массив тоже входит в счет.
    Чтобы понять задачу детальнее, давайте рассмотрим примеры:
    deepCount([1, 5, 3]) => 3
    deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)
    deepCount([1, 2, [3, 4, [5]]]) => 7
    deepCount([]) => 0
    deepCount([[[[[[[[[]]]]]]]]]) => 8
    */



    // function deepCount(a) {
    //     let res = a.length;
        
    //     for (let i = 0; i < a.length; i++) {
            
    //         if (Array.isArray(a[i])) {  
    //             res += deepCount(a[i]);
    //         }
    //     }
    //     return res;
    // }
    // //deepCount([1, 2, [3, 4, [5]]]);
    // console.log("res ",deepCount([[[[[[[[[]]]]]]]]]));