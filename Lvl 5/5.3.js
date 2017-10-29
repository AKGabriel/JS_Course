//Task 0
// function isNimble(){ return true; } //function declaration, can be called upon even before declaration
// var canFly = function(){ return true; }; // function expression, is created during executing. Cannot be called before that.
// window.isDeadly = function(){ return true; }; //the same as the first one. Declares global variable(function)


//Task 1
// function color() {
//     var r = Math.floor(Math.random() * 256);
//     var g = Math.floor(Math.random() * 256);
//     var b = Math.floor(Math.random() * 256);
//
//     return document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// }
//
// color();


//Task 2
// function getProducts(a) {
//     var arrProducts = [];
//     for (var i = 1; i <= a; i++) {
//         arrProducts.push("Product №" + i);
//     }
//     console.log(arrProducts);
// }
//
// getProducts(10);


//Task 3
// function sum(c) {
//     var a = 1;
//     for (var i = 1; i <= c; i++) {
//         a = a * 2;
//     }
//     var b = (a + "").split("");
//     var sum = 0;
//     for (var m = 0; m < b.length; m++) {
//         if (b[m] === "e") { //since e+number is just 10^number we can completely skip it since sum+0=sum
//             break;
//         }
//         else if (b[m] === ".") {
//         }
//         else {
//             sum = sum + (+b[m]);
//         }
//     }
//
//     console.log(sum);
// }
//
// sum(15); //26
// sum(1000); //68 //since e+number is just 10^number we can completely skip it since sum+0=sum