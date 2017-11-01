//Task 1
// function createTable(fcolor, scolor, contents) {
//     var table = document.createElement("table");
//     document.body.appendChild(table);
//     table.style.backgroundColor = fcolor;
//     var arr = 0;
//
//     for (var i = 0; i < 3; i++) {
//         var row = document.createElement("tr");
//         table.appendChild(row);
//         for (var m = 0; m < 3; m++) {
//             var column = document.createElement("td");
//             row.appendChild(column);
//             column.innerHTML = contents[arr];
//             if (arr % 2 !== 0) {
//                 column.style.backgroundColor = scolor;
//             }
//             arr++;
//         }
//     }
// }
//
// createTable("green", "red", [1,2,3,4,5,6,7,8,9]);


//Task 2
// function createTable(rowN, columnN) {
//     document.body.appendChild(document.createElement("table"));
//     for (var i = 0; i < rowN; i++) {
//         var row = document.querySelector("table").appendChild(document.createElement("tr"));
//         for (var m = 0; m < columnN; m++) {
//             var column = row.appendChild(document.createElement("td"));
//
//             var r = Math.floor(Math.random() * 256);
//             var g = Math.floor(Math.random() * 256);
//             var b = Math.floor(Math.random() * 256);
//             column.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
//
//             var symba = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Unsupported characters for the charset 'US-ASCII'
//             column.innerHTML = symba.charAt(Math.floor(Math.random() * 26));
//         }
//
//     }
// }
//
// createTable(3, 4);


//Task 3
// var n = document.querySelector("a").attributes;
// for (var i = 0; i < n.length; i++) {
//     console.log(n[i].nodeName + ": " + n[i].nodeValue);
// }


//Task 4
// document.querySelector("p").style.color = "red";
// document.querySelector("p").style.fontStyle = "italic";
// //Enough? :)

//Task 5
// if (document.head.childNodes[1].childNodes[0] === undefined) {
//     console.log("Empty");
// }
//OR
// if (document.head.childNodes[1].childNodes.length === 0) {
//     console.log("Empty");
// }


//Task 6
// function createElementInBlock(blockLink, elementName) {
//     var block = document.querySelector(blockLink);
//     for (var i = 0; i < block.children.length; i++) {
//         if (elementName.toUpperCase() === block.children[i].tagName) {
//             break;
//         }
//         else if (i === block.children.length - 1) {
//             var el = document.createElement(elementName);
//             block.appendChild(el);
//         }
//     }
// }
//
// createElementInBlock("tbody", "div"); //creates tl, td, div.. everything except tr, because tbody already has one.


// Task 7
// function createCloneNode(nod) {
//     var newNode = document.querySelector(nod).cloneNode(true);
//     document.body.appendChild(newNode);
// }
//
// createCloneNode("meta");


//Task 8
// function addChildrenTo(block, count, type) {
//     for (var i = 0; i < count; i++) {
//         var a = document.createElement(type);
//         document.querySelector(block).appendChild(a);
//     }
// }
//
// addChildrenTo("tr", 4, "td");


//Task 9
// function replaceElBy(blockCurrent, blockToReplaceWith) {
//     var old = document.querySelector(blockCurrent);
//     var young = document.createElement(blockToReplaceWith);
//     old.parentNode.replaceChild(young, old);
// }
//
// replaceElBy("table", "tl");


//Task 10
// function f(elem1, elem2) {
//     var e1 = document.head.appendChild(document.createElement(elem1));
//     var e2 = document.head.appendChild(document.createElement(elem2));
//     e1.setAttribute("class", "www");
//     e2.setAttribute("class", "www");
//
//     var n = document.getElementsByClassName("www");
//     for (var i = n.length - 1; i >= 0; i--) {
//         n[i].setAttribute("class", "" + n[i].className + "" + n[i].tagName.toLowerCase() + "");
//     }
//
// }
//
// f("table", "tl");


//Task 11-12
// var o = document.body.appendChild(document.createElement("ol"));
// var l = document.querySelector("ol").appendChild(document.createElement("li"));
// l.innerHTML = "Bazinga!";
// //Or like this:
// document.body.appendChild(document.createElement("ol")).appendChild(document.createElement("li")).innerHTML = "LolWat";
// // =)))


//Task 13
// function flea(a) {
//     var ul = document.createElement("ul");
//     document.body.appendChild(ul);
//     for (var i = 0; i < a.length; i++) {
//         var li = document.createElement("li");
//         ul.appendChild(li);
//         li.innerHTML = a[i];
//     }
// }
//
// flea([1, 2,3,4,5]);


//Task 14
// var element = document.querySelector("div");
// var text = element.textContent;
// var textN = "";
// var colors = ["red", "green", "blue", "purple", "yellow"];
// var control = "";
//
// for (var i = 0; i < text.length; i++) {
//     do {
//         var randomColor = Math.floor(Math.random() * colors.length);
//     }
//     while (randomColor === control);
//     control = randomColor;
//
//     textN = textN + "<span style='color:" + colors[randomColor] + "'>" + text.charAt(i) + "</span>";
// }
// element.innerHTML = textN;
// //Ya sam v shoke, chto ono rabotaet)))