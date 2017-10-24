//Task 1 //replace works only once, so we need a loop
// var str = "aaa@bbb@ccc";
// do {
//     str = str.replace("@", "!");
// }
// while (str.search("@") !== -1);
//
// console.log(str);


//Task 2
// var str = "aaa bbb ccc";
// var new1 = str.substring(4, 7);
// var new2 = str.slice(4, 7);
// var new3 = str.substr(4, 3);
// console.log(str);
// console.log(new2);
// console.log(new3);


//Task 3
// var date = "2025-12-31";
// var arr = date.split("-");
// arr.reverse();
// var newdate = arr.join("/");
// console.log(newdate);


//Task 4
// var str = "js";
// var newstr = str.toUpperCase();
// console.log(newstr);


//Task 5
// var str = "I am Batman!";
// console.log(str.length);


//Task 6
// var b = "'Some random text'";
// var n = prompt("How many symbols do you want to cut in "+b+"?");
// if (n === null || n === "" || isNaN(n)) {
//     console.log("Laaame!");
// }
// else {
//     b = b.slice(0, n);
//     console.log(b);
// }


//Task 7-8
// var str = "I am tired T___T";
// console.log("Data:", str);
//
// var newstr = str.split(" ");
// console.log("Task 7:", newstr);
//
// var newnewstr = newstr.join("+");
// console.log("Task 8:",newnewstr);


//Task 9
// var str = "make it stop!";
// console.log("Data:", str);
// //Variant 1
// var str1 = str.slice(0, 1);
// str1 = str1.toUpperCase();
// str = str.slice(1);
// str = str1 + str;
// console.log("Result:", str);
// //Variant 2
// str = str.replace(str.charAt(0), str.charAt(0).toUpperCase());
// console.log("Result:", str);


//Task 10
// var str = "lets do it, yeah!";
// console.log("Data:", str);
//
// var arr = str.split(" ");
// for (var i = 0; i < arr.length; i++) {
//     var s = arr[i].slice(0, 1);
//     s = s.toUpperCase();
//     arr[i] = arr[i].slice(1);
//     arr[i] = s + arr[i];
// }
// var result = arr.join(" ");
// console.log("Result:", result);


//Task 11
// var str = "var_test_text";
// console.log("Data:", str);
//
// var arr = str.split("_");
// for (var i = 1; i < arr.length; i++) {
//     var s = arr[i].slice(0, 1);
//     s = s.toUpperCase();
//     arr[i] = arr[i].slice(1);
//     arr[i] = s + arr[i];
// }
// var result = arr.join("");
// console.log("Result:", result);


//Task 12
// var str = "varTestText";
// for (var i = 0; i < str.length; i++) {
//     if (str.charAt(i) === str.charAt(i).toUpperCase()) {
//         str = str.replace(str.charAt(i), "_" + str.charAt(i).toLowerCase())
//     }
// }
// console.log(str);


//Task 13
// var n = "1239473483457345209345820938495573342";
// var s = "";
// for (var i = n.length - 3; i > 0; i = i - 3) {
//     if (i > 3) {
//         s = " " + n.slice(i, i + 3) + s;
//     }
//     else {
//         s = n.slice(0, i) + " " + n.slice(i, i + 3) + s;
//     }
//
// }
// console.log(s);