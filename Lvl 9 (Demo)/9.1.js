//Reset
document.getElementById("reset").addEventListener("click", function () {
    event.preventDefault();
    label.innerHTML = "";
    input.value = "";
});


//Clear
document.getElementById("cHistory").addEventListener("click", function () {
    event.preventDefault();
    document.cookie = "";
    for (var i = gameName.length - 1; i >= 0; i--) {
        games.count[i] = 0;
    }
    if (document.getElementById("table") !== null) {
        document.body.removeChild(document.getElementById("table"));
    }
});


//Count
function hreF(a) {
    event.preventDefault();
    for (var i = 0; i < games.name.length; i++) {
        if (a + "" === games.link[i]) {
            games.count[i]++;
            document.cookie = "" + games.count;
            break;
        }
    }
    //Uncomment!!! //window.open(a);
}