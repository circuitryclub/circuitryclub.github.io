const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navigSub = document.getElementsByClassName('navig-sub')[0];
const closeButton = document.getElementById('button-enable');


toggleButton.addEventListener("click", () => {
    navigSub.classList.toggle('active');

    document.body.classList.add("stop-scrolling");
    document.getElementById("button-enable").style.display = "block";
    document.getElementById("button-disable").style.visibility = "hidden";
})

closeButton.addEventListener("click", () => {
    navigSub.classList.toggle('active');
    document.body.classList.remove("stop-scrolling");
    document.getElementById("button-enable").style.display = "none";
    document.getElementById("button-disable").style.visibility = "visible";
})
