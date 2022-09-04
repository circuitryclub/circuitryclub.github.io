let bg1 = document.getElementById('bg1');
let welcome = document.getElementById('welcome');


 window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg1.style.top = value * 0.5 + 'px';
    welcome.style.top = value * 0.5 + 'px';
 });