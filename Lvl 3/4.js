//Task 1
// function getName() {
//     alert("Howdy " + prompt("What is your name, bro?") + "! Nice to meet ya!");
// }
// getName();


//Task 2
// function double(x) {
// x = prompt("Give me a number. Gimme, gimme!")*2;
// console.log(x);
// }
// double();


//Task 3
// var sum = 0;
// function range(x, y) {
//     for (var i = x; i <= y; i++) {
//         sum = sum + i;
//     }
//     console.log(sum);
// }
// range(1, 3);


//Task 4
// var sum = 0;
// function getPrimesSumBelow(x) {
//     for (var i = 2; i < x; i++) {
//         for (var m = 2; m <= i; m++) {
//             if (i === m) {
//                 sum = sum + i;
//             }
//             else if (i % m === 0) {
//                 break;
//             }
//         }
//     }
//     console.log(sum);
// }
// getPrimesSumBelow(10);


//Task 5-6
// function yep(a) {
//     return (a % 2 === 0)
// }


//Task 6-5
// function range(x, y) {
//     for (var i = x; i <= y; i++) {
//         if (yep(i) === false) {
//             console.log(i);
//         }
//     }
// }
// range(1, 11);


//Task 7
// function lol() {
//     do {
//         var a = +prompt("Guess a number, bro!")
//     }
//     while (a !== 9);
// }
// lol();