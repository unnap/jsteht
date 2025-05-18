const trigger = document.querySelector('#trigger');
const target = document.querySelector('#target');
const picA = 'img/picA.png';
const picB = 'img/picB.png';

trigger.addEventListener('mouseover', ()=>target.src=picB);
trigger.addEventListener('mouseout', ()=>target.src=picA);