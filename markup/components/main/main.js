$(document).ready(function(){

  var $ildSlider = $('.ild-slides')

  $ildSlider.owlCarousel({
    items:1,
    loop: true,
    nav: true,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
  })

})