'use strict'

function calculate(e) {
    e.preventDefault();
    let FV = document.getElementById("FV").value;
    let y = document.getElementById("y").value;
    let r = document.getElementById("r").value;
    let result = document.getElementById("result");

    console.log(FV);
    console.log(y);
    console.log(r);

    let PV = (FV / Math.pow((1 + (r / 100)), (y)));

    console.log(PV)

    result.innerHTML = "Present Value: " + PV.toFixed(2);

}
