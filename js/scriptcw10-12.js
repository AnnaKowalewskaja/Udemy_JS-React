//упражнения 10-12

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (obj) {
        let lang = [...obj.skills.languages].join(" ").toUpperCase();
        return (`Мне ${obj.age} и я владею языками: ${lang}`);
    }
};

//console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    return plan.skills.exp;
}

//console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    //    const {programmingLangs} = plan.skills;
    let programmingLang = {
        ...plan.skills.programmingLangs
    };
    let res = '';

    for (let key in programmingLang) {
        res += `Язык ${key} изучен на ${programmingLang[key]}\n`;
    }
    return res.slice(0, -1);
}

//console.log(showProgrammingLangs(personalPlanPeter));


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    return arr.length === 0 ? "Семья пуста" : `Семья состоит из: ${[...arr].join(" ")}`;
}
//console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    return [...arr].join('\n').toLowerCase();
}

//console.log(standardizeStrings(favoriteCities));

const someString = 'This is some strange string';

function reverse(str) {
    return typeof str === "string" ? str.split("").reverse().join("") : "Ошибка!";
}
//console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let res;
    res = arr.length === 0 ? 'Нет доступных валют' : 'Доступные валюты:\n';
    arr.forEach(function (curr, i) {
        if (curr !== missingCurr) {
            res += `${curr}\n`;
        }
    });

    return res;


}
//console.log([...baseCurrencies, ...additionalCurrencies]);