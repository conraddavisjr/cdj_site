jQuery(function($){
	var intro = {
		init: function() {
			this.setupElements();
			this.introAnimation();
		},
		setupElements: function() {
			//vars
			
			//elements
			this.introTitleCover = $('#site-intro .introTitleCover');
			this.introSubTitleCover = $('#site-intro .introSubTitleCover');
			this.introLine = $('#site-intro .horizontal-line');
			this.introTitle = $('#site-intro h1');
			this.subTitle = $('#site-intro .sub-title');
		},
		
		introAnimation: function() {
			//dimensions for the intro line
			var introLineHeight = intro.introLine.height();

			//dimensions for the Intro title
			var titleHeight = intro.introTitle.height();
			var titleWidth = intro.introTitle.width() + (intro.introTitle.width()/2);
			var windowHeight = $(window).innerHeight();

			//dimensions for the Intro subTitle
			var subTitleHeight = intro.subTitle.height();
			var subTitleWidth = intro.subTitle.width();

			//dimensions for the Intro title Cover
			var introTitleCoverHeight = intro.introTitleCover.height();

			//dimensions for the Intro subTitle Cover
			var introSubTitleCoverHeight = intro.introSubTitleCover.height();
			console.log("introSubTitleCoverHeight" + introSubTitleCoverHeight);


			
			//position the introLine in the center of the page
			//calc the top px.
			var lineTopPos = (windowHeight / 2);
			intro.introLine.css({
				'display' : 'block',
				'top'  : lineTopPos
			});
			//grab the intro line's offset
			var introLineOffset = intro.introLine.offset();
			
			//position the title covers
			//introTitle
			intro.introTitleCover.css({
				'marginTop' : (windowHeight / 2)
			})
			//introSubTitle
			intro.introSubTitleCover.css({
				'marginTop' :(windowHeight / 2) - (introSubTitleCoverHeight)
			})

			//position the introTitle right above the center line
			//calc the left px.
			var titleLeftPos = -(titleWidth / 2);
			//calc the top px.
			var titleTopPos = introLineOffset.top;
			intro.introTitle.css({
				'display' : 'block',
				'top'  : titleTopPos,
				'left' :  '50%',
				'marginLeft' : titleLeftPos
			});

			//position the introSubTitle underneath the center line
			//calc the top px.
			var subTitleTopPos = introLineOffset.top - (subTitleHeight);
			//calc the left px.
			var subTitleLeftPos = -(subTitleWidth / 2);
			console.log("subTitleLeftPos: " + subTitleLeftPos);
			intro.subTitle.css({
				'display' : 'inline-block',
				'top'  : subTitleTopPos,
				'left' :  '50%',
				'marginLeft' : subTitleLeftPos
			});
		},
	};

	intro.init();
	window.intro = intro;
});
