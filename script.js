let welcome = document.getElementById('welcome');


 window.addEventListener('scroll', function(){
    var value = window.scrollY;

    welcome.style.top = value * 1 + 'px';
 });