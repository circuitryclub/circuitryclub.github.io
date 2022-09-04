let bg1 = document.getElementById('bg1');
let text1 = document.getElementById('text1');


 window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg1.style.top = value * 0.5 + 'px';
    text1.style.top = value * 0.5 + 'px';
 });