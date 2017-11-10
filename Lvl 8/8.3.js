//Task 1.1
var removal = document.getElementsByTagName("a");
for (var i = 0; i < removal.length; i++) {
    removal[i].addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
    });
}

//Task 1.2
document.getElementsByTagName("button")[0].addEventListener("click", function () {
    var li = document.getElementsByTagName("li");
    var liNew = document.createElement("li");
    liNew.innerHTML = "Element " + (li.length + 1);
    var a = document.createElement("a");
    a.setAttribute("class", "glyphicon glyphicon-remove");
    a.setAttribute("href", "#");
    a.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
    });
    liNew.appendChild(a);
    document.getElementsByClassName("list-unstyled")[0].appendChild(liNew);
});


//Task 2.1
var arr = [];
document.getElementsByClassName("btn btn-warning")[0].addEventListener("click", function () {
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var gender = document.getElementById("select");
    if (name.value === "" || age.value === "") {
        var div = document.createElement("div");
        div.innerHTML = "Fill all the gaps, lazy ass!";
        document.getElementById("t2").insertBefore(div, document.getElementsByClassName("btn btn-warning")[0].nextElementSibling);
        if (name.value === "") {
            name.setAttribute("style", "border-color: red white");
        }
        if (age.value === "") {
            age.setAttribute("style", "border-color: red white");
        }
        setTimeout(function () {
            div.parentNode.removeChild(div);
            name.removeAttribute("style");
            age.removeAttribute("style");
        }, 3000);
    }
//Task 2.2
    else {
        arr.push({name: name.value, age: age.value, gender: gender.value});
        var div2 = document.createElement("div");
        div2.innerHTML = arr[arr.length - 1].name + " " + arr[arr.length - 1].age + " " + arr[arr.length - 1].gender;
        document.getElementById("t2").appendChild(div2);
        name.value = "";
        age.value = "";
    }
});