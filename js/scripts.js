// Last Revised 12th August 2013

$(document).ready(function() {
    console.log( "Ready!" );
	
	//Dropdown menu animation
	$('#mobile-dropdown').click(function() {
		$('#dropdown-list').css('opacity', 0).slideDown('slow').animate({opacity: 1 }, {queue:false, duration:'slow' });
	});
	
	//SlideUp menu animaton
	$('#close').click(function(e) {
		$('#dropdown-list').css('opacity', 1).slideUp('fast').animate({opacity: 0 }, {queue:false, duration:'fast' });
		e.preventDefault();
	});
	
	//Hide Dropdown menu if window is resized larger or equal to 917px
	$(window).resize(function(){
		     if($(this).width() >= 917){
				 $('#dropdown-list').css('display', 'none');
			 }
	});
	
	//Slider init if window width greater than or equal 681px
	if($(window).width() >= 681){
		$( '#cbp-fwslider' ).cbpFWSlider();
	}

});

/* -- EOF -- */