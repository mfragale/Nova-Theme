jQuery(function () {

	// Fullscreen Menu http://www.hongkiat.com/blog/jquery-sliding-navigation/
	$(".hamburger").on("click", function (e) {
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

	// Locais tabs
	var initialWindowScrollValue;

	// Show tab that if it is in the URL
	if (location.hash) {
		const hash = location.href.split("#");
		$('.nav a[href="#' + hash[1] + '"]').tab("show");
	}

	var initialWindowScrollValue;
	// Change the URL when the tab is selected
	$('a[data-bs-toggle="pill"]').on("click", function () {
		let newUrl;
		const hash = $(this).attr("href");
		if (hash == "#noLocalSelected") {
			newUrl = location.href.split("#")[0];
		} else {
			initialWindowScrollValue = $(window).scrollTop();
			newUrl = location.href.split("#")[0] + hash;

			$("html, body").animate({
				scrollTop: 0
			}, "fast");
		}

		history.replaceState(null, null, newUrl);
	});

	// Set the tab-pane height to the same as the body on mobile screens
	$(window).resize(function () {
		if ($(window).width() < 768) {
			var bodyheight = $('body').height();
			$(".tab-pane").height(bodyheight);
		} else {
			$(".tab-pane").height('auto')
		}
	}).resize();

	// Close local tab
	$('.closeLocal').on("click", function () {
		$("html, body").animate({
			scrollTop: initialWindowScrollValue
		}, 0);
		$('.tab-pane').removeClass('active');
		$('a[data-bs-toggle="pill"]').removeClass('active');
	});





	$('.misha_loadmore').click(function () {

		var button = $(this),
			data = {
				'action': 'loadmore',
				'query': misha_loadmore_params.posts, // that's how we get params from wp_localize_script() function
				'page': misha_loadmore_params.current_page
			};

		$.ajax({ // you can also use $.post here
			url: misha_loadmore_params.ajaxurl, // AJAX handler
			data: data,
			type: 'POST',
			beforeSend: function (xhr) {
				button.text('Loading...'); // change the button text, you can also add a preloader image
			},
			success: function (data) {
				if (data) {
					//button.text('More posts').prev().before(data); // insert new posts
					$("#all_my_posts").append(data);
					misha_loadmore_params.current_page++;

					if (misha_loadmore_params.current_page == misha_loadmore_params.max_page)
						button.remove(); // if last page, remove the button

					// you can also fire the "post-load" event here if you use a plugin that requires it
					// $( document.body ).trigger( 'post-load' );
				} else {
					button.remove(); // if no data, remove the button as well
				}
			}
		});
	});








}); // jQuery
