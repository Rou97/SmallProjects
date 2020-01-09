'use strict'

function calculate(e) {
    e.preventDefault();
    let FV = document.getElementById("FV").value;
    let y = document.getElementById("y").value;
    let r = document.getElementById("r").value;
    let result = document.getElementById("result");

    let PV = (FV / Math.pow((1 + (r / 100)), (y)));

    result.innerHTML = "Present Value: " + PV.toFixed(2);
}