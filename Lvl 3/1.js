//Task 1
// var a = +prompt("Please, type '0' here", "");
// if (a === 0) {
//     alert("Good boy!");
// }
// else {
//     (alert("Are you retarded? I said '0'! -___-"));
// }

// ?? Проверьте работу скрипта при a, равном 1, 0, -3.


//Task 2
// var a = prompt("Are you Batman?", "");
// if (a === "yes" || a === "Yes") {
//     alert("Liar!");
// }
// else if (a === "no" || a==="No") {
//     alert("It is a pity...");
// }
// else {
//     alert("Do you even speak English..?");
// }

// ?? Проверьте работу скрипта при a, равном 'test', 'тест', 3.


//Task 3
//                        //A
// var test = prompt("Sky is red, true or false?", "");

// тут проверять на true нужно как булевое значение а не строку "true"
// if (test === "true") {
//     console.log("Da");
// }
// else if (test === "false") {
//     console.log("Ne");
// }
// else {
//     console.log("Wat?");
// }
//                        //B
// var test = prompt("Sky is red, true or false?", "");
// то же самое буловое значение true || false и switch в даном случае лишний потому что может быть либо true либо false
// switch (test) {
//     case "true":
//         console.log("Da");
//         break;
//     case "false":
//         console.log("Ne");
//         break;
//     default:
//         console.log("Wat?");
// }
//                        //C
// var test = prompt("Sky is red, true or false?", "");
// test==="true" ? console.log("Da") : console.log("Ne");


//Task 4
// var a = +prompt("Pick a number.", "");
// if (isNaN(a)) {
//     alert("It is not a number, dummy.");
// }
// else {
//     var b = +prompt("Pick a second one.", "");
//     if (isNaN(b)) {
//         alert("Yeah, almost");
//     }
//     else {
//         var result = a + b;
//         if (result > 5) {
//             result = 5;
//         }
//         else {
//             result = result * 10;
//         }
//     }
// }
// console.log(result);

// ?? Проверьте работу скрипта при a и b, равных 2 и 5, 3 и 1.


//Task 5
// var a = +prompt("Pick a number.", "");
// if (isNaN(a)) {
//     alert("It is not a number, dummy.");
// }
// else if (a === 0 || a === 2) {
//     a = a / 10;
//     alert("Here, take this " + a + ".");
// }
// else {
//     a = a + 7;
//     alert("Here, take that " + a + ".");
// }

// ?? Проверьте работу скрипта при a, равном 5, 0, -3, 2.

//Task 6
// var a = +prompt("Pick a number less or equal 1.", "");
// var b = +prompt("Guess a number more or equal 3.", "");
// if (a <= 1 && b >= 3) {
//     var c = a + b;
//     alert("Here we go: " + c + "");
// }
// else {
//     alert("Nope!");
// }

// ?? Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

//Task 7
// var a = +prompt("Pick a number 2<a<11.", "");
// var b = +prompt("Guess a number 6<=b<14.", "");
// if (isNaN(a) || isNaN(b)) {
//     alert("Try again...");
// }
// else if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//     a = a + 2;
//     alert("Here we go: " + a + "");
// }
// else {
//     a = a + 5;
//     alert("Here we go: " + a + "");
// }


//Task 8
// var num = +prompt("Pick 1, 2, 3, 4.", "");
// switch (num) {
//     case 1:
//         console.log("Winter");
//         break;
//     case 2:
//         console.log("Spring");
//         break;
//     case 3:
//         console.log("Summer");
//         break;
//     case 4:
//         console.log("Autumn");
//         break;
//     default:
//         console.log("Really?");
// }


//Task 9
//                        //if
// var arr = [];
// var lang = prompt("Choose your language", "");
// if (lang === "ru") {
//     arr = [" пн", " вт", " ср", " чт", " пт", " сб", " вс"];
//     alert("Вот ваша неделя" + arr + ".");
// }
// else if (lang === "en") {
//     arr = [" mo", " tu", " we", " th", " fr", " sa", " su"];
//     alert("Your week looks like this:" + arr + ".");
// }
// else if (lang === "de") {
//     arr = [" mon", " die", " mit", " don", " fre", " sam", " son"];
//     alert("Deine Woche sieht so aus:" + arr + ".");
// }
// else {
//     alert("Sorry, not supported.");
// }
// лушчше бы обьвить массивы отдельно в 3 перменных для разных языков и потом использовать их в условиях и в многомерных массивах
//                        //Switch+Multi_Array
// var arr = [];
// var marr = [[" mo", " tu", " we", " th", " fr", " sa", " su"],
//             [" пн", " вт", " ср", " чт", " пт", " сб", " вс"],
//             [" mon", " die", " mit", " don", " fre", " sam", " son"]
//             ];
// var lang = prompt("Choose your language", "");
// switch (lang) {
//     case "en":
//         arr = marr[0];
//         alert("Your week looks like this:" + arr + ".");
//         break;
//     case "ru":
//         arr = marr[1];
//         alert("Вот ваша неделя" + arr + ".");
//         break;
//     case "de":
//         arr = marr[2];
//         alert("Deine Woche sieht so aus:" + arr + ".");
//         break;
//     default :
//         alert("Sorry, not supported.");
// }
