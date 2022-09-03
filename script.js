let bg1 = document.getElementById("bg1");
let text1 = document.getElementById("text1");


 window.addEventListener('scroll', function()){
    var value = window.scroll;
    bg1.style.top = value + 'px';
 }