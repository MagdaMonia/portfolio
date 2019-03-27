document.addEventListener('DOMContentLoaded', function () {

    // --- HAMBURGER ---

    let btnMenuOn = document.querySelector('.btn-menu');
    let btnMenuOff = document.querySelector('.btn-close');
    let menu = document.querySelector('.top--mobile');
    btnMenuOn.addEventListener('click', function () {
        menu.classList.add('top--mobile-show')
    });
    btnMenuOff.addEventListener('click', function () {
        menu.classList.remove('top--mobile-show');
    });
});