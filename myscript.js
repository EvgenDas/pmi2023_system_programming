$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .topnav').toggleClass('active');
    });

$('.header, .intro, .contacts, .about, .magazine, .partners').click(function(event) {
    $('.header_burger, .topnav').removeClass('active');
    });
});



document.addEventListener('submit', function () {
    $('#button').toggleClass("is_active");
    $('#button').prop('disabled', true);
  })



$('.topnav a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 550,   
        easing: "linear" 
    });

    return false;
});



$(document).ready(function(){
    $("#form").submit(function() {
        var form_data = $(this).serialize(); 
        
        $.ajax({
            type: "POST",
            url: "telegram.php",
            data: form_data,
            success: swal({
                title: "Спасибо за заявку",
                icon: "success",
                timer: 2000
            })
            

        });

        event.preventDefault();
    });
});
