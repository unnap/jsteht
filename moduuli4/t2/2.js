'use strict';

const kysely = document.querySelector('#kysely');
const haeButton = document.querySelector('#hae');
const tulos = document.querySelector('#tulos');
const apiTxt = 'https://api.tvmaze.com/search/shows?q=';



function submit(event){
  event.preventDefault();
  fetch(apiTxt+kysely.value)
      .then(vastaus => vastaus.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
}

haeButton.addEventListener('click', submit);
