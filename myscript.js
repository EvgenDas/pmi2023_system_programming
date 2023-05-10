$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .topnav').toggleClass('active');
    });

$('.header, .intro, .contacts, .about, .magazine, .partners').click(function(event) {
    $('.header_burger, .topnav').removeClass('active');
    });
});


let btn = document.querySelector("button");

btn.addEventListener("click", active);

function active() {
  btn.classList.toggle("is_active");
}