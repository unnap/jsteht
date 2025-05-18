const target = document.querySelector('#target');
const content = ['First item', 'Second item', 'Third item'];

for(let txt of content){
  const li = document.createElement('li');
  li.innerText = txt;
  target.appendChild(li)
  console.log(txt);
}

target.classList.add('my-item');