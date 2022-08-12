//рекурсия
//стр 85
//4.1

function sum(arr) {
    if (arr.length === 1) {
        return arr[arr.length - 1];
    } else {
        return arr.pop() + sum(arr);
    }
}

//console.log(sum([1,2,3]));

function countElement(obj) {
    if (!obj) {
        return 0;
    } else {
        let key = Object.keys(obj)[0];
        delete obj[key];
        return 1 + countElement(obj);
    }

}

console.log(countElement({
    "hi": 1,
    "hello": 2,
}));

