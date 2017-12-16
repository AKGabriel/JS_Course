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


//Task 3.1 Simple variant. Counts only seconds.
// //Made two buttons: "Start/Wait/Continue" and "Stop". I think it is more user friendly this way. :)
function watA(i) {
    timerA = setInterval(function () {
        document.getElementById("label3A").innerHTML = "" + i + "";
        i++;
    }, 1000);
}

function t3StartA() {
    if (document.getElementById("button3_1A").value === "Start") {
        document.getElementById("button3_1A").value = "Wait";
        document.getElementById("button3A").removeAttribute("hidden");
        watA(1);
    }
    else if (document.getElementById("button3_1A").value === "Wait") {
        clearInterval(timerA);
        document.getElementById("button3_1A").value = "Continue";
    }
    else if (document.getElementById("button3_1A").value === "Continue") {
        document.getElementById("button3_1A").value = "Wait";
        watA(+document.getElementById("label3A").innerHTML + 1);
    }
}

function t3StopA() {
    clearInterval(timerA);
    document.getElementById("label3A").innerHTML = "";
    document.getElementById("button3_1A").value = "Start";
    document.getElementById("button3A").setAttribute("hidden", "");
}

//Task 3.2 Counts msec, sec, min, hr. Also adds "0" if number is less than 10
// Sorry for mess, didn't have much time to do it right. Was challenged to rewrite previous code by friend. =)
function wat(i) {
    timer = setInterval(function () {
        if (i === 100) {
            document.getElementById("label3").innerHTML = "00";
            i = 1;
            if (document.getElementById("label32").innerHTML < 9) {
                document.getElementById("label32").innerHTML = "0" + (+document.getElementById("label32").innerHTML + 1);
            }
            else {
                document.getElementById("label32").innerHTML = "" + (+document.getElementById("label32").innerHTML + 1)
            }
        }
        else if (i < 10) {
                document.getElementById("label3").innerHTML = "0" + i + "";
                i++;
            }
        else {
            document.getElementById("label3").innerHTML = "" + i + "";
            i++;
        }
        if (+document.getElementById("label32").innerHTML === 60) {
            if (+document.getElementById("label33").innerHTML < 9) {
                document.getElementById("label32").innerHTML = "00";
                document.getElementById("label33").innerHTML = "0" + (+document.getElementById("label33").innerHTML + 1);
            }
            else {
                document.getElementById("label32").innerHTML = "00";
                document.getElementById("label33").innerHTML = "" + (+document.getElementById("label33").innerHTML + 1);
            }
        }
        if (+document.getElementById("label33").innerHTML === 60) {
            if (+document.getElementById("label34").innerHTML < 9) {
                document.getElementById("label33").innerHTML = "00";
                document.getElementById("label34").innerHTML = "0" + (+document.getElementById("label33").innerHTML + 1);
            }
            else {
                document.getElementById("label33").innerHTML = "00";
                document.getElementById("label34").innerHTML = "" + (+document.getElementById("label33").innerHTML + 1);
            }
        }
    }, 10);
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
    document.getElementById("label3").innerHTML = "00";
    document.getElementById("label32").innerHTML = "00";
    document.getElementById("label33").innerHTML = "00";
    document.getElementById("label34").innerHTML = "00";
    document.getElementById("button3_1").value = "Start";
    document.getElementById("button3").setAttribute("hidden", "");
}


//Task 4
//WAT???

// а что непонятно с заданием?

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

// а тут что не понятно?


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
