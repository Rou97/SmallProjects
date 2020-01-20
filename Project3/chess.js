'use strict';

function genDivs(v) {
    let a = document.getElementById("a");
    a.parentNode.removeChild(a);

    var e = document.getElementById("game");
    for (var i = 0; i < v; i++) {
        var row = document.createElement("div");
        row.className = "row";
        for (var x = 1; x <= v; x++) {
            var cell = document.createElement("div");
            cell.className = "gridsquare";
            cell.innerText = (i * v) + x;
            row.appendChild(cell);
        }
        e.appendChild(row);
    }
}




