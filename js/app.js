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


document.querySelectorAll('.dropdownToggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(event) {
        event.preventDefault();
        
        const subMenu = this.nextElementSibling;
        const arrow = this.querySelector('.arrow');
        
        document.querySelectorAll('.sub-menu').forEach(function(menu) {
            if (menu !== subMenu) {
                menu.classList.remove('show');
                menu.previousElementSibling.querySelector('.arrow').classList.remove('rotate');
            }
        });
        
        if (subMenu.classList.contains('show')) {
            subMenu.classList.remove('show');
            arrow.classList.remove('rotate');
        } else {
            subMenu.classList.add('show');
            arrow.classList.add('rotate');
        }
    });
});


