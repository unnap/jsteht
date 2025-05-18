'use strict';

const kysely = document.querySelector('#kysely');
const haeButton = document.querySelector('#hae');
const tulos = document.querySelector('#tulos');
const apiTxt = 'https://api.chucknorris.io/jokes/search?query=';
const gudetama = document.querySelector('#gudetama');

//Joo, tähän voisi lisätä tyyliä että vitsit eivät olisi sikinsokin ympäri sivua
//... mutta minusta sellainen härö ulkoasu sopii todella hyvin huonoille vitseille

function submit(event){
  event.preventDefault();
  gudetama.style.display = 'none';
  tulos.innerHTML = '';
  fetch(apiTxt+kysely.value)
      .then(value => value.json())
      .then(jokes => listJokes(jokes))
      .catch(error => console.error(error));
}

function listJokes(jokes){
  console.log(jokes);
  const jokesNumber = document.createElement('h2');
  jokesNumber.innerText = `Vitsejä löydetty ${jokes.total} kappaletta`;
  tulos.appendChild(jokesNumber);

  for(let joke of jokes.result){
    const article = document.createElement('article');

    const p = document.createElement('p');
    p.innerText = joke.value;
    article.appendChild(p);

    tulos.appendChild(article);
  }
}

haeButton.addEventListener('click', submit);
