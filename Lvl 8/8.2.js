//Task 1
function printNumbersInterval() {
    var i = 1;
    var timer = setInterval(function () {
        document.getElementById("label1").innerHTML = "" + i + "";
        console.log(i);
        i++;
    }, 100);

    setTimeout(function () {
        clearInterval(timer);
    }, 2000);
}


//Task 2
function printNumbersInterval2() {
    var i = 1;
    setInterval(function () {
        if (i > 20) {
            return;
        }
        document.getElementById("label2").innerHTML = "" + i + "";
        console.log(i);
        i++;
    }, 100);
}


//Task 3
//Made two buttons: "Start/Wait/Continue" and "Stop". I think it is more user friendly this way. :)
function wat(i) {
    timer = setInterval(function () {
        document.getElementById("label3").innerHTML = "" + i + "";
        console.log(i);
        i++;
    }, 1000);
}

function t3Start() {
    if (document.getElementById("button3_1").value === "Start") {
        document.getElementById("button3_1").value = "Wait";
        document.getElementById("button3").removeAttribute("hidden");
        wat(1);
    }
    else if (document.getElementById("button3_1").value === "Wait") {
        clearInterval(timer);
        document.getElementById("button3_1").value = "Continue";
    }
    else if (document.getElementById("button3_1").value === "Continue") {
        document.getElementById("button3_1").value = "Wait";
        wat(+document.getElementById("label3").innerHTML + 1);
    }
}

function t3Stop() {
    clearInterval(timer);
    document.getElementById("label3").innerHTML = "";
    document.getElementById("button3_1").value = "Start";
    document.getElementById("button3").setAttribute("hidden", "");
}


//Task 4
//WAT???


//Task 5
function wat2(i) {
    timer = setInterval(function () {
        if (i < 0) {
            t5Stop();
            alert("Time's up!");
            return;
        }
        document.getElementById("label5").innerHTML = "" + i + "";
        console.log(i);
        i--;
    }, 1000);
}

function t5Start() {
    if (document.getElementById("button5_1").value === "Start") {
        document.getElementById("button5_1").value = "Wait";
        document.getElementById("button5").removeAttribute("hidden");
        wat2(+prompt("Set timer, please"));
    }
    else if (document.getElementById("button5_1").value === "Wait") {
        clearInterval(timer);
        document.getElementById("button5_1").value = "Continue";
    }
    else if (document.getElementById("button5_1").value === "Continue") {
        document.getElementById("button5_1").value = "Wait";
        wat2(+document.getElementById("label5").innerHTML - 1);
    }
}

function t5Stop() {
    clearInterval(timer);
    document.getElementById("label5").innerHTML = "";
    document.getElementById("button5_1").value = "Start";
    document.getElementById("button5").setAttribute("hidden", "");
}


//Task 6
//And again.. WAT???


//Task 7
function showCom() {
    document.getElementById("frame").setAttribute("src", "pew_pew/1.png");
    var imageNumber = 2;
    var inter = setInterval(function () {
        if (imageNumber === 4) {
            clearInterval(inter);
        }
        document.getElementById("frame").setAttribute("src", "pew_pew/" + imageNumber + ".png");
        imageNumber++;
    }, 5000);
}


//Task 8
function testNum(number) {
    var span = document.createElement("span");

    number = number.replace(/ /g, "");
    number = number.replace(/\//g, "");
    number = number.replace(/\\/g, "");
    document.getElementById("inp8").value = number;

    for (var i = 0; i < number.length; i++) {
        if (number.charCodeAt(i) < 48 || number.charCodeAt(i) > 57 || number.length !== 7) {
            span.innerHTML = "Wrong!";
            span.setAttribute("style", "background-color:red");
            break;
        }
        else if (i === number.length - 1) {
            span.innerHTML = "Right!";
            span.setAttribute("style", "background-color:green");
        }
    }

    document.getElementById("div8").appendChild(span);
    document.getElementById("inp8").addEventListener("keypress", block);
    setTimeout(function () {
        document.getElementById("div8").removeChild(span);
        document.getElementById("inp8").value = "";
        document.getElementById("inp8").removeEventListener("keypress", block);
    }, 4000);
}

function block() {
    event.preventDefault()
}