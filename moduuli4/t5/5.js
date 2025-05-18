'use strict';

fetch('https://api.chucknorris.io/jokes/random')
    .then(value => value.json())
    .then(joke => console.log(`VITSI TÄSSÄ:\n\n${joke.value}`))
    .catch(error => console.error(error));