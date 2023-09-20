'use strict';

class Animal {
    constructor(name, age, kind, sex, color) {
        this.name = name;
        this.age = age;
        this.kind = kind;
        this.sex = sex;
        this.color = color;
    }

    eat(){
        return `${this.kind} ${this.name} has eaten`;
    }
    
    play(){
        return `${this.kind} ${this.name} was playing`;
    }

    sleep(){
        return `${this.kind} ${this.name} slept`;
    }


}

class Cat extends Animal{
    constructor(name, age, sex, color,kindCat){
        super(name, age, sex, color);
        this.kind = 'cat';
        this.kindCat = kindCat;
    }


}

class Dog extends Animal{
    constructor(name, age, sex, color,kindDog){
        super(name, age, sex, color);
        this.kind = 'dog';
        this.kindDog = kindDog;
    }
}

class Bird extends Animal{
    constructor(name, age, sex, color,kindBird){
        super(name, age, sex, color);
        this.kind = 'bird';
        this.kindBird = kindBird;
    }
}


const firstAnimal = new Animal('Kokos', 4, 'dog', 'f', 'white');
const firstCat = new Cat('Cytrynka',3,'f','black','bengal')
console.log(firstCat.sleep());