(function($) {
	"use strict";

	// mobile nav
	if ($('.mobile-menu').length) {
		var mobileMenuContent = $('.top-menu').html();
		$('.mobile-menu .top-menu').append(mobileMenuContent);

		// Menu Toggle Button
		$('.mobile-nav-toggler').on('click', function() {
			$(this).toggleClass('is-active');
			$('body').toggleClass('mobile-menu-visible');
		});
	}

	// sticky navigation scroll listener
	var lastScrollTop = 0; var num = 20;

	$(window).bind('scroll', function() {
		var st = window.pageYOffset || document.documentElement.scrollTop;
		if ($(window).scrollTop() > num) {
			$('.sticky-top').addClass('sticky')
		} else {
			$('.sticky-top').removeClass('sticky');
		}
		if (st > lastScrollTop && $('.sticky-top').hasClass('sticky')) {
			$('.sticky-top').removeClass('show');
		} else {
			$('.sticky-top').addClass('show');
		}
		lastScrollTop = st <= 0 ? 0 : st;
	});

})(jQuery);