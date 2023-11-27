'use strict'

const allImg = document.querySelectorAll('img');
const allLi = document.querySelectorAll('li');

allImg.forEach(elem => {
    console.log(elem.attributes.src.value);
})

allImg.forEach(elem => {
    console.log(elem.attributes.alt.value);
})

allLi.forEach(elem => {
    console.log(elem.className);
})

allImg.forEach(elem => {
    let c = elem.attributes.alt.value
    elem.setAttribute('title', c)
})