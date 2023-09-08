let firstName = "Vlad"; // string
let age = 28; // number
const isProgrammer = true; // boolean

// firstName = "Vladislav" // can change
// isProgrammer = false // error because of const

/* Can Do
    let $ = "test";
    let $num = 32;
    let num$ = 32;
    let _ = "32";
    let _num = 12;
    let num_ = 12;
    let num42 = 42;

    let first_name = "Natali"; // bad
    let firstName = "Natali"; // good
*/

/* Restricted
    let 42num = 42;
    let first-name = "Natali";
    let let
    let const // all reserved name
*/

// Output

alert(firstName);

console.log(firstName);
console.log("age:", age);
console.log(firstName, "is programmer:", isProgrammer)

// Operators

let num = 2;

console.log(num + 2);
console.log(num - 2);
console.log(num * 2);
console.log(num / 2);

let num2 = num + 10;
console.log(num, num2);

num = num2 - num;
num2 = num2 + 1;
console.log(num, num2);

let num3 = num + 10 * 2 / 5 - 1;
console.log(num3);

let num4 = (num + 10) * 2 / 5 - 1;
console.log(num4);

let num5 = (num + 10) * (2 / (5 - 1));
console.log(num5);

const fullName = firstName + " " + "Sazonov";
// const fullName = firstName + " Sazonov";
// const fullName = `${firstName} Sazonov`;
console.log(fullName)



