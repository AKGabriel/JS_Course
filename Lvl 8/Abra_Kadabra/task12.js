//Task 12
window = ("width=569, height=381");

function pageO(a) {
    if (+a === 0) {
        location.href = "main.html";
    }
    else {
        location.href = "index" + a + ".html";
    }
}

function Back() {
    window.history.back();
}

function Forward() {
    window.history.forward();
}