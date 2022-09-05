let welcome = document.getElementById('welcome');
let mainpg = document.getElementById('mainpg');
let welcomeLogo = document.getElementById('welcome-logo');
let welcomeCircle = document.getElementById('welcome-circle');

 window.addEventListener('scroll', function(){
   var value = window.scrollY;

   welcome.style.top = value * 1 + 'px';
   welcomeLogo.style.left = value * 0.5 + 'px';
   welcomeLogo.style.top = value * 0.5 + 'px';
   welcomeCircle.style.top = value * 0.8 + 'px';
 });