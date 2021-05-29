const burger = document.getElementById("burger-icon");
const navBar= document.getElementById("navbar");
burger.addEventListener("click",function() {
    document.querySelector(".bar1").classList.toggle("change");
    document.querySelector(".bar2").classList.toggle("change");
    document.querySelector(".bar3").classList.toggle("change");
    navBar.classList.toggle("change");
    burger.classList.toggle("change");
})
