const target = document.querySelector('#result');
const operation = document.querySelector('#operation');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const button = document.querySelector('#start');

function laskin(){
  console.log(operation.value);
  switch (operation.value){
    case 'add':
      target.innerText=parseInt(num1.value)+parseInt(num2.value);
      break;
    case 'sub':
      target.innerText=parseInt(num1.value)-parseInt(num2.value);
      break;
    case 'multi':
      target.innerText=parseInt(num1.value)*parseInt(num2.value);
      break;
    case 'div':
      target.innerText=parseInt(num1.value)/parseInt(num2.value);
  }
}

button.addEventListener('click', laskin);