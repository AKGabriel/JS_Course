//Task 1
// var sum = "";
// var x = +prompt("Starting from what number?");
// var y = +prompt("and to what number?");
// for (var i = x; i <= y; i++) {
//     for (var m = 2; m <= i; m++) {
//         if (i === m) {
//             sum = sum + i + ",";
//         }
//         else if (i % m === 0) {
//             break;
//         }
//     }
// }
// console.log(sum);


//Task 2 //Arrays
// var obj = {classname: "open menu"};
//
// function addClass(obj, cls) {
//     var arr = obj.classname.split(" ");
//     for (var i = 0; i <= arr.length - 1; i++) {
//         if (arr[i] === cls) {
//             break;
//         }
//         else if (i === arr.length - 1) {
//             arr.push(cls);
//         }
//     }
//     obj.classname = arr.join(" ");
//     console.log(obj.classname);
// }
//
// addClass(obj, prompt("Do something already!"));


//Task 2 //Strings
// var obj = {classname: "open menu"};
//
// function addClass(obj, cls) {
//     if (obj.classname.search(cls) === -1) {
//         obj.classname = obj.classname + " " + cls;
//     }
//     console.log(obj.classname);
// }
//
// addClass(obj, prompt("Do something already!"));


//Task 3 //Array
// var obj = {classname: "open menu"};
//
// function removeClass(obj, cls) {
//     var arr = obj.classname.split(" ");
//     for (var i = 0; i <= arr.length - 1; i++) {
//         if (arr[i] === cls) {
//             arr.splice(i, 1);
//             break;
//         }
//     }
//     obj.classname = arr.join(" ");
//     console.log(obj.classname);
// }
//
// removeClass(obj, prompt("Do something already!"));

//Task 3 //String //Remove class, but also remove part of class if possible
// var obj = {classname: "open menu"};
//
// function removeClass(obj, cls) {
//     if (obj.classname.search(cls) !== -1) {
//         obj.classname = obj.classname.replace(cls, "");
//     }
//     console.log(obj.classname);
// }
//
// removeClass(obj, prompt("Do something already!"));


//Task 4
// var arr = [];
// var sum = 0;
// do {
//     var a = prompt("Say something");
//     if (!isNaN(a) && a !== "" && a !== null) {
//         arr.push(+a);
//         console.log(typeof(a));
//         console.log(arr)
//     }
// }
//
// while (!isNaN(a) && a !== "" && a !== null);
//
// for (var i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// console.log(sum);


//Task 5
// var n1 = n2 = 1;
//
// function fib(n) {
//     n = +prompt("Well?");
//     if (n === 1 || n === 2) {
//         alert("It is 1!");
//     }
//     else if (isNaN(n)) {
//         alert("Nope.");
//     }
//     else {
//         for (var i = 2; i < n; i++) {
//             var f = n1 + n2; //2
//             n1 = n2; // 1
//             n2 = f; //2
//         }
//         alert("it is " + f + "!");
//     }
// }
//
// fib();


//Task 6
// function cut(a) {
//     a = prompt("I'm intrigued, tell me more!");
//     if (a === null || a === "") {
//         console.log("Go away then...");
//     }
//     else if (a.length > 20) {
//         a = a.slice(0, 20);
//         console.log(a + "... bla bla bla...");
//     }
//     else {
//         console.log(a + "You say, hmm...");
//     }
// }
//
// cut();


//Task 7
// var tasksCompleted = {
//     'Anna': 29,
//     'Serg': 35,
//     'Elena': 1,
//     'Anton': 99
// };
// var arr = [];
// var arr2 = [];
// for (var a in tasksCompleted) {
//     arr.push(tasksCompleted[a]);
//     arr2.push(a);
// }
// if (arr[0] > arr[1]) {
//     var s = arr[0];
// }
// else {
//     s = arr[1];
// }
// for (var i = 2; i < arr.length; i++) {
//     if (s < arr[i]) {
//         s = arr[i];
//         console.log(arr2[i]);
//     }
// }