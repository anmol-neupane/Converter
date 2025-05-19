// class Car {
//   brand;
//   model;
//   year;

//   constructor(b, m, y) {
//     this.brand = b;
//     this.model = m;
//     this.year = y;
//   }

//   showDetail() {
//     console.log(this.brand, this.model, this.year);
//   }
// }

// let carObject = new Car();
// let carObject2 = new Car("Mazda", "Mazda 2", 1990);

// carObject.brand = "toyota";
// carObject.model = "rav4";
// carObject.year = 2000;

// // carObject2.brand = "Mazda";
// // carObject2.model = "Mazda 2";
// // carObject2.year = 1990;

// console.log(carObject.showDetail());
// console.log(carObject2.showDetail());

// Encapsulation & Abstraction

// class Car {
//   brand;
//   model;
//   #year;
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.#year = year;
//   }
//   getYear() {
//     return this.#year;
//   }
//   updateYear(y) {
//     this.#year = y;
//   }
// }

// const myCar = new Car("Ford", "Mustang", 2000);
// console.log(myCar.getYear());
// console.log(myCar.brand);
// myCar.updateYear(1990);

// console.log(myCar.getYear());
// console.log(myCar.#year); //Error

// Inheritance

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("Hi! I am " + this.name);
//   }

//   fullName() {
//     console.log(this.name, this.age);
//   }
// }

// class Student extends Person {
//   constructor(name, age, studendId) {
//     super(name, age);
//     this.studendId = studendId;
//   }

//   greet() {
//     console.log("Hi! I am " + this.name + ". I am a student!");
//   }
// }

// const personObj = new Person("Hari", 25);
// personObj.greet();
// personObj.fullName();

// const studentObj = new Student("Prakash", 28, 10000);
// studentObj.greet();
// studentObj.fullName();

// // exercise
// // shape

// class Shape {
//   constructor(name) {
//     this.name = name;
//   }
//   area() {
//     return 0;
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super("circle");
//     this.radius = radius;
//   }

//   area() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Triangle extends Shape {
//   constructor(b, h) {
//     super("triangle");
//     this.base = b;
//     this.height = h;
//   }

//   area() {
//     return (1 / 2) * this.base * this.height;
//   }
// }

// let c1 = new Circle(10);
// let t1 = new Triangle(100, 300);

// console.log(c1.name, c1.area());
// console.log(t1.name, t1.area());

console.log("BANK ACCOUNT");

class BankAccount {
  accountNumber;
  accountHolderName;
  balance;

  constructor(num, name, balance) {
    this.accountNumber = num;
    this.accountHolderName = name;
    this.balance = balance;
  }

  deposit(money) {
    this.balance = this.balance + money;
  }

  withdraw(money) {
    if (this.balance < money) {
      console.log("ERROR! YOU DO NOT SUFFICIENT BALANCE");
      return false;
    } else {
      this.balance = this.balance - money;
      return true;
    }
  }

  transfer(money, bankacc) {
    // withdraw money from my account
    if (this.withdraw(money)) {
      // deposit to the new persons bankaccount
      bankacc.deposit(money);
      console.log("Money successfully Transferred!");
    } else {
      console.log("Error while transferring money");
    }
  }
}

let person1 = new BankAccount(1001, "Ram", 5000);

console.log(person1.accountHolderName);
console.log("balance before", person1.balance);

// Depositing money
person1.deposit(3000);

console.log("balance after", person1.balance);

// withdraw money
person1.withdraw(300);
console.log("Balance after withdraw: ", person1.balance);
person1.withdraw(7800);

let person2 = new BankAccount(1002, "Hari", 3000);

console.log("Balance before Transfering");
console.log(person2.accountHolderName, person2.balance);

person1.transfer(8000, person2);

console.log("Balance after transfering");
console.log(person1.accountHolderName, person1.balance);
console.log(person2.accountHolderName, person2.balance);

let person3 = new BankAccount(1003, "Shyam", 100);
person2.transfer(1000, person3);

console.log("Balance after transfering");
console.log(person2.accountHolderName, person2.balance);
console.log(person3.accountHolderName, person3.balance);
