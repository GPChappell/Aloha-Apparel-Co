/*****************************
 **NAVIGATION
 *****************************/

//PREVENT FIXED NAVBAR OVERLAPPING OTHER CONTENT
//Add top margin to second block equal to navbar height.
var navHeight = $('nav').outerHeight();
$('header.hero-banner').css('margin-top', navHeight);

//PREVENT FIXED NAVBAR OVERLAPPING OTHER CONTENT
//Detect navbar height change and update top margin on second block to match.
$( window ).resize(function() {
  if( $('nav').outerHeight() != navHeight ) {
    navHeight = $('nav').css('height');
    $('header.hero-banner').css('margin-top', navHeight);
  }
});


//PRODUCT CAROUSEL
//jQuery plugin: Flickity (https://flickity.metafizzy.co/)
$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  autoPlay: true,
  prevNextButtons: false,
});

//SMOOTH SCROLLING FOR HASH LINKS
//Source: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - navHeight
      }, 800
      // , function(){
    
        // Add hash (#) to URL when done scrolling (default click behavior)
      //   window.location.hash = hash;
      // }
    );
    } // End if
  });
});

//EMAIL SYNTAX VALIDATION
//https://stackoverflow.com/questions/2507030/email-validation-using-jquery
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

//NEWSLETTER FORM
//Email Submit
$('#email-signup').on('submit', function(event) {
  event.preventDefault(event);
  let submittedEmail = $('#email').val();
  
  if( submittedEmail.length === 0 )
  {
    alert('Please enter an email address');
    return;
  }

  isEmail( submittedEmail ) ? 
    alert('Thank you for subscribing!') : 
    alert('Please check your email address and try again.');
});



var shoppingCartCount = 0;

// Add to Cart Functionality
$(".add-to-cart").on("click", function() {
  let shoppingCartBubble = $(".shopping-cart-count-bubble");

  /*Show cart counter if hidden*/
  if( shoppingCartBubble.is(':hidden') ) {
    shoppingCartBubble.show();
    shoppingCartBubble.css("display", "flex");
  }
  
  /*Increment cart counter*/
  shoppingCartBubble.text( String(++shoppingCartCount) );

});
