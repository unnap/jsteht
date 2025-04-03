'use strict';

const tulosteet = document.getElementById('tuloste');
const otsikko = document.getElementById('otsikko');
const otsikkotxt = 'Tehtävä ';

//Tehtävä 1
function t1(){
  otsikko.innerHTML = otsikkotxt+1;

  console.log("Printtailen konsoliin!");
  tulosteet.innerHTML = 'Avaa konsoli';
}

//Tehtävä 2
function t2() {
  otsikko.innerHTML = otsikkotxt+2;

  const nimi = prompt('Anna nimi');
  tulosteet.innerHTML = 'Hauska tavata, '+nimi+'!';
}

//Tehtävä 3
function t3() {
  otsikko.innerHTML = otsikkotxt+3;

  const num1 = parseInt(prompt('Anna eka numero'));
  const num2 = parseInt(prompt('Anna toka numero'));
  const num3 = parseInt(prompt('Anna viimeinen numero'));
  const summa = num1+num2+num3;
  const tulo = num1*num2*num3;
  const keskimaara = summa/3;
  tulosteet.innerHTML = 'Summa: '+summa+'<br>' +
                        'Tulo: '+tulo+'<br>' +
                        'Keskimäärä: '+Math.round(keskimaara);
}

//Tehtävä 4
function t4(){
  otsikko.innerHTML = otsikkotxt+4;

  const arpa = Math.floor(Math.random()*4)+1;
  const nimi = prompt('Mikä on nimesi?');
  let tupa;
  switch (arpa) {
    case 1:
      tupa = 'Punainen';
      break;
    case 2:
      tupa = 'Sininen';
      break;
    case 3:
      tupa = 'Keltainen';
      break;
    case 4:
      tupa = 'Vihreä';
  }
  tulosteet.innerHTML = nimi+', olet '+tupa;
}

//Tehtävä 5
function t5(){
  otsikko.innerHTML = otsikkotxt+5;

  const vuosi = parseInt(prompt('Anna vuosi'));
  if((vuosi%4===0 && vuosi%100!==0) || (vuosi%4===0 && vuosi%400===0)) {
    tulosteet.innerHTML = vuosi + ' on karkausvuosi.';
  } else {
    tulosteet.innerHTML = vuosi + ' ei ole karkausvuosi.';
  }
}

//Tehtävä 6
function t6() {
  otsikko.innerHTML = otsikkotxt+6;

  const kysymys = confirm('Lasketaanko neliöjuuri');
  if (kysymys) {
    const num = parseInt(prompt('Anna numero'));
    if(num>=0) {
      tulosteet.innerHTML = 'Numeron ' + num + ' neliöjuuri on ' +
          Math.sqrt(num)+'.';
    } else {
      tulosteet.innerHTML = 'Negatiivisen luvun neliöjuurta ei voi määritellä.';
    }
  } else {
    tulosteet.innerHTML = 'Neliöjuurta ei laskettu.';
  }
}

//Tehtävä 7
function t7(){
  otsikko.innerHTML = otsikkotxt+7;

  const heitot = parseInt(prompt('Kuinka monta kertaa haluat heittää noppaa?'));
  let summa = 0;
  let teksti = `Heitit noppaa ${heitot} kertaa.<br>Heittojen tulokset:`;

  for (let i=0; i<heitot; i++){
    const heitto = Math.floor(Math.random()*6)+1;
    summa+=heitto;
    teksti+= ` ${heitto}`;
  }
  tulosteet.innerHTML = `${teksti}<br>Tulosten summa: ${summa}`;
}

//Tehtävä 8
function t8(){
  otsikko.innerHTML = otsikkotxt+8;

  let vList = '<ul>';
  const v1 = parseInt(prompt('Anna vuosi'));
  const v2 = parseInt(prompt('Anna toinen vuosi'));
  for(let v=v1; v<=v2; v++){
    if((v%4===0 && v%100!==0) || (v%4===0 && v%400===0)) {
      vList+= '<li>'+v+'</li>';
    }
  }
  vList+= '</ul>';
  tulosteet.innerHTML = 'Karkausvuodet väliltä '+v1+'-'+v2+':<br>'+vList;
}

//Tehtävä 9
function t9(){
  otsikko.innerHTML = otsikkotxt+9;

  const num = parseInt(prompt('Anna numero'));

  for (let i= 0; i<num; i++) {
    if(num%i===0 && i!==num && i!==1 && num!==1){
      tulosteet.innerHTML = `${num} ei ole alkuluku`;
      return;
    }
  }
    tulosteet.innerHTML = `${num} on alkuluku`;
}

//Tehtävä 10
function t10() {
  otsikko.innerHTML = otsikkotxt+10;

  const dice = parseInt(prompt('Anna noppien lukumäärä'));
  const targetSum = parseInt(prompt('Anna tavoite summa'));
  const repeats = 10000;
  let sum = 0;
  let hits = 0;

  //throw die
  for(let i = 0; i<repeats; i++) {
    for(let i = 0; i<dice; i++){
      sum+= Math.floor(Math.random()*6)+1;
    }
    if (sum===targetSum) {
      hits++;
    }
    sum=0;
  }

  const prosentti = hits/repeats*100;
  tulosteet.innerHTML = `Todennäköisyys että ${dice} noppaa saavat summaksi ${targetSum} on noin ${prosentti.toFixed(2)}%`;
}