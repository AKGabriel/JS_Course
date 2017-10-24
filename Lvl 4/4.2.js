//Task 1
// function isPal(input) {
//     var input = prompt("What do you want?");
//     input = input.toUpperCase();
//     var arr = input.split("");
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === " " || arr[i] === "," || arr[i] === ".") { //should also consider other punctuation as well. Is there a method for this?)
//             arr.splice(i, 1);
//             i = i - 1;
//         }
//     }
//     var orig = arr.join("");
//     arr.reverse();
//     var rev = arr.join("");
//     if (rev === orig) {
//         console.log("Yep, it is a palindrome.");
//     }
//     else {
//         console.log("Nope, not this time.");
//     }
// }
//
// isPal();


//Task 2
// function anClean(arr) {
//     var isort = "";
//     var msort = "";
//     arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (m = i + 1; m < arr.length; m++) {
//             isort = arr[i].split("").sort().join("");
//             msort = arr[m].split("").sort().join("");
//             if (isort.toUpperCase() === msort.toUpperCase()) {
//                 arr.splice(m, 1);    //OR arr.splice(i, 1);
//                 m--;                //AND m = i + 1;
//
//             }
//         }
//     }
//     console.log(arr);
// }
//
// anClean();


//Task 3
// var arr = ['rrrA', 'toboR', 'ekiL', 'dooG', 'esoR'];
// arr.reverse();
// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].split("").reverse().join("");
//     ;
// }
// console.log(arr);


//Task 4
// var sumInt = 0;
// var sumEven = 0;
// for (var i = 0; i <= 100; i++) {
//     sumInt = sumInt + i;
//     if (i % 2 === 0) {
//         sumEven = sumEven + i;
//     }
// }
// console.log(sumInt, sumEven);


//Task 5
// function callMe(a, b, c) {
//     if (isNaN(a) || isNaN(b) || isNaN(c)) {
//         console.error("Stop right there, you criminal scum!");
//         return null;
//     }
//     else {
//         var sum = a + b + c;
//         alert("Here, take this:" + sum);
//     }
// }
//
// callMe(9, 3, 2);


//Task 6
// function callMeAgain(arr) {
//     arr = arr.sort().join(",");
//     console.log(arr);
// }
//
// callMeAgain([5,3,1]);


//Task 7-8
// var arr = [
//     {name: "L1", age: 45},
//     {name: "L1", age: 20},
//     {name: "L1", age: 10},
//     {name: "L1", age: 78},
//     {name: "L1", age: 41},
//     {name: "L1", age: 10}
// ];
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
// arr.sort(compare);
// console.log(arr);
//
// // Task 8-7
// var name = prompt("Who are you?!");
// var age = +prompt("And how old are you?");
// for (var i = 0; i < arr.length; i++) {
//     if (name === arr[i].name) {
//         alert("I'm watching you!");
//         break;
//     }
// }
// for (i = 0; i < arr.length; i++) {
//     if (age < arr[i].age) {
//         arr.splice(i, 0, {name: name, age: age});
//         break;
//     }
// }
// console.log(arr);


//Task 9
// var arr = [13, 35, 3, 443];
// var str = arr.join("");
// var match = str.match(/3/g);
// console.log(match.length);


//Task 10
// var astr = "";
// var arr = ["1", "2", "3", "4", "5", "6", "7"];
// for (var i = 0; i < arr.length; i++) {
//     if (arr.length > 1) {
//         astr = astr + arr.shift();
//         astr = astr + arr.pop();
//         astr = astr + "-";
//         i--;
//     }
//     else if (arr.length = 1) {
//         astr = astr + arr.shift();
//     }
//     console.log(astr);
// }


//Task 11
// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6, 7, 8];
// var arr3 = [];
//
// if (arr1.length > arr2.length) {
//     var m = arr1.length - arr2.length;
//     for (var i = 0; i < arr1.length - m; i++) {
//         arr3.push(arr1[i] + arr2[i]);
//     }
//     for (var y = 0; y < m; y++) {
//         arr3.push(arr1[i + y]);
//     }
// }
// else {
//     var m = arr2.length - arr1.length;
//     for (i = 0; i < arr2.length - m; i++) {
//         arr3.push(arr1[i] + arr2[i]);
//     }
//     for (y = 0; y < m; y++) {
//         arr3.push(arr2[i + y]);
//     }
// }
//
// for (var i = 0; i < length; i++) {
//     arr3.push(arr1[i] + arr2[i]);
// }
// console.log(arr3);


//Task 12
// function f(arr, rem) {
//     for (var i = 0; i < arr.length; i++) {
//         if (rem === arr[i]) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
//     console.log(arr);
// }
//
// f([1, 2, 3, 4,3,3], 3);


//Task 13
// var arrComp = [];
//
// function intersection(arr1, arr2, arr3) {
//     for (var i = 0; i < arr1.length; i++) {
//         for (var m = 0; m < arr2.length; m++) {
//             if (arr1[i] === arr2[m]) {
//                 for (var g = 0; g < arr3.length; g++) {
//                     if (arr1[i] === arr3[g]) {
//                         arrComp.push(arr1[i]);
//                     }
//                 }
//             }
//         }
//     }
//     console.log(arrComp);
//
// }
//
// intersection([1, 2, 3], [101,2,1,10], [2,1]);


//Task 14
// var arr = [2, 3, 1, 4];
// var arrr = [];
// for (var i = 0; i < arr.length; i++) {
//     for (var m = 0; m < arr[i]; m++) {
//         arrr.push(arr[i]);
//     }
// }
// console.log (arrr);


//Task 15
// function f(arr, size) {
//     for (var i = arr.length; i < size; i++) {
//         arr.push(0);
//     }
//     console.log(arr);
// }
//
// f([1, 2, 3], 6);


//Task 16
// var arr = [3, 5, -7, -2, 3, -54, 1, 0, -4];
//
// function sortthisshitplease(a) {
//     return a < 0;
// }
//
// var arr1 = arr.filter(sortthisshitplease);
// console.log(arr1[0], arr1[1], arr1[2]);
