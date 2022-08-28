"use strict";

//40. Замыкание и лексическое окружение
// let number = 5;
// function logNumber(){
//     console.log(number);
// }

// number = 8;
// logNumber();

function createCounter() {
    let counter = 0;
    const myFunction = function () {
        counter = counter + 1;
        return counter;
    };
    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

//console.log(c1, c2, c3);

function foo(a, b) {
    const [second] = a;
    const {
        eng
    } = b;

    return `${second} ${eng}`;
}

const result = foo(['Hello', 'Привет'], {
    ru: 'Мир',
    eng: 'World'
});
//console.log(result);
