"use strict";
console.log("This is my first typescript program");
let myName = 'Noman Khan';
let firstName = "Ali";
let secondName = "Khan";
console.log(firstName + " " + secondName);
console.log(typeof firstName);
let a = 5;
let b = 3;
let c = a + b;
console.log("the result of addition of a and b =" + c);
//Modulus
let n1 = 10;
let n2 = 3;
console.log(n1 % n2);
let z = 2;
z = 3;
function myFunc(name, age) {
    console.log(`my name is ${name} and age is ${age}`);
    return age;
}
myFunc("noman", 55);
let func = (nh) => nh.toUpperCase();
//console.log(func);
let m = func("shahzad");
console.log(m);
