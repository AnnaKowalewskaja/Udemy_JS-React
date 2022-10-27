"use strict";

//50. Async, defer, динамические скрипты

const p = document.querySelectorAll('p');
console.log(p);

//script with defer no blok page
//script wait all html

//async не ждет. Кто первый загрузился-тот первый и работает
//async  не должен зависеть не от кого


//вставить скрипт на страницу
//скрипт ведет себя как асинк-по умолчанию


function loadScript(src){
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript('js/test.js');
loadScript('js/some.js');