jQuery(function($){
	var intro = {
		init: function() {
			this.setupElements();
			this.introAnimation();
			this.eventHandlers();
		},
		setupElements: function() {
			//vars
			
			//elements
			this.introTitleCover = $('#site-intro .introTitleCover');
			this.introSubTitleCover = $('#site-intro .introSubTitleCover');
			this.introLine = $('#site-intro .horizontal-line');
			this.introTitle = $('#site-intro .siteTitle');
			this.subTitle = $('#site-intro .sub-title');
			this.header = $('header');
			this.nav = $('nav ul');
			this.navItem = $('nav a');
			this.navHoverOverlay = $('.nav-hover-overlay');
			this.mainContainer = $('main');
			this.aboutPage = $('#about');
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

			//dimensions for the nav menu
			var navHeight = intro.nav.height();

			
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

			//position the nav underneath the page fold
			intro.nav.css({
				bottom: -navHeight
			});

			//position the nav-hover-overlay above the nav
			intro.navHoverOverlay.css({
				//bottom: intro.nav.height()
			})



			/*
			Animate the intro
			*/

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
			.to(intro.introTitle, 1, {top: '15px', scale:1}, "-=1")
			//reveal the header and remove the animated title
			.to($('header'), 0, {position: 'fixed', width: '100%', display: 'block'})
			.to(intro.introTitle, 0, {display: 'none'})
			.to(intro.subTitle, 0, {display: 'none'}, "-=0.7")
			.to(intro.introTitleCover, 0, {display: 'none'}, "-=0.5")
			.to(intro.introSubTitleCover, 0, {display: 'none'}, "-=0.7")
			.to($('.header-spacer'), 0, {display:'block'})
			.to($('.header-spacer'), 0, {display:'block'})
			.to($('.intro-veil'), 1, {height: intro.header.height() + 30}, "-=1")
			//animate the Navigation into frame
			.to($('nav'), 1, {bottom:0, opacity:1})
		},

		eventHandlers: function() {
			intro.navItem.hover(this.navHoverInOverlayHandler, this.navHoverOutOverlayHandler);
			intro.navItem.on('click', this.callPageHandler);
		},


		/* Event Handlers */
		navHoverInOverlayHandler : function(){
			//check which item was hovered over
			switch(this.text){
				case 'ABOUT' :
				intro.navHoverOverlay.css({backgroundImage : 'url(img/about-hover-img.jpg)'});
				intro.navHoverOverlay.attr('class', 'nav-hover-overlay about-btn');
				break;
				case 'WORK' :
				intro.navHoverOverlay.css({backgroundImage : 'url(img/work-hover-img.jpg)'});
				intro.navHoverOverlay.attr('class', 'nav-hover-overlay work-btn');
				break;
				case 'CONTACT' :
				intro.navHoverOverlay.css({backgroundImage : 'url(img/contact-hover-img.jpg)'});
				intro.navHoverOverlay.attr('class', 'nav-hover-overlay contact-btn');
				break;
				default:
				//do nothing
			}
			//reveal the overlay and scale it down
			TweenLite.to(intro.navHoverOverlay, 0.5, { opacity : 0.6, scale : 1});
			//hide the main container
			intro.mainContainer.css({'zIndex' : 2});
		},
		navHoverOutOverlayHandler : function(){
			//hide the overlay
			TweenLite.to(intro.navHoverOverlay, 0.3, {opacity : 0, scale : 1.3});
			setTimeout(function(){
				intro.mainContainer.css({'zIndex' : 101});
			},300);
			
		},
		callPageHandler : function(){
			//check which item was clicked
			switch(this.text){
				case 'ABOUT' :
				intro.aboutPage.show();
				break;
				case 'WORK' :
				intro.navHoverOverlay.css({backgroundImage : 'url(img/work-hover-img.jpg)'});
				intro.navHoverOverlay.attr('class', 'nav-hover-overlay work-btn');
				break;
				case 'CONTACT' :
				intro.navHoverOverlay.css({backgroundImage : 'url(img/contact-hover-img.jpg)'});
				intro.navHoverOverlay.attr('class', 'nav-hover-overlay contact-btn');
				break;
				default:
				//do nothing
			}
			//reveal the main container
			intro.mainContainer.css({'zIndex' : 101});
			TweenLite.to(intro.navHoverOverlay, 0.3, {opacity : 0, scale : 1.3});
		}

		
	};

	intro.init();
	window.intro = intro;
});
