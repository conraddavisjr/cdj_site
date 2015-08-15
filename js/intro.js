jQuery(function($){
	var intro = {
		init: function() {
			this.setupElements();
			this.introAnimation();
		},
		setupElements: function() {
			//vars
			var windowHeight = window;
			//elements
			this.introTitle = $('#site-intro h1');
		},
		
		introAnimation: function() {
			//grab dimensions for the title
			var titleHeight = intro.introTitle.height();
			var titleWidth = intro.introTitle.width();
			var windowHeight = $(window).innerHeight();
			
			//position the introTitle in the center of the page
			//calc the top px.
			var topPos = (windowHeight / 2) - (titleHeight / 2);
			//calc the left px.
			var leftPos = -(titleWidth / 2);
			
			intro.introTitle.css({
				'display' : 'block',
				'top'  : topPos,
				'left' :  '50%',
				'marginLeft' : leftPos
			});
		},
	};

	intro.init();
	window.intro = intro;
});
