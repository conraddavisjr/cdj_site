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
			this.introTitle = $('#site-intro .siteTitle');
			this.subTitle = $('#site-intro .sub-title');
		},
		
		introAnimation: function() {
			//dimensions for the intro line
			var introLineHeight = intro.introLine.height();

			//dimensions for the Intro title
			var titleHeight = intro.introTitle.height();
			var titleWidth = intro.introTitle.width() + (intro.introTitle.width() * 0.37);
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
			var titleTopPos = introLineOffset.top - (titleHeight / 2);
			intro.introTitle.css({
				'position' : 'absolute',
				'opacity' : '0',
				'transform' : 'scale(2)',
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


			//Animate the intro

			tl = new TimelineLite();
			//animate the line in
			tl.to(intro.introLine, 1, {width: '100%'})	
			//animate the title in
			.to(intro.introTitle, 1, {top: titleTopPos - (titleHeight + (titleHeight * 0.2)), opacity: 1}, "-=0.3")
			//remove the introTitleCover
			.to(intro.introTitleCover, 0, {display: 'none'}, "-=0.3")
			//animate the suibtle in
			.to(intro.subTitle, 0.7, {top: subTitleTopPos + (subTitleHeight + (subTitleHeight * 0.5)), opacity: 1}, "-=0.5")

			//animate the line and the subTitle out
			.to(intro.introLine, 1, {left: '100%', width:'0%'}, "+=1")
			.to(intro.subTitle, 0.7, {top: subTitleTopPos - subTitleHeight}, "-=1")
			//move the Title up to the header position
			.to(intro.introTitle, 1, {top: 0, scale:1}, "-=1")
			//reveal the header and remove the animated title
			.to($('header'), 0, {position: 'fixed', width: '100%', display: 'block'})
			.to(intro.introTitle, 0, {display: 'none'})
		},
		
	};

	intro.init();
	window.intro = intro;
});
