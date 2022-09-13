let welcome = document.getElementById('welcome');
let mainpg = document.getElementById('mainpg');
let welcomeLogo = document.getElementById('welcome-logo');
let welcomeCircle = document.getElementById('welcome-circle');
//ian
 window.addEventListener('scroll', function(){
   var value = window.scrollY;

   welcome.style.top = value * 1 + 'px';
   welcomeLogo.style.left = value * 0.5 + 'px';
   welcomeLogo.style.top = value * 0.5 + 'px';
   welcomeCircle.style.top = value * 0.8 + 'px';
 });

 // Set the date we're counting down to
var countDownDate = new Date("Sept 16, 2022 12:46:00").getTime();

// Update the count down every 1 second
var count = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("count-down").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(count);
    document.getElementById("demo").innerHTML = "Thanks for attending our Info Meeting! Hope to see you at our next club meet :D";
  }
}, 1000);