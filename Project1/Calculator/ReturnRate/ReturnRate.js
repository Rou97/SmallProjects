'use strict'

function calculate(e) {
    e.preventDefault();
    let FV = document.getElementById("FV").value;
    let PV = document.getElementById("PV").value;
    let y = document.getElementById("y").value;
    let result = document.getElementById("result");

    let CAGR = (Math.pow((FV / PV), (1 / y)) - 1);
    CAGR *= 100;

    result.innerHTML = "Compound Annual Growth Rate: " + (CAGR.toFixed(2)) + "%";
}

function showInfo() {
    let card = document.getElementById('card');

    if (card.style.display === 'flex') {
        card.style.display = 'none';
    } else {
        card.style.display = 'flex';
    }
}