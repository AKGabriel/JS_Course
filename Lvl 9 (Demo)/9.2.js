//History
document.getElementById("sHistory").addEventListener("click", function () {
    event.preventDefault();

    if (document.getElementById("table") !== null) {
        document.body.removeChild(document.getElementById("table"));
    }

    //Sort by Count
    var bunch = [];
    for (var c = 0; c < games.count.length; c++) {
        bunch.push({"name": games.name[c], "link": games.link[c], "count": games.count[c]});
    }
    bunch.sort(function (x, y) {
        return (x.count < y.count);
    });

    var gamesSorted = {};
    gamesSorted.name = [];
    gamesSorted.link = [];
    gamesSorted.count = [];
    for (var v = 0; v < bunch.length; v++) {
        gamesSorted.name[v] = bunch[v].name;
        gamesSorted.link[v] = bunch[v].link;
        gamesSorted.count[v] = bunch[v].count;
    }

    var table = document.createElement("table");
    table.setAttribute("id", "table");
    table.setAttribute("class", "centerF");
    document.body.appendChild(table);

    document.getElementById("table").appendChild(document.createElement("tr"));
    (document.getElementsByTagName("tr")[0].appendChild(document.createElement("td"))).innerHTML = "Name";
    (document.getElementsByTagName("tr")[0].appendChild(document.createElement("td"))).innerHTML = "Search Count";
    (document.getElementsByTagName("tr")[0].appendChild(document.createElement("td"))).innerHTML = "Button";

    for (var i = 0; i < gamesSorted.count.length; i++) {
        if (document.getElementById("table").children.length >= 6) {
            break;
        }
        if (gamesSorted.count[i] > 0) {
            var row = document.createElement("tr");
            document.getElementById("table").appendChild(row);
            (row.appendChild(document.createElement("td"))).innerHTML = gamesSorted.name[i];
            (row.appendChild(document.createElement("td"))).innerHTML = gamesSorted.count[i];

            var button = (row.appendChild(document.createElement("td"))).appendChild(document.createElement("button"));
            button.innerHTML = "Remove";
            button.addEventListener("click", function () {
                document.getElementById("table").removeChild(this.parentElement.parentElement);
                for (var m = 0; m < gamesSorted.name.length; m++) {
                    if (games.name[m] === this.parentElement.previousElementSibling.previousElementSibling.innerHTML) {
                        games.count[m] = 0;
                        document.cookie = "" + games.count;
                        break;
                    }
                }
            });
        }
    }
});