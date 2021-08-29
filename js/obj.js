// let user = {
//     name: 'John',
//     age: 30,
//     email: 'mail@mail.com',
//     hobby: ['sport', 'film'],

//     sayHello() {
//         console.log(`I am ${name} ${age} ${hobby}`);
//     },
// };

// user.sayHello();

// let user = {
//     name: 'Джон',
//     go: function () {
//         console.log(this.name);
//     },
// };

// user.go();

// let calculator = {
//     // ... ваш код ...
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

//  * Task 1
/*
 * Сделайте функцию, которая считает и выводит количество своих вызовов.
 */

// func(); //выведет 1
// func(); //выведет 2
// func(); //выведет 3
// func(); //выведет 4

// function person() {
//     let name = 'John';

//     return function displayName() {
//         console.log(name);
//     };
// }

// let john = person();

// john();

// function getCounter() {
//     let counter = 0;

//     return function () {
//         return (counter += 1);
//     };
// }

// let count = getCounter();
// let count2 = getCounter();

// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count2());
// console.log(count2());
// console.log(count2());

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const item of array) {
//     console.log(item);
// }

function showNumber(arr) {
    console.log(arr[0]);
    arr.splice(0, 1);

    if (arr.length > 0) {
        showNumber(arr);
    }
}

showNumber(array);
