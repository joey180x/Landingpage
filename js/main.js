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



$( "li" ).hover(
  function() {
      $(this).find("span").stop().animate({
      width:"100%",
      opacity:"1",
    }, 400, function () {
    })
  }, function() {
      $(this).find("span").stop().animate({
      width:"0%",
      opacity:"0",
    }, 400, function () {
    })
  }
);