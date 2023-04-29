$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .topnav').toggleClass('active');
    });

$('.header, .intro').click(function(event) {
    $('.header_burger, .topnav').removeClass('active');
    });
});
 