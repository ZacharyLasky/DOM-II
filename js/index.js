const title = document.querySelector('.logo-heading');
title.addEventListener('mouseover', event => {
    title.style.color = 'red';
})

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('dblclick', event => {
        link.style.color = 'green';
    })    
})

const bus = document.querySelector('.bus1');
document.addEventListener('keydown', event => {
    bus.style.border = '10px solid pink';
})
document.addEventListener('keyup', event => {
    bus.style.border = '10px dashed red';
})

document.addEventListener('wheel', event => {
    bus.style.width = '50%';
    bus.style.height = '50%';
})

bus.addEventListener('drag', event => {
    bus.style.border = '20px solid purple';
})
const inp = document.querySelector('input');
inp.addEventListener('drop', event => {
    event.preventDefault();
})

window.addEventListener('load', (event) => {
    alert('page is fully loaded');
});

inp.addEventListener('focus', event => {
    inp.style.backgroundColor = 'orange';
})

const onScroll = function() {
    title.style.backgroundColor = 'purple';
}

const goPic = document.querySelector('.goPic')
window.addEventListener('scroll', onScroll);

const go = document.querySelector('.text-content > h2');
go.addEventListener('copy', event => {
    alert('copy!');
})

