/* BURGER MENU TOGGLE */
// $('.burger-icon-wrapper').click(function (event) {
//     event.preventDefault();
//     $('.burger-nav').toggleClass('show');
//     $(this).find('i').toggleClass(' fa-bars  fa-times-circle');
// });

$('.burger-icon').click(function (event) {
    event.preventDefault();

    $('.burger-icon').toggleClass('show');

    if ($('.burger-nav').hasClass('show')) {
        $('.burger-nav').removeClass('show');
    } else {
        $('.burger-nav').addClass('show');
    }
});
