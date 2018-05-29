/******************************
*********** Wow JS ************
******************************/
wow = new WOW(
{
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                  }
                  )
wow.init();

/******************************
******* Scrolling JS **********
******************************/

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});

	/*Active class*/
	$(".navbar-nav.nav-item .nav-link").on("click", function(){
		$(".navbar-nav").find(".active").removeClass("active");
		$(this).addClass("active");
	});

	/*Scroll spy active element*/
	$('body').scrollspy({ target: '#myNavBar' });

	function changeNav() {
	// Get the section name from the navbar' now active URL
	var currentSection = $(".navbar-nav a.active").attr('href');

	if (currentSection == '#contact'){
		$(".nav-link").css('color', 'black'),
		$(".navbar .navbar-toggler").css('border-color', 'black'),
		/*$("navbar-toggler-icon").css('background-image', "url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,102,203, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E")"),*/
		$(".navbar-brand").css('color', 'black'),
		$(".navbar").css('background-color', '#F5F5F5');
	}
	else {
		$(".nav-link").css('color', 'white'),
		$(".navbar .navbar-toggler").css('border-color', 'white'),
		$(".navbar-brand").css('color', '#ffffff'),
		$('.navbar').css('background-color', '#252525');
	}
}

//Checks for activated section
$(window).on('activate.bs.scrollspy', changeNav);
$('.navnbar').ready(changeNav);

//Activates carousel
$('.carousel').carousel()

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
	$('.navbar-toggle:visible').click();
});

/*Resetting contact form on submit*/
$('gform').each(function(){
	this.reset();
});

/*Filtering elements - work section*/
var $container = $('.portfolioContainer .row');
$container.isotope({
	filter: '*',
	animationOptions: {
		duration: 750,
		easing: 'linear',
		queue: false
	}
});

$('.portfolioFilter a').click(function(){
	$('.portfolioFilter .current').removeClass('current');
	$(this).addClass('current');

	var selector = $(this).attr('data-filter');
	$container.isotope({
		filter: selector,
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});
	return false;
}); 
}); //end function


