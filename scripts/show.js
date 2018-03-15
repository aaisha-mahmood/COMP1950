// Responsive Menu - Dropdown
const body = document.body;
const hamburger = document.getElementById('menu');

hamburger.addEventListener('click', openMenu);

function openMenu(){
    body.classList.toggle('show');
}