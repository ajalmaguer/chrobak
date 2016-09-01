 $(document).ready(function(){
	var h = window.innerHeight - $('nav').innerHeight()

	$('.slider').slider({
		full_width: true,
		height: h,
		indicators: false
	});

	$(".button-collapse").sideNav();
 });