const slider = document.querySelector("#slider");
const sol = document.querySelector("#sol");
const sag = document.querySelector("#sag");
let say = 1;

function yenileSlider() {
    slider.style.background = `url('/img/slider${say}.jpeg') 20% 50%/cover`;
}

function sagbtn() {
    say++;
    if (say > 3) say = 1; 
    yenileSlider();
}

function solbtn() {
    say--;
    if (say < 1) say = 3; 
    yenileSlider();
}

setInterval(sagbtn, 2000);

function toggleMenu() {
    document.querySelector('.hamburger').classList.toggle('open');
    document.querySelector('.navigation').classList.toggle('active');
}


yenileSlider();







