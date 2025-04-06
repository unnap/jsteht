'use strict';

const tulosteet = document.getElementById('tuloste');
const otsikko = document.getElementById('otsikko');
const otsikkotxt = 'Tehtävä ';
const separator = '-----------';

//Tehtävä 1
function t1(){
  otsikko.innerHTML = otsikkotxt+1;

  const numerot = [];
  alert('Syötä viisi numeroa');

  for (let i=0;i<5;i++){
    const numero = parseInt(prompt(`Syötä numero ${i+1}`));
    numerot.push(numero);
  }
  console.log('\nTehtävä 1\n'+separator+'\nNumerot käänteisessä järjestyksessä');
  for (let i=4; i>=0; i--) {
    console.log(numerot[i]);
  }
  tulosteet.innerHTML = 'Avaa konsoli.';
}

//Tehtävä 2
function t2() {
  otsikko.innerHTML = otsikkotxt+2;

  const maara = parseInt(prompt('Kuinka monta osallistujaa?'));
  const osallistujat = [];
  let teksti = '<ol>';
  for(let i=0;i<maara;i++){
    const osallistuja = prompt(`Anna osallistujalle ${i+1} nimi`);
    osallistujat.push(osallistuja);
  }

  osallistujat.sort();
  for(let i=0;i<osallistujat.length;i++){
    teksti+='<li>'+osallistujat[i]+'</li>';
  }
  teksti+= '</ol>';
  tulosteet.innerHTML = teksti;
}

//Tehtävä 3
function t3() {
  otsikko.innerHTML = otsikkotxt+3;

  const maara = 6;
  const koirat = [];
  let teksti = '<ul>';

  alert('Nimeä 6 koiraa!');
  for(let i=0;i<maara;i++){
    const koiruli = prompt(`Anna koirulle ${i+1} nimi`);
    koirat.push(koiruli);
  }

  koirat.sort().reverse();

  for(let i=0;i<koirat.length;i++){
    teksti+='<li>'+koirat[i]+'</li>';
  }
  teksti+='</ul>';

  tulosteet.innerHTML = teksti;
}

//Tehtävä 4
function t4(){
  otsikko.innerHTML = otsikkotxt+4;

  const numerot = [];
  let numero = parseInt(prompt('Syötä numero'));
  while (numero!==0){
    numerot.push(numero);
    numero = parseInt(prompt('Syötä numero\nSyötä 0 lopettaaksesi'));
  }

  numerot.sort((a,b)=>b-a);
  console.log('\nTehtävä 4\n'+separator+'\nNumerot suurimmasta pienimpään');
  for(let i=0;i<numerot.length;i++){
    console.log(numerot[i]);
  }


  tulosteet.innerHTML = 'Avaa konsoli.';
}

//Tehtävä 5
function t5(){
  otsikko.innerHTML = otsikkotxt+5;

  const numerot = [];
  let numero = 0;
  let booli = true;

  alert('Syötä sama numero kaksi kertaa paetaksesi');
  while(booli){
    numero = parseInt(prompt('Syötä numero'));

    for(let i=0;i<numerot.length;i++){
      if (numero===numerot[i]){
        alert('Numero on jo listalla!');
        booli = false;
      }
    }
    if(booli){
      numerot.push(numero);
    }
  }
  numerot.sort((a,b)=>a-b);

  console.log('\nTehtävä 5\n'+separator+'\nNumerot pienimmästä suurimpaan');
  for(let i=0;i<numerot.length;i++){
    console.log(numerot[i]);
  }

  tulosteet.innerHTML = 'Avaa konsoli.';
}

//Tehtävä 6
function roll1(){
  const noppa = Math.floor(Math.random()*6)+1;
  return noppa;
}

function t6() {
  otsikko.innerHTML = otsikkotxt+6;

  let noppa = roll1();
  let teksti = '<ul><li>'+noppa+'</li>';

  while(noppa!==6){
    noppa = roll1();
    teksti+='<li>'+noppa+'</li>';
  }
  teksti+='</ul>';

  tulosteet.innerHTML = teksti;
}

