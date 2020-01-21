'use strict';

function genDivs(v) {
    let a = document.getElementById("a");
    a.parentNode.removeChild(a);

    let e = document.getElementById("game");
    for (let i = 0; i < v; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 1; j <= v; j++) {
            let cell = document.createElement("div");
            cell.className = "gridsquare";
            cell.id = `p${(i * v) + j}`;
            cell.addEventListener("click", move);
            row.appendChild(cell);
            addChessPiece(i, j, cell);

        }
        e.appendChild(row);
    }
}

let a;
let b;

function move(id) {

    if (a === undefined) {

        if (id.toElement.id === '') {
            a = id.toElement.parentNode.id;
        } else {
            a = id.toElement.id;
        }

    } else {

        if (id.toElement.id === '') {
            b = id.toElement.parentNode.id;
        } else {
            b = id.toElement.id;
        }

    }

    if (b !== undefined) {
        let c = document.getElementById(a);
        let d = document.getElementById(b);

        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);

        let newElement = document.createElement("i");
        newElement.className = c.childNodes[0].className;
        //falta color de la pieza
        d.appendChild(newElement);
        c.childNodes[0].className = "";

        a = undefined;
        b = undefined;

    }

}

function addChessPiece(i, j, cell) {
    if (i === 1) {
        let piece = document.createElement("i");
        piece.className = "fas fa-chess-pawn fa-3x";
        piece.style.color = "red";
        cell.appendChild(piece);
    } else if (i === 6) {
        let piece = document.createElement("i");
        piece.className = "fas fa-chess-pawn fa-3x";
        cell.appendChild(piece);
    } else if (i === 0 && (j === 1 || j === 8)) {
        let piece = document.createElement("i");
        piece.className = "fas fa-chess-rook fa-3x";
        piece.style.color = "red";
        cell.appendChild(piece);
    } else if (i === 7 && (j === 1 || j === 8)) {
        let piece = document.createElement("i");
        piece.className = "fas fa-chess-rook fa-3x";
        cell.appendChild(piece);
    } else if (i === 0 && (j === 2 || j === 7)) {
        let piece = document.createElement("i");
        piece.className = "fas fa-chess-knight fa-3x";
        piece.style.color = "red";
        cell.appendChild(piece);
    } else if (i === 7 && (j === 2 || j === 7)) {
        let piece = document.createElement("i");
        piece.className = "fas fa-chess-knight fa-3x";
        cell.appendChild(piece);
    } else if (i === 0 && (j === 3 || j === 6)) {
        let piece = document.createElement("i");
        piece.className = "fas fa-chess-bishop fa-3x";
        piece.style.color = "red";
        cell.appendChild(piece);
    } else if (i === 7 && (j === 3 || j === 6)) {
        let piece = document.createElement("i");
        piece.className = "fas fa-chess-bishop fa-3x";
        cell.appendChild(piece);
    } else if (i === 0 && j === 4) {
        let piece = document.createElement("i");
        piece.className = "fas fa-chess-queen fa-3x";
        piece.style.color = "red";
        cell.appendChild(piece);
    } else if (i === 7 && j === 4) {
        let piece = document.createElement("i");
        piece.className = "fas fa-chess-queen fa-3x";
        cell.appendChild(piece);
    } else if (i === 0 && j === 5) {
        let piece = document.createElement("i");
        piece.className = "fas fa-chess-king fa-3x";
        piece.style.color = "red";
        cell.appendChild(piece);
    } else if (i === 7 && j === 5) {
        let piece = document.createElement("i");
        piece.className = "fas fa-chess-king fa-3x";
        cell.appendChild(piece);
    }
}





