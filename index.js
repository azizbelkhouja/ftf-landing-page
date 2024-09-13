


const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add('show-nav');
});

close.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove('show-nav');
});
