//Task 1
// function call() {
//     this.name = prompt("What is your name?");
// }
// //call();
// var obj = {};
// call(obj);
// call(window);
//
// console.log(obj.name); //undefined
// console.log(window.name); //"Text in prompt"


//Task 2
// function fun(number) {
//     number = +prompt("Pick a number, dude.");
//     var sum = 0;
//     for (var i = 0; i <= number; i++) {
//         sum = sum + i;
//     }
//     console.log(sum);
// }
//
// fun();


//Task 3
// var vasya = {name: 'Вася', age: 23};
// var masha = {name: 'Маша', age: 18};
// var vovochka = {name: 'Вовочка', age: 6};
// var people = [vasya, masha, vovochka];
//
// function compare(x, y) {
//     if (x.age > y.age) {
//         return 1;
//     }
//     else if (x.age < y.age) {
//         return -1;
//     }
//     else {
//         return 0;
//     }
// }
//
// people.sort(compare);
// console.log(people);


//Task 4
// function unique(arr) {
//     arr = ['unique', 'Unique', '25R', 'UNIQUE', '25R', 'UnIqUe', '25R'];
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (m = i + 1; m < arr.length; m++) {
//             if (arr[i] === arr[m]) {
//                 arr.splice(m, 1);
//                 m--;
//             }
//         }
//     }
//     console.log(arr);
// }
//
// unique();