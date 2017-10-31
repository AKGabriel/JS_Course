// //Task 1.1
// function mult() {
//     return function m3(x) {
//         console.log(x * 3);
//         return x * 3;
//     };
// }
//
// mult()(5);

//Task 1.2
// function fact() {
//     var result = 1;
//     var s = +prompt("Choose you Destiny!");
//     for (var i = 1; i <= s; i++) {
//         result = result * i;
//     }
//     alert(result);
// }
//
// fact();


//Task 2
// var add = function (a) {
//     return function add1(b) {
//         var result = 0;
//         return result = a + b;
//     };
// };
//
// console.log(add(2)(3));


//Task 3
// var numberArray = [1, 2, 3, 4, 10, 5, 6, 7];
// var funNumberArray = numberArray.map(function (x) {
//
//     return function () {
//         return alert(x);
//     };
//
// });
// console.log(funNumberArray);
// console.log(funNumberArray[0]());


//Task 4
// function double(a) {
//     return a * 2;
// }
//
// function doubleTriple(a) {
//     return double(a) * 3;
// }
//
// console.log(double(9)); //18
// console.log(doubleTriple(5)); // 30 = 5 * 3 * 2


//Task 5
// where is the variable i created?? and why -1?
// function createCount() {
//     i = -1;
//     return makeCount();
// }
//
// function makeCount() {
//     i++;
//     console.log(i);
//     return i;
// }
//
// createCount(); //0 - Created
// makeCount(); //1...


//Task 6
// function createCount(startFrom) {
//     i = startFrom - 1;
// ?? why startrom - 1
//     return makeCount();
// }
//
// function makeCount() {
//     i++;
//     console.log(i);
//     return i;
// }
//
// createCount(4); //4 - Created
// makeCount(); //5...

