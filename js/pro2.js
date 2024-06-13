let fage = document.querySelector('.fage');
let cage = document.querySelector('.cage');

class People {
    constructor(age) {
        this.age = age;
    }
}
class Father extends People{
    constructor(age) {
        super(age);
    }
    fatherAge(){
        fage.innerHTML = (`Father Age : ${this.age}`)
    }
}
class Child extends People{
    constructor(age) {
        super(age);
    }
    childAge(){
        cage.innerHTML = (`Child Age : ${this.age}`)
    }
}

let b1 = new People();
let b2 = new Father(60);
let b3 = new Child(20);

b2.fatherAge();
b3.childAge();