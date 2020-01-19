'use strict'

let setPage = document.getElementById('page1');
setPage.style.backgroundColor = 'black';
setPage.style.color = 'white';
let numberOfPages = 4;

function clicked(id) {
    let actualPage = document.getElementById(id)

    for (let i = 1; i <= numberOfPages; i++) {
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

function clickedArrow(id) {

    for (let i = 1; i <= numberOfPages; i++) {
        let actualPage = document.getElementById(`page${i}`);

        if (actualPage.style.backgroundColor === 'black' && id === 'right') {

            if (i === numberOfPages) {
                break;
            }

            let changePage = document.getElementById(`page${i + 1}`);

            actualPage.style.backgroundColor = 'white';
            actualPage.style.color = 'black';
            changePage.style.backgroundColor = 'black';
            changePage.style.color = 'white';

            break;

        } else if (actualPage.style.backgroundColor === 'black' && id === 'left') {

            if (i === 1) {
                break;
            }

            let changePage = document.getElementById(`page${i - 1}`);

            actualPage.style.backgroundColor = 'white';
            actualPage.style.color = 'black';
            changePage.style.backgroundColor = 'black';
            changePage.style.color = 'white';

            break;
        }

    }
}