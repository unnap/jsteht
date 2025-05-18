'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.querySelector('#target');
let txt = '';

for(let n of names){
  txt+=`<li>${n}</li>`;
  console.log(n);
}

target.innerHTML = txt;