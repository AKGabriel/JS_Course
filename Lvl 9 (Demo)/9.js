//Variables
var gameName = ["Jungle Spirit", "Pyramid", "Neon Staxx", "Football", "Koi Princess", "Planet of the Apes",
    "Scruffy Duck", "Secret of Christmas", "Wolf Cub", "Theme Park"];
var link = ["https://www.netent.com/en/game/jungle-spirit-call-of-the-wild/",
    "https://www.netent.com/en/game/pyramid-quest-for-immortality/",
    "https://www.netent.com/en/game/neon-staxx/",
    "https://www.netent.com/en/game/football-champions-cup-2/",
    "https://www.netent.com/en/game/koi-princess/",
    "https://www.netent.com/en/game/planet-of-the-apes/",
    "https://www.netent.com/en/game/scruffy-duck/",
    "https://www.netent.com/en/game/secrets-of-christmas/",
    "https://www.netent.com/en/game/wolf-cub/",
    "https://www.netent.com/en/game/theme-park-tickets-of-fortune/"];
var games = {};
games.name = gameName;
games.link = link;
games.count = [];

if (document.cookie === "") {
    for (var i = gameName.length - 1; i >= 0; i--) {
        games.count[i] = 0;
    }
}
else if (document.cookie.split(",").length !== games.name.length) {
    var difference = games.name.length - document.cookie.split(",").length;
    for (var m = 0; m < difference; m++) {
        document.cookie = document.cookie + ",0";
        games.count = document.cookie.split(",");
    }
}
else {
    games.count = document.cookie.split(",");
}

//Search
var input = document.getElementById("input");
var label = document.getElementById("label");
input.addEventListener("keyup", function () {
    if (input.value.length === 0) {
        label.parentNode.setAttribute("hidden", "");
    }
    else {
        var result = "";
        var count = 0;
        for (var i = games.name.length - 1; i >= 0; i--) {
            if (games.name[i].toLowerCase().indexOf(input.value.toLowerCase()) !== -1) {
                result = result + '<a onclick="hreF(this)" href="' + games.link[i] + '">' + games.name[i].replace("" + games.name[i].slice(games.name[i].toLowerCase().indexOf(input.value.toLowerCase()), games.name[i].toLowerCase().indexOf(input.value.toLowerCase()) + input.value.length) + "", "<b>" + games.name[i].slice(games.name[i].toLowerCase().indexOf(input.value.toLowerCase()), games.name[i].toLowerCase().indexOf(input.value.toLowerCase()) + input.value.length) + "</b>") + "</a>" + "<br>";
                label.innerHTML = result;
                label.parentNode.removeAttribute("hidden");
                count++;
            }
            else if (count === 0) {
                label.parentNode.setAttribute("hidden", "");
            }
        }
    }
});

console.log("sab");