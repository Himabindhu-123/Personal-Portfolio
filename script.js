function toggleMenu(){
document.getElementById("navLinks").classList.toggle("show");
}

function toggleDark(){
document.body.classList.toggle("light-mode");
}

/* TYPING EFFECT */

var typed = new Typed(".typing",{

strings:["CSE Student","Tech Enthusiast"],

typeSpeed:60,
backSpeed:40,
loop:true

});