'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.querySelector('#target');

for(let s of students){
  const option = document.createElement('option');
  option.value = s.id;
  option.innerText = s.name;
  target.appendChild(option);
  console.log(s.name);
}