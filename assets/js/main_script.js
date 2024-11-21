(function($) {
	"use strict";

	// submenu dropdown toggler
	if ($('.main-menu li.menu-item-has-children ul').length) {
		$('.main-menu li.menu-item-has-children').append(
			'<div class="dropdown-btn"></div>'
		);

		// disable dropdown parent link
		$('.main-menu .top-menu li.menu-item-has-children > a').on('click', function(e) {
			e.preventDefault();
		});
	}

	// mobile nav
	if ($('.mobile-menu').length) {
		var mobileMenuContent = $('.top-menu').html();
		$('.mobile-menu .top-menu').append(mobileMenuContent);

		// dropdown button
		$('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function() {
			$(this).toggleClass('open').prev('ul').slideToggle(500);
			$(this).closest('li').toggleClass('open');
		});

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

	// Initialize Swiper
	const swiper = new Swiper('.swiper', {
		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,
		spaceBetween: 100,
		breakpoints: {
			576: {
				slidesPerView: 2
			}
		},
		pagination: {
			el: '.swiper-pagination'
		}
	});

})(jQuery);