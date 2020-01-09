'use strict'

function calculate(e) {
    e.preventDefault();
    let p = document.getElementById("p").value;
    let y = document.getElementById("y").value;
    let r = document.getElementById("r").value;
    let result = document.getElementById("result");

    let interest = p * (r / 100) * y;

    result.innerHTML = "The total amount is " + (interest + parseInt(p));
    result.innerHTML += "<br> The interest is " + interest;
}