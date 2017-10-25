//Task 1
// function getName() {
//     alert("Howdy " + prompt("What is your name, bro?") + "! Nice to meet ya!");
// }
// getName();


//Task 2
// function double(x) {
// x = prompt("Give me a number. Gimme, gimme!")*2;
// prompt("Give me a number. Gimme, gimme!") will return string so the result will be NaN (
// and you should return multiplied number using x that you should pass to the function
// console.log(x);
// }
// double(); // you have to pass argument to function you pass nothing


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

// the result for getPrimesSumBelow(3) and getPrimesSumBelow(2) is not right


//Task 5-6
// function yep(a) {
//     return (a % 2 === 0)
//     good!)
// }


//Task 6-5
// function range(x, y) {
//     for (var i = x; i <= y; i++) {
//         if (yep(i) === false) {
            // or just type if(!yep(i))
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
