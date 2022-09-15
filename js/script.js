"use strict";
//47. Рекурсия

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

function powRec(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

//console.log(powRec(2, 10));

let students = {
    js: [{
            name: 'John',
            progress: 100
        },
        {
            name: 'Ivan',
            progress: 60
        }
    ],
    html: {
        basic: [{
                name: 'Peter',
                progress: 20
            },
            {
                name: 'Ann',
                progress: 18
            }
        ],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;
    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;
            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subcourse of Object.values(course)) {
                for (let i = 0; i < subcourse.length; i++) {
                    total += subcourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];
        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

//console.log(getTotalProgressByIteration(students));
const result = getTotalProgressByRecursion(students);
//console.log(result[0]/result[1]);

function factorial(num) {
    if (Number.isInteger(num) && typeof num === Number && num >= 1){
        if(num === 1){
            return 1;
        }else{
            return num * factorial(num-1);
        }
    }else{
        return 'Error';
    }
   
}

console.log(factorial(-5));
//console.log(typeof typeof 5 === Number);
