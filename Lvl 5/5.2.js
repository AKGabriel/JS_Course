// function isContextEqualTo(contextLink) {
//     console.log(contextLink === this);
// }
//
// function name() {
//     isContextEqualTo(window); // true, window
// }
//
//
// var name = "Vasya";
//
// var user = {
//     getName: function () {
//         isContextEqualTo(window); //true, but if we replace fuction with (contextLink === this) then false.
//         isContextEqualTo(user); // false, but if we replace fuction with (contextLink === this) then true.
//     }
// };
//
// console.log(user.getName()); // true, false
//
// var getName = user.getName;
//
// console.log(getName()); // true
//
// user.getName = name;
//
// console.log(user.getName()); // Error. It is not a function. If () removed - then //Vasya
//
// user.getName.call(window); // Error. user.getName is function no more.