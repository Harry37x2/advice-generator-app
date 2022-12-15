"use strict";
const button = document.querySelector('.button');
const advNumber = document.querySelector('.advice');
const advText = document.querySelector('.quote');
const adviceAPIurl = 'https://api.adviceslip.com/advice';

button.addEventListener('click', () => {
    fetch(adviceAPIurl, {cache: "no-cache"})
        .then((response) => response.json())
        .then((response) => {
            let data = response.slip;
            let dataNum = data.id;
            let dataText = data.advice;
        //set in DOM
        advNumber.innerHTML = `advice #${dataNum}`;
        advText.innerHTML = dataText;
        });
});