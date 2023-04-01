document.addEventListener('DOMContentLoaded', function() {

    // burger

    let burger = document.querySelector('.burger');
    let mobileMenu = document.querySelector('.mobile-menu-wrapper');
    let overlay = document.querySelector('.menu-overlay');
    let body = document.querySelector('body');

    burger.addEventListener('click',function(){
        overlay.classList.add('active');
        mobileMenu.classList.add('active'); 
        body.style.overflow = 'hidden';
        body.style.left = '250px';
    })


    overlay.addEventListener('click', function(){
        overlay.classList.remove('active');
        mobileMenu.classList.remove('active'); 
        body.style.overflow = 'visible';
        body.style.left = '0';
    })
})