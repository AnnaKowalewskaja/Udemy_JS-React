'use strict';

// const box = document.querySelector('.box');
// let observer = new MutationObserver(mutationRecords => {
//     console.log(mutationRecords);
// });

// observer.observe(box, {
//     childList: true,
// });

//////////////////////////////////////////75

function User(name,id){
    this.name= name;
    this.id = id;
    this.human = true;
this.hello = function(){
    console.log(`Hello ${name}`);
};
}


//User { name: 'Ivan', id: 28, human: true } User { name: 'Alex', id: 20, human: true }

User.prototype.exit = function(){
    console.log(`User ${this.name} is exit`);
};

const Ivan = new User('Ivan',28);
const Alex = new User('Alex',20);
Ivan.hello();
Ivan.exit();
