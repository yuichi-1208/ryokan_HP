$(".que").on("click", function()
{
  $(this).next().slideToggle();
});

$(function(){
  $("#slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
  });
});

$('#js-buttonHamburger').click(function () {
  $('body').toggleClass('is-drawerActive');
  $('.sp').slideToggle();

  if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
  } else {
      $(this).attr('aria-expanded', false);
  }
});
new WOW().init();