class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi, I am ${this.name}!`; 
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}


class Student extends Person {

    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }
    
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        
        let greeting = super.getGreeting();
        if(this.homeLocation != undefined) {
            greeting += ` I am visiting from ${this.homeLocation}`;
        }

        return greeting;
    }

}

const me = new Student('Anees', 29, 'CS');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const me1 = new Traveler('Anees', 29, 'Leicester');
console.log(me1.getGreeting());

const other1 = new Traveler();
console.log(other1.getGreeting());