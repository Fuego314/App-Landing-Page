$(function() {

	// Init animsition
  $('.animsition').animsition({
    inClass: 'fade-in',
    inDuration: 1500,
    loading: false
  });
	AOS.init();

	let open = false;
	function openNav() {
	    $('.navbar').css('transform', 'translateX(0)');
	}
	function closeNav() {
	    $('.navbar').css('transform', 'translateX(250px)');
	}
	function navToggle() {
    $('.top-bar').toggleClass('top-bar-open');
    $('.middle-bar').toggleClass('middle-bar-open');
    $('.bottom-bar').toggleClass('bottom-bar-open');
		if(!open) {
			openNav();
			open = true;
		} else {
			closeNav();
			open = false;
		}
	}
	$('.navbar-toggle').unbind().click(() => navToggle());

	// Animate on scroll
	$('.nav li a[href^="#"], .head-started-btn[href^="#"]').click(function(e) {
		// Prevent default anchor click behavior
		e.preventDefault();
		navToggle();
		// Store hash
		let hash = this.hash;

		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 700, function(){

			// When done, add hash to url
			// (default click behaviour)
			window.location.hash = hash;

		});
	});

	$(window).resize(() => {
		let width = $(document).width() + 17;
		if (width > 768) {
			if (open === true) {
				navToggle();
			}
			$('.navbar').css('transform', 'translateX(0)');
		} else {
			$('.navbar').css('transform', 'translateX(250px)');
		}
	});


	const messagePre = $('.messages-pre'),
				logInPre = $('.log-in');

	let leftPre = true;

	function messageIn() {
		messagePre.css('transform', 'translateX(30px)');
		setTimeout(() => {
			messagePre.css({
					'filter': 'contrast(100%)',
					'transform': 'scale(1) translateX(0)',
					'z-index' : '8'
				});
		}, 300);
	}
	function logIn() {
		logInPre.css('transform', 'translateX(-30px)');
		setTimeout(() => {
			logInPre.css({
					'filter': 'contrast(100%)',
					'transform': 'scale(1) translateX(0)',
					'z-index' : '8'
				});
		}, 300);
	}
	function logOut() {
		logInPre.css('transform', 'translateX(-30px)');
		setTimeout(() => {
			logInPre.css({
					'filter': 'contrast(65%)',
					'transform': 'scale(.9) translateX(0)',
					'z-index' : '4'
				});
		}, 300);
	}
	function messageOut() {
		messagePre.css('transform', 'translateX(30px)');
		setTimeout(() => {
			messagePre.css({
					'filter': 'contrast(65%)',
					'transform': 'scale(.9) translateX(0)',
					'z-index' : '4'
				});
		}, 300);
	}

	$('.right-arrow').click(() => {
		if (leftPre) {
			messageIn();
			logOut();
			leftPre = false;
		}
	});
	$('.left-arrow').click(() => {
		if (!leftPre) {
			messageOut();
			logIn();
			leftPre = true;
		}
	});


	// Activate Carousel
	$(".slick").slick({
		auto: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true
	});


});
