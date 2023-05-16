
(function($) {

	document.getElementById('button1').addEventListener('click', function() {
		let popup = document.querySelector('.popup')
		popup.classList.add('show');
		
	})

	document.getElementById('closePopUp1').addEventListener('click', function() {
		let popup = document.querySelector('.popup')
		popup.classList.remove('show');
	})

	document.getElementById('button2').addEventListener('click', function() {
		let popup2 = document.querySelector('.popup2')
		popup2.classList.add('show');
		
	})

	document.getElementById('closePopUp2').addEventListener('click', function() {
		let popup2 = document.querySelector('.popup2')
		popup2.classList.remove('show');
	})

	document.getElementById('button3').addEventListener('click', function() {
		let popup3 = document.querySelector('.popup3')
		popup3.classList.add('show');
		
	})

	document.getElementById('closePopUp3').addEventListener('click', function() {
		let popup3 = document.querySelector('.popup3')
		popup3.classList.remove('show');
	})

	document.getElementById('button4').addEventListener('click', function() {
		let popup4 = document.querySelector('.popup4')
		popup4.classList.add('show');
		
	})

	document.getElementById('closePopUp4').addEventListener('click', function() {
		let popup4 = document.querySelector('.popup4')
		popup4.classList.remove('show');
	})

	document.getElementById('button5').addEventListener('click', function() {
		let popup5 = document.querySelector('.popup5')
		popup5.classList.add('show');
		
	})

	document.getElementById('closePopUp5').addEventListener('click', function() {
		let popup5 = document.querySelector('.popup5')
		popup5.classList.remove('show');
	})

	document.getElementById('button6').addEventListener('click', function() {
		let popup6 = document.querySelector('.popup6')
		popup6.classList.add('show');
		
	})

	document.getElementById('closePopUp6').addEventListener('click', function() {
		let popup6 = document.querySelector('.popup6')
		popup6.classList.remove('show');
	})

	document.getElementById('button7').addEventListener('click', function() {
		let popup7 = document.querySelector('.popup7')
		popup7.classList.add('show');
		
	})

	document.getElementById('closePopUp7').addEventListener('click', function() {
		let popup7 = document.querySelector('.popup7')
		popup7.classList.remove('show');
	})

	document.getElementById('button8').addEventListener('click', function() {
		let popup8 = document.querySelector('.popup8')
		popup8.classList.add('show');
	})

	document.getElementById('closePopUp8').addEventListener('click', function() {
		let popup8 = document.querySelector('.popup8')
		popup8.classList.remove('show');
	})

	document.getElementById('button9').addEventListener('click', function() {
		let popup9 = document.querySelector('.popup9')
		popup9.classList.add('show');
		
	})

	document.getElementById('closePopUp9').addEventListener('click', function() {
		let popup9 = document.querySelector('.popup9')
		popup9.classList.remove('show');
	})

	

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

})(jQuery);