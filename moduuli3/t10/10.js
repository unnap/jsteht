const target = document.querySelector('#target');
const firstname = document.querySelector('input[name="firstname"]');
const lastname = document.querySelector('input[name="lastname"]');

function submit(event){
  target.innerText = firstname.value + ' ' + lastname.value;
  event.preventDefault();
}

document.querySelector('#source').addEventListener('submit',submit);