//Task 1
function scrollSomewhere() {
    var xpx = +prompt("x?");
    var ypx = +prompt("y?");
    setTimeout(function () {
        window.scrollBy(xpx, ypx);
    }, 5);
}


//Task 2
function iframes() {
    for (var i = 0; i < window.frames.length; i++) {
        console.log(window.frames[i]);
    }
    console.log(document.getElementsByTagName("iframe"));
}


//Task 3
function deleteDiv() {
    var frame = document.getElementById("iframe3");
    for (var i = frame.parentNode.children.length - 1; i > 0; i--) { // i >= 0 would remove first <br>. Don't want to do that.)
        if (frame.parentNode.children[i] !== frame) {
            console.log(frame.parentNode.children[i]);
            frame.parentNode.removeChild(frame.parentNode.children[i]);
        }
    }
}


//Task 4
document.getElementById("iframe4").onload = setTimeout(function () {
    var frame = document.getElementById("iframe4");
    var div = document.createElement("div");
    div.innerHTML = "Я загрузилсо!";
    frame.parentNode.insertBefore(div, frame);
}, 1);


//Task 5
function newWindow() {
    window.open("", "", "width=400, height=500, location=no, status=yes, resizable=no, scrollbars=yes");
}


//Task 6
function google() {
    var wind = window.open("http://google.com", "", "width=1200, height=600");
    setTimeout(function () {
        wind.close();
        alert("Time's up, slowpoke!");
    }, 5000);
}


//Task 7
function userInfo() {
    document.getElementById("label71").innerHTML = navigator.userAgent;
    document.getElementById("label72").innerHTML = "Browser: " + navigator.appCodeName;
    //It returns Mozilla for all browsers. :(
    document.getElementById("label73").innerHTML = "Platform: " + navigator.platform;
}


//Task 8
function showBrowser() {
    var brow = navigator.appCodeName;
    var div = document.getElementById("browsers");
    for (var i = 0; i < div.children.length; i++) {
        if (div.children[i].id === brow) {
            div.children[i].removeAttribute("hidden");
        }
    }
}


//Task 9
function cook() {

    if (navigator.cookieEnabled) {
        window.open("cookieMonster.gif", "", "width=569, height=381");
        document.getElementById("div9").removeAttribute("hidden");
    }
    else {
        alert("No cookie for me... :`(");
    }
}


//Task 10
function vers() {
    var current = +navigator.appVersion.split("/")[2].slice(0, 2);
    if (current === 62) {
        alert("Okay, go on..")
    }
    else {
        alert("Pfff, go update yourself. :D");
    }
}


//Task 11
function scree() {
    var w = screen.width;
    var h = screen.height;
    if (w < 1366 || h < 800) {
        document.body.setAttribute("class", "small-screen");
        alert("Uti-puti!");
    }
    else {
        document.body.setAttribute("class", "large-screen");
        alert("Good enough.");
    }
}


//Task 12
//see in separate directory "Abra_kadabra"




//Task 13
function portt() {
    alert("Take this, mortal: " +location.port);
}