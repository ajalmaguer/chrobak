 $(document).ready(function(){
 	var navHeight
 	if ($(".navbar-fixed").innerHeight()){
 		navHeight = $(".navbar-fixed").innerHeight() + 20
 	} else {
 		navHeight = $('nav').innerHeight()
 	}
 		
	$('.slider').slider({
		full_width: true,
		height: window.innerHeight - navHeight,
		indicators: false
	});

	$(".button-collapse").sideNav();
 });