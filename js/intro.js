jQuery(function($){
	var intro = {
		init: function() {
			this.setupElements();
			this.introAnimation();
		},
		setupElements: function() {
			//vars

			//elements
			this.$introTitle = $('#site-intro h1');
		},
		
		introAnimation: function() {
			//grab the title dimensions
			intro.$introTitle
		},
	};

	intro.init();
	window.intro = intro;
});
