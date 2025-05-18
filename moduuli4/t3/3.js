'use strict';

const kysely = document.querySelector('#kysely');
const haeButton = document.querySelector('#hae');
const tulos = document.querySelector('#tulos');
const apiTxt = 'https://api.tvmaze.com/search/shows?q=';



async function submit(event){
  event.preventDefault();
  tulos.innerHTML = '';
  try {
    const vastaus = await fetch(apiTxt+kysely.value.toLowerCase())
    if(!vastaus.ok){
      throw new Error('ei saatu fetchattua tietoja');
    }
    const tiedot = await vastaus.json();
    //tulos.innerText = tiedot[0].show.name;
    ohjelmat(tiedot);
  }
  catch (error) {
    console.error(error);
  }
}

function ohjelmat(lista){
  console.log(lista);
  for(let l of lista){
    console.log(l.show.name);

    const article = document.createElement('article');

    const h2 = document.createElement('h2');
    h2.innerText = l.show.name;
    article.appendChild(h2);

    const a = document.createElement('a');
    a.href = l.show.url;
    a.target = '_blank';
    a.innerText = l.show.url;
    article.appendChild(a);

    const img = document.createElement('img');
    img.src = l.show.image?.medium;
    img.alt = l.show.name;
    article.appendChild(img);

    const summaryDiv = document.createElement('div');
    summaryDiv.innerHTML = l.show.summary;
    article.appendChild(summaryDiv);

    tulos.appendChild(article);
  }
}

haeButton.addEventListener('click', submit);
