// Task 1
// console.log(document.getElementsByTagName("input"));
// console.log(document.getElementsByClassName("form-control"));
// console.log(document.querySelectorAll("input"));
// console.log(document.querySelectorAll("[type='text']"));


//Task 2
var node = document.getElementsByClassName("input-group col-xs-12 marg");
var nodeLast = node[node.length - 1];
var nodeCloned = nodeLast.cloneNode(true);
nodeCloned.children[0].innerHTML = "Age";
document.querySelector("form").insertBefore(nodeCloned, document.querySelector("button"));


//Task 3
var inputs = document.querySelectorAll("input");
for (var i = 0; i < inputs.length; i++) {
    // setAttribute will replce the whole class we need to add a class to inputs - better use className or other approach
    inputs[i].setAttribute("class", "input-lg");
    inputs[i].setAttribute("id", inputs[i].previousElementSibling.innerHTML); //Part of Task 4
    inputs[i].setAttribute("placeholder", "Enter your " +inputs[i].id); //Complete Task 5. Why not use code written before, right?=)
    // yes!)
}


//Task 4
var labels = document.querySelectorAll("label");
for (var m = 0; m < labels.length; m++) {
    labels[m].setAttribute("for", labels[m].innerHTML);
}
//Second part done in Task 3


//Task 5
//Done in Task 3


//Task 6
var div = document.createElement("div");
document.querySelector("form").insertBefore(div, document.querySelector("button"));
div.setAttribute("class", "input-group col-xs-12 marg");

var labelNew = document.createElement("label");
div.appendChild(labelNew);
labelNew.setAttribute("for", "Gender");
labelNew.innerHTML = "Gender";

var select = document.createElement("select");
div.appendChild(select);
select.setAttribute("class", "form-control");

var option1 = document.createElement("option");
var option2 = document.createElement("option");
select.appendChild(option1);
select.appendChild(option2);
option1.setAttribute("value", "male");
option2.setAttribute("value", "female");
option1.innerHTML = "Male";
option2.innerHTML = "female";
