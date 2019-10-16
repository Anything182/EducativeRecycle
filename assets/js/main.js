/*
	Multiverse by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var question11 = document.quiz.question11.value;
	var question12 = document.quiz.question12.value;
	var correct = 0;


	if (question1 == "Providence") {
		correct++;
}
	if (question2 == "Hartford") {
		correct++;
}	
	if (question3 == "Albany") {
		correct++;
	}
	if (question4 == "Providence") {
		correct++;
}
if (question5 == "Providence") {
	correct++;
}
if (question6 == "Providence") {
	correct++;
}
if (question7 == "Providence") {
	correct++;
}
if (question8 == "Providence") {
	correct++;
}
if (question9 == "Providence") {
	correct++;
}
if (question10 == "Providence") {
	correct++;
}
if (question11 == "Providence") {
	correct++;
}
if (question12 == "Providence") {
	correct++;
}

	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}


/* ------------------------------------------------------------------------------------------------- */
(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});

	// Hack: Enable IE workarounds.
		if (browser.name == 'ie')
			$body.addClass('ie');

	// Touch?
		if (browser.mobile)
			$body.addClass('touch');

	// Transitions supported?
		if (browser.canUse('transition')) {

			// Play initial animations on page load.
				$window.on('load', function() {
					window.setTimeout(function() {
						$body.removeClass('is-preload');
					}, 100);
				});

			// Prevent transitions/animations on resize.
				var resizeTimeout;

				$window.on('resize', function() {

					window.clearTimeout(resizeTimeout);

					$body.addClass('is-resizing');

					resizeTimeout = window.setTimeout(function() {
						$body.removeClass('is-resizing');
					}, 100);

				});

		}

	// Scroll back to top.
		$window.scrollTop(0);

	// Panels.
		var $panels = $('.panel');

		$panels.each(function() {

			var $this = $(this),
				$toggles = $('[href="#' + $this.attr('id') + '"]'),
				$closer = $('<div class="closer" />').appendTo($this);

			// Closer.
				$closer
					.on('click', function(event) {
						$this.trigger('---hide');
					});

			// Events.
				$this
					.on('click', function(event) {
						event.stopPropagation();
					})
					.on('---toggle', function() {

						if ($this.hasClass('active'))
							$this.triggerHandler('---hide');
						else
							$this.triggerHandler('---show');

					})
					.on('---show', function() {

						// Hide other content.
							if ($body.hasClass('content-active'))
								$panels.trigger('---hide');

						// Activate content, toggles.
							$this.addClass('active');
							$toggles.addClass('active');

						// Activate body.
							$body.addClass('content-active');

					})
					.on('---hide', function() {

						// Deactivate content, toggles.
							$this.removeClass('active');
							$toggles.removeClass('active');

						// Deactivate body.
							$body.removeClass('content-active');

					});

			// Toggles.
				$toggles
					.removeAttr('href')
					.css('cursor', 'pointer')
					.on('click', function(event) {

						event.preventDefault();
						event.stopPropagation();

						$this.trigger('---toggle');

					});

		});

		// Global events.
			$body
				.on('click', function(event) {

					if ($body.hasClass('content-active')) {

						event.preventDefault();
						event.stopPropagation();

						$panels.trigger('---hide');

					}

				});

			$window
				.on('keyup', function(event) {

					if (event.keyCode == 27
					&&	$body.hasClass('content-active')) {

						event.preventDefault();
						event.stopPropagation();

						$panels.trigger('---hide');

					}

				});

	// Header.
		var $header = $('#header');

		// Links.
			$header.find('a').each(function() {

				var $this = $(this),
					href = $this.attr('href');

				// Internal link? Skip.
					if (!href
					||	href.charAt(0) == '#')
						return;

				// Redirect on click.
					$this
						.removeAttr('href')
						.css('cursor', 'pointer')
						.on('click', function(event) {

							event.preventDefault();
							event.stopPropagation();

							window.location.href = href;

						});

			});

	// Footer.
		var $footer = $('#footer');

		// Copyright.
		// This basically just moves the copyright line to the end of the *last* sibling of its current parent
		// when the "medium" breakpoint activates, and moves it back when it deactivates.
			$footer.find('.copyright').each(function() {

				var $this = $(this),
					$parent = $this.parent(),
					$lastParent = $parent.parent().children().last();

				breakpoints.on('<=medium', function() {
					$this.appendTo($lastParent);
				});

				breakpoints.on('>medium', function() {
					$this.appendTo($parent);
				});

			});

	// Main.
		var $main = $('#main');

		// Thumbs.
			$main.children('.thumb').each(function() {

				var	$this = $(this),
					$image = $this.find('.image'), $image_img = $image.children('img'),
					x;

				// No image? Bail.
					if ($image.length == 0)
						return;

				// Image.
				// This sets the background of the "image" <span> to the image pointed to by its child
				// <img> (which is then hidden). Gives us way more flexibility.

					// Set background.
						$image.css('background-image', 'url(' + $image_img.attr('src') + ')');

					// Set background position.
						if (x = $image_img.data('position'))
							$image.css('background-position', x);

					// Hide original img.
						$image_img.hide();

			});

		// Poptrox.
			$main.poptrox({
				baseZIndex: 20000,
				caption: function($a) {

					var s = '';

					$a.nextAll().each(function() {
						s += this.outerHTML;
					});

					return s;

				},
				fadeSpeed: 300,
				onPopupClose: function() { $body.removeClass('modal-active'); },
				onPopupOpen: function() { $body.addClass('modal-active'); },
				overlayOpacity: 0,
				popupCloserText: '',
				popupHeight: 150,
				popupLoaderText: '',
				popupSpeed: 300,
				popupWidth: 150,
				selector: '.thumb > a.image',
				usePopupCaption: true,
				usePopupCloser: true,
				usePopupDefaultStyling: false,
				usePopupForceClose: true,
				usePopupLoader: true,
				usePopupNav: true,
				windowMargin: 50
			});

			// Hack: Set margins to 0 when 'xsmall' activates.
				breakpoints.on('<=xsmall', function() {
					$main[0]._poptrox.windowMargin = 0;
				});

				breakpoints.on('>xsmall', function() {
					$main[0]._poptrox.windowMargin = 50;
				});

})(jQuery);