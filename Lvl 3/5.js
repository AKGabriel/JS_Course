//Task 1
// for (var i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even!");
//     }
//     else {
//         console.log(i + " is odd!");
//     }
// }

// or you can uoe ternar operator: console.log(i + (i % 2 === 0 ? " is even!" : " is odd!"));


//Task 2
// for (var i = 1; i <= 100; i++) {
// you can save i % 3 and i % 5 in variables and then use it to not check it twice
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FuzzBuzz");
//     }
//     else if (i % 3 === 0) {
//         console.log("Fuzz");
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }


//Task 3
// var a = prompt("Pick a number.");
// var b = prompt("Pick one more.");

// a and b are not a numbers it's strings!

// for (i=a; i>=1; i--) {
//     if (b%i===0) {
//         if (a%i===0) {
//             console.log("The GCD is " +i+".");
//             break;
//         }
//     }
// }


//Task 4
// var sum = 0;
// for (var i = 0; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum = sum + i;
//     }
// }
// console.log(sum);


//Task 5
// for (var i = 10; i <= 90; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log(i);
//     }
// }


//Task 6
// for (var i = 70; i >= 11; i--) {
//     if (i % 2 !== 0) {
//         console.log(i); //70 is not odd!!!
//     }
// }


//Task 7
// for (var i = 78; i >= 13; i--) {
//     if (i % 2 === 0 && i % 3 === 0) {
//         console.log(i);
//     }
// }
