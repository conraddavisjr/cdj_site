//VPD JS
jQuery(function($){
	var vpd = {
		init: function() {
			this.setupElements();
			this.bindEvents();
			this.autoStart();
		},
		setupElements: function() {
			// vars
			
			// elements
		},
		bindEvents: function() {
			
		},
		
				
		/////Start on Script load
		autoStart: function(){
			//Slideshow cycle
			$("#slideshow > div:gt(0)").hide();
			var isPaused = false;
			//var nextArrow = $('.nextArrow');
			var slideshowStatus = $('.slideshow-status');
			
			var t = window.setInterval(function() {
				if(!isPaused) {
					$('#slideshow > div:first')
					.fadeOut(1000)
					.next()
					.fadeIn(1000)
					.end()
					.appendTo('#slideshow');
				}
			}, 3000);
			
			/*nextArrow.on('click', function(){
				//move to the next slide
				$('#slideshow > div:first')
				.fadeOut(1000)
				.next()
				.fadeIn(1000)
				.end()
				.appendTo('#slideshow');
				
				//pause the slideshow
				isPaused = true;
			});*/
			
			//hover over to pause and out to play
			$('#slideshow').hover(
				function(e){
					//update the copy and color of the playing/paused status
					slideshowStatus.text('Paused');
					slideshowStatus.css({color : '#f90'});
					isPaused = true;
				},
				function(e){
					//update the copy of the playing/paused status
					slideshowStatus.text('Playing');
					slideshowStatus.css({color : '#18DA3F'});
					isPaused = false;
				}
			)
		} /////Start on Script load(END)
	};
	vpd.init();
	window.vpd = vpd;
});