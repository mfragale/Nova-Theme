jQuery(function() {


	// Fullscreen Menu http://www.hongkiat.com/blog/jquery-sliding-navigation/ --------------------------------------------

	$(".hamburgerr").on("click", function (e) {
		e.preventDefault();
		$(".hamburger").toggleClass("is-active");
		$('#fullscreenmenu').toggleClass("is-active");
	});

	// Open and Close Fullscreen Menu by pressing esc
	$('body').keydown(function (e) {
		if (e.which == 27) {
			$(".hamburger").toggleClass("is-active");
			$('#fullscreenmenu').toggleClass("is-active");
		}
	});

	$('#myTab a').on('click', function (e) {
		e.preventDefault()
		$(this).tab('show')
	})



}); // jQuery
