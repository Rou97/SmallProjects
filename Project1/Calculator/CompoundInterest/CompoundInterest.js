'use strict'

function calculate(e) {
    e.preventDefault();
    let p = document.getElementById("p").value;
    //let c = document.getElementById("c").value;
    let y = document.getElementById("y").value;
    let r = document.getElementById("r").value;
    let n = document.getElementById("n").value;
    let result = document.getElementById("result");

    let FV = (p * Math.pow((1 + (r / 100) / n), (y * n)));

    result.innerHTML = "The total amount is " + FV.toFixed(2);
    result.innerHTML += "<br> The interest is " + (FV.toFixed(2) - p).toFixed(2);

}