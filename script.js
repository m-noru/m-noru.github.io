jQuery('.menu-icon').on('click', function() {
  if(jQuery('.menu-container .menu').css('display') === 'block') {
    jQuery('.menu-container .menu').slideUp('1500');
  }else {
    jQuery('.menu-container .menu').slideDown('1500');
  }
});

$(window).scroll(function (){
   $('.fadeIn').each(function(){
       var elemPos = $(this).offset().top,
           scroll = $(window).scrollTop(),
           windowHeight = $(window).height();
         if (scroll > elemPos - windowHeight + 150){
             $(this).addClass('scrollIn');
           }
       });
   });