//Tehtävä 7
function roll2(sides){
  const noppa = Math.floor(Math.random()*sides)+1;
  return noppa;
}

function t7(){
  otsikko.innerHTML = otsikkotxt+7;

  const sides = parseInt(prompt('Nopan sivujen lukumäärä'));
  let noppa = roll2(sides);
  let teksti = '<ul><li>'+noppa+'</li>';

  while(noppa!==sides){
    noppa = roll2(sides);
    teksti+='<li>'+noppa+'</li>';
  }
  teksti+='</ul>';

  tulosteet.innerHTML = teksti;
}

//Tehtävä 8
function concat(lista){
  let text = '';
  for(let i=0;i<lista.length;i++){
    text+=lista[i];
  }
  return text;
}

function t8(){
  otsikko.innerHTML = otsikkotxt+8;

  const lista = ['kissa','koira','siili','sammakko'];
  const listaConcat = concat(lista);

  tulosteet.innerHTML = listaConcat;
}

//Tehtävä 9
function even(lista){
  const evened = [];
  for(let i=0;i<lista.length;i++){
    if(lista[i]%2===0){
      evened.push(lista[i]);
    }
  }
  return evened;
}

function t9(){
  otsikko.innerHTML = otsikkotxt+9;

  const lista1 = [2,7,4,13,70];
  const lista2 = even(lista1);
  console.log('\nTehtävä 9\n'+separator+'\nAlkuperäinen numerolista');
  console.log(lista1);
  console.log('Siivottu numerolista');
  console.log(lista2);
  
  tulosteet.innerHTML = 'Avaa konsoli';
}

//Tehtävä 10
function t10() {
  otsikko.innerHTML = otsikkotxt+10;

  const ehdokasLkm = parseInt(prompt('Syötä ehdokkaiden lukumäärä'));
  const ehdokkaat = [];
  let tyhja = 0;
  let akuAnkka = 0;

  for(let i=0;i<ehdokasLkm;i++){
    ehdokkaat.push({nimi:prompt(`Anna ehdokkaan ${i+1} nimi`), aanet:0});
  }

  const aanestajaLkm = parseInt(prompt('Syötä äänestäjien lukumäärä'));

  for(let i=0;i<aanestajaLkm;i++){
    const aani = prompt(`Äänestäjä numero ${i+1}\nSyötä ehdokkaan nimi`);
    if(aani===''){
      tyhja++;
    } else {
      let notFound = true;
      for(let i in ehdokkaat){
        if(ehdokkaat[i].nimi.localeCompare(aani, undefined,{sensitivity:'accent'})===0) {
          notFound = false;
          ehdokkaat[i].aanet++;
          break;
        }
      }
      if(notFound){
        akuAnkka++;
      }
    }
  }

  ehdokkaat.sort((a,b)=>b.aanet-a.aanet);
  let teksti1 = `${ehdokkaat[0].nimi} voittaa äänillä ${ehdokkaat[0].aanet}.<br><br>Tulokset:`;
  let teksti2 = `${ehdokkaat[0].nimi} voittaa äänillä ${ehdokkaat[0].aanet}.\n\nTulokset:`;
  for(let i in ehdokkaat){
    teksti1+= '<br>'+ehdokkaat[i].nimi+': '+ehdokkaat[i].aanet;
    teksti2+= '\n'+ehdokkaat[i].nimi+': '+ehdokkaat[i].aanet;
  }
  teksti1+='<br><br>Tyhjiä: '+tyhja+'<br>Ei löytynyt listasta: '+akuAnkka;
  teksti2+='\n\nTyhjiä: '+tyhja+'\nEi löytynyt listasta: '+akuAnkka;

  tulosteet.innerHTML = teksti1;
  console.log('\nTehtävä 10\n'+separator+'\n');
  console.log(teksti2);
}