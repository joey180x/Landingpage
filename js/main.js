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


// back to top function
$(window).scroll(function() {
  var backToTopButton = $("#back-to-top");
  if ( $(window).scrollTop() >= 300 ) {
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


 $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 