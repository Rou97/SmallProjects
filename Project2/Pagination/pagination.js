'use strict'

let setPage = document.getElementById('page1');
setPage.style.backgroundColor = 'black';
setPage.style.color = 'white';

function clicked(id) {
    let actualPage = document.getElementById(id)

    for (let i = 1; i < 5; i++) {
        let changePage = document.getElementById(`page${i}`)
        changePage.style.backgroundColor = 'white';
        changePage.style.color = 'black';
    }

    if (actualPage.style.backgroundColor === 'white' || actualPage.style.backgroundColor === '') {
        actualPage.style.backgroundColor = 'black';
        actualPage.style.color = 'white';
    } else {
        actualPage.style.backgroundColor = 'white';
        actualPage.style.color = 'black';
    }
}