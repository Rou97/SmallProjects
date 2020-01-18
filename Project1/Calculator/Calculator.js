'use strict'

function showInfo() {
    let card = document.getElementById('card');
    let arrow1 = document.getElementById('arrow1')
    let arrow2 = document.getElementById('arrow2')

    if (card.style.display === 'flex') {
        card.style.display = 'none';
        arrow1.className = "fas fa-arrow-right";
        arrow2.className = "fas fa-arrow-left";
    } else {
        card.style.display = 'flex';
        arrow1.className = "fas fa-arrow-down";
        arrow2.className = "fas fa-arrow-down";
    }
}