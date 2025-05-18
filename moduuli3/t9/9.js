const target = document.querySelector('#result');
const calculation = document.querySelector('#calculation');
//const num1 = document.querySelector('#num1');
//const num2 = document.querySelector('#num2');
const button = document.querySelector('#start');

function laskin(){
  let tulos = 0;
  const cv = calculation.value;
  const plus = '+';
  const minus = '-';
  const kerto = '*';
  const jako = '/';
  const jono = [];
  const jono2 = [];
  let check = 0;
  let luku = '';

  let cString = cv.replace(/\s/g, '');
  console.log(isNaN(cString[0]));
  console.log(cString);
  for(let l of cString){
    //console.log(l);
    jono.push(l);
  }
  console.log(jono);

  for(let i=0;i<jono.length;i++){

    if(!isNaN(jono[i])){
      luku+=jono[i];
      //console.log('HEI',jono[i], luku);

      if(i===jono.length-1){
        jono2.push(parseInt(luku));
      }

    } else {
      jono2.push(parseInt(luku));
      jono2.push(jono[i]);
      //console.log('PUSH');
      luku='';
    }
  }

  const jono3 = [];

  for(let i=0;i<jono2.length;i++){
    if(jono2[i]===kerto || jono2[i]===jako){
      switch(jono2[i]){
        case kerto:
          jono2.splice(i-1,3,jono2[i-1]*jono2[i+1]);
          break;
        case jako:
          jono2.splice(i-1,3,jono2[i-1]/jono2[i+1]);
      }
    }
  }
  tulos = jono2[0];
  console.log('ekatulos',tulos);
  for(let i=1;i<jono2.length;i++){
    if(jono2[i]===plus || jono2[i]===minus){
      switch(jono2[i]){
        case plus:
          tulos+=jono2[i+1];
          break;
        case minus:
          tulos-=jono2[i+1];
      }
    }
  }

  console.log(jono2);
  target.innerText=tulos;
}



button.addEventListener('click', laskin);