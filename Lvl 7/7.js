//Task 0
document.querySelector('form').addEventListener('submit', function (evt) {
    if (document.getElementById("input0").value === "" ||
        document.getElementById("textarea0").value === "") {
        evt.preventDefault();
        alert("Fill the gaps first, buddy!");
    }
    else if (!document.getElementById("checkbox0").checked) {
        evt.preventDefault();
        alert("Check the box. Nothing bad will happen. We promise. ]:>");
    }
    else {
        alert("Congratulations! Your soul is sold!");
    }
});


//Task 1 // actual code is only few strings long,
// everything else are just checks for valid values of a and b.
// Dunno, just got carried away. :D
function changeContent(a, b, str) {
    var table = document.getElementById("myTable");

    var checkA = 0;
    var checkB = 0;
    do {
        if (checkA !== 0) {
            alert("Only numbers between 1 and " + table.children[0].children.length + " are allowed!");
        }
        a = prompt("Choose row");
        checkA++;
    }
    while (isNaN(a) || a > table.children[0].children.length);
    do {
        if (checkB !== 0) {
            alert("Only numbers between 1 and " + table.children[0].children[a - 1].children.length + " are allowed!");
        }
        b = prompt("Choose column");
        checkB++;
    }
    while (isNaN(b) || b > table.children[0].children[a - 1].children.length);

    str = prompt("Put something there");

    var place = table.children[0].children[a - 1].children[b - 1];
    place.innerHTML = str;

}

//Task 2
function removeColor(color) {
    var element = document.getElementById("colorSelect");
    color = element.value;
    for (var i = 0; i < element.children.length; i++) {
        if (element.children[i].value === color) {
            element.children[i].remove();
        }
    }
}

//Task 3
var boldText = document.getElementById("boldText").innerHTML;
var highlighted = boldText.replace(/<strong>/g, "<span style='background-color:yellow'><strong>");
var highlighted2 = highlighted.replace(/<\/strong>/g, "</strong></span>");
//Works too :)
// var highlighted2 = highlighted.replace(new RegExp("</strong>", "g"), "</strong></span>");
document.getElementById("boldText").innerHTML = highlighted2;


//Task 4
function insert_Row() {
    var element = document.getElementById("sampleTable");
    var newRow = element.appendChild(document.createElement("tr"));
    for (var y = 0; y < element.children[0].children[0].children.length; y++) {
        var newCol = newRow.appendChild(document.createElement("td"));
        newCol.innerHTML = "New one!";
    }
}


//Task 5
//Made one button for both actions needed
function showNotification() {
    var pop = document.getElementsByClassName("popup")[0];
    if (pop.getAttribute("hidden") === "") {
        pop.removeAttribute("hidden");
    }
    else {
        pop.setAttribute("hidden", "")
    }
}


//Task 6
var input6 = document.getElementById("input6");
input6.addEventListener("keydown", function (e) {
    if (e.which > 64 && e.which < 70) {
        event.preventDefault();
    }
});


//Task 7
document.getElementById("inp").addEventListener("keyup", function () {
    var value = document.getElementById("inp").value.split("");
    for (var m = value.length - 1; m >= 0; m--) {
        if (value[m] === ".") {
            value.splice(m, 1);
        }
    }
    for (var i = value.length - 4; i >= 0; i -= 3) {
        value.splice(i + 1, 0, ".");
    }
    document.getElementById("inp").value = value.join("");
});


//Task 8
document.getElementById("form7").addEventListener("keydown", function () {
    if (document.activeElement.value.length > 1) {
        event.preventDefault();
        for (var i = 0; i < document.getElementById("form7").children.length; i++) {
            if (document.getElementById("form7").children[i].value.length !== 2) {
                if (document.activeElement.nextElementSibling === null) {
                    document.getElementById("form7").children[i].focus();
                }
                else {
                    document.activeElement.nextElementSibling.focus();
                }
                break;
            }
            else if (i === document.getElementById("form7").children.length - 1) {
                document.activeElement.blur();
                alert("Amazing, you did it!");
            }
        }
    }
});


//Task 9
document.getElementById("w9").addEventListener("keyup", function(){
    document.getElementById("ta9").style.width = this.value + "px";
});

document.getElementById("h9").addEventListener("keyup", function(){
    document.getElementById("ta9").style.height = this.value + "px";
});


//Task 10 Variant 1: Stop when any 5 cells are chosen
var table101 = document.getElementById("table10").cloneNode(true);
table101.setAttribute("id", "table101");
document.body.insertBefore(table101, document.getElementById("table10"));
document.body.insertBefore(document.createElement("hr"), document.getElementById("table10"));

var table1011 = document.getElementById("table101").children[0].children;
var count = 0;
for (var x = 0; x < table1011.length; x++) {
    for (var y = 0; y < table1011[x].children.length; y++) {
        table1011[x].children[y].addEventListener("click", function () {
            if (count >= 5) {
                event.preventDefault();
                alert("Enough! -___-");
            }
            else if (this.style.backgroundColor !== "red") {
                this.style.backgroundColor = "red";
                count++;
            }
        });
    }
}

//Task 10 Variant 2: stop when any horizontal or vertical line is completed
var stop = 0;
var table10 = document.getElementById("table10").children[0].children;
for (var x1 = 0; x1 < table10.length; x1++) {
    for (var y1 = 0; y1 < table10[x1].children.length; y1++) {
        table10[x1].children[y1].addEventListener("click", function () {
            if (stop === 1) {
                alert("Enough! -___-");
            }
            else {
                for (var x = 0; x < table10.length; x++) {
                    var count = 0;
                    var count1 = 0;
                    for (var y = 0; y < table10[x].children.length; y++) {
                        if (table10[x].children[y].style.backgroundColor === "red") {
                            count++;
                        }
                        if (table10[y].children[x].style.backgroundColor === "red") {
                            count1++;
                        }
                        if (count > table10.length - 1 || count1 > table10[x].children.length - 1) {
                            stop = 1;
                        }
                        else {
                            this.style.backgroundColor = "red";
                        }
                    }
                }
            }
        });
    }
}


//Task 11
var n = 10;
var inp = document.getElementById("inp11");
var lab = document.getElementById("label11");
inp.addEventListener("keyup", function() {
    if (inp.value.length < 10) {
        lab.innerHTML = "You can type "+(10 - inp.value.length)+" more symbols.";
    }
    else if ((inp.value.length === 10)) {
        lab.innerHTML = "Enough!!!";
    }
    if (inp.value.length > 10) {
        lab.innerHTML = "It is "+(inp.value.length - 10)+" symbols more than needed!";
    }
});
