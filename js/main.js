//parallax code

$(window).ready( function() { 

  $(window).stellar();

});

//Smooth Scrolling

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 3000);
    return false;
});

$(window).scroll(function() {
  var backToTopButton = $("#back-to-top");
  if ( $(window).scrollTop() >= 200 ) {
    backToTopButton.css("bottom", "50px"); 
  } else {
    backToTopButton.attr('style', '');
  }
  backToTopButton.click(function () {
    $('body,html').stop().animate({
      scrollTop: 0
    }, "slow");
  });
  return false;
});