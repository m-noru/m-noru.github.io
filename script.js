jQuery('.menu-icon').on('click', function() {
  if(jQuery('.menu-container .menu').css('display') === 'block') {
    jQuery('.menu-container .menu').slideUp('1500');
  }else {
    jQuery('.menu-container .menu').slideDown('1500');
  }
});
