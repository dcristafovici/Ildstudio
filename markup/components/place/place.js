$(document).ready(function(){

  $('.place-down').on('click',function(){

      $('html,body').animate({
          scrollTop: $("main.main").offset().top},
          'slow');

  })

})