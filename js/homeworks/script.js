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

    aboutCat(){
        return `Name: ${this.name},
        Age: ${this.age},
        Kind: ${this.kindCat}`
    }

}

class Dog extends Animal{
    constructor(name, age, sex, color,kindDog){
        super(name, age, sex, color);
        this.kind = 'dog';
        this.kindDog = kindDog;
    }

    isOld(){
        if (this.age<10){
            return `${this.kindDog} ${this.name} is young`;
        }else{
            return `${this.kindDog} ${this.name} is adult`;
        }
    }
}

class Bird extends Animal{
    constructor(name, age, sex,kindBird,fly){
        super(name, age, sex);
        this.kind = 'bird';
        this.kindBird = kindBird;
        this.fly = fly;
    }

    isFly(){
        const canFly = this.fly ? "can fly" : "can't fly";
        return `${this.kindBird} ${this.name} ${canFly}`;
    }


}


const firstAnimal = new Animal('Kokos', 4, 'dog', 'f', 'white');
const firstCat = new Cat('Cytrynka',3,'f','black','bengal');
const firstBird = new Bird('Pin',3,'m','penguin',false);
const firstDog = new Dog('Miso',9,'m','brown','husky');

console.log(firstBird.isFly());
console.log(firstCat.sleep());
