//Task 1
// myname = "global";
// function func() {
//     console.log(myname);
//     var myname = "local";
//     console.log(myname);
// }
// func(); //undefined, local


//Task 2
// var a = 90100;
// function someFunc(){
//     if(false){
//         var a = 1;
//     } else {
//         var b = 2;
//     }
//     console.log(b);
//     console.log(a);
// }
// someFunc(); //2, undefined
// //There are two types of scope in JavaScript: Global and Local. Global is default. Local is created by functions.


//Task 3
// function test() {
//     this;
// }
// test(); //window


//Task 4
//Что такое глобальные переменные ? Как они создаются ? Какие проблемы связаны с использованием глобальных переменных?
//- Global variable is variable that was declared outside of a function, attaching it to the "window" object. Has global scope and can be used by all functions.
//- It is created by declaring it outside of a function or without using "var".
//- The main problem - it may be overwritten by mistake in some function.


//Task 5
// a(); //ok
// b(); //error
//
// var b = function(){
//     alert( 'function b');
// }
//
// function a(){
//     alert( 'function a' );
// }
//function b is declared in the way that it is being created only during executing. It cannot be called before that.
//function a can be called whenever you wish, because JS interpretator moves it's declaration to the top of the code.


//Task 6
// var i = 0;
//
// for (; i< 10; i ++) {
//     console.log(i) // 0 - 9
// }


//Task 7
//I wasn't sure what task exactly meant, so here two variants:
// //Variant 1
// function fac(a,b) {
//     var f = 1;
//     for (var i = 2; i <= a; i++) {
//         f = f*i;
//         if (f%2===0) {
//             f = f*2;
//         }
//     }
//     console.log(f);
// }
// //Variant 2
// function fac1(a,b) {
//     var f = 1;
//     for (var i = 2; i <= a; i++) {
//         f = f*i;
//     }
//     if (f%2===0) {
//         f = f*2;
//     }
//     console.log(f);
// }
// fac(5,2);
// fac1(5,2);


//Task 8
//Variant A
// function randomStringGenerator(a) {
//     var randomString = "";
//     var possible = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890_"
//     for (var i = 0; i < a; i++) {
//         randomString = randomString + possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     console.log(randomString);
//     return randomString;
// }
//
// randomStringGenerator(10);
//
// Variant B
// function randomStringGenerator(a) {
//     var randomString = "";
//     for (var i = 0; i < a; i++) {
//         var r = Math.floor(65 + Math.random() * 58);
//         if (91 <= r && r <= 96 && r !== 95) {
//             i--;
//         }
//         else {
//             randomString = randomString + String.fromCharCode(r);
//         }
//     }
//     console.log(randomString);
//     return randomString;
// }
//
// randomStringGenerator(100);


//Task 10
// function union(a, b, c) {
//     var u = a.concat(b, c);
//     for (var i = 0; i < u.length - 1; i++) {
//         for (var m = i + 1; m < u.length; m++) {
//             if (u[i] === u[m]) {
//                 console.log(i, m);
//                 u.splice(m, 1);
//                 m--;
//             }
//         }
//     }
//     console.log(u);
// }
//
// union([1, 2, 3], [101, 2, 1, 10], [2, 1]);


//Task 11
// var arrNew = [];
//
// function arrCheck(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (!Array.isArray(arr[i])) {
//             arrNew.push(arr[i]);
//         }
//         else {
//             arrCheck(arr[i]);
//         }
//     }
//     return arrNew;
// }
//
// arrCheck([1, [2], [3, [[[4]]]]]);
// console.log(arrNew);


//Task 12
// function unique(a) {
//     for (var i = 0; i < a.length - 1; i++) {
//         for (var m = i + 1; m < a.length; m++) {
//             if (a[i] === a[m]) {
//                 a.splice(m, 1);
//                 m--;
//             }
//         }
//     }
//     console.log(a);
//     return a;
// }
//
// unique([1, 4,2,5,2,3,3]);

