jQuery(function($){
	var main = {
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
			this.pageMarquee = $('.page-marquee');
			this.mainContainer = $('main, .member-bio');
			this.aboutPage = $('#about');
			this.homeLink = $('.siteTitle a');
			
		},
		
		introAnimation: function() {
			//dimensions for the intro line
			var introLineHeight = main.introLine.height();

			//dimensions for the Intro title
			var titleHeight = main.introTitle.height();
			var titleWidth = main.introTitle.width() + (main.introTitle.width() * 0.37);
			var windowHeight = $(window).innerHeight();

			//dimensions for the Intro subTitle
			var subTitleHeight = main.subTitle.height();
			var subTitleWidth = main.subTitle.width();

			//dimensions for the Intro title Cover
			var introTitleCoverHeight = main.introTitleCover.height();

			//dimensions for the Intro subTitle Cover
			var introSubTitleCoverHeight = main.introSubTitleCover.height();
			console.log("introSubTitleCoverHeight" + introSubTitleCoverHeight);

			//dimensions for the nav menu
			var navHeight = main.nav.height();

			
			//position the introLine in the center of the page
			//calc the top px.
			var lineTopPos = (windowHeight / 2);
			main.introLine.css({
				'display' : 'block',
				'top'  : lineTopPos
			});
			//grab the intro line's offset
			var introLineOffset = main.introLine.offset();
			
			//position the title covers
			//introTitle
			main.introTitleCover.css({
				'marginTop' : (windowHeight / 2)
			})
			//introSubTitle
			main.introSubTitleCover.css({
				'marginTop' :(windowHeight / 2) - (introSubTitleCoverHeight)
			})

			//position the introTitle right above the center line
			//calc the left px.
			var titleLeftPos = -(titleWidth / 2);
			//calc the top px.
			var titleTopPos = introLineOffset.top - (titleHeight / 2);
			main.introTitle.css({
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
			main.subTitle.css({
				'display' : 'inline-block',
				'top'  : subTitleTopPos,
				'left' :  '50%',
				'marginLeft' : subTitleLeftPos
			});

			//position the nav underneath the page fold
			main.nav.css({
				bottom: -navHeight
			});

			//position the nav-hover-overlay above the nav
			main.navHoverOverlay.css({
				//bottom: main.nav.height()
			})



			/*
			Animate the intro
			*/

			tl = new TimelineLite();
			//animate the line in
			tl.to(main.introLine, 1, {width: '100%'})	
			//animate the title in
			.to(main.introTitle, 1, {top: titleTopPos - (titleHeight + (titleHeight * 0.2)), opacity: 1}, "-=0.3")
			//remove the introTitleCover
			.to(main.introTitleCover, 0, {display: 'none'}, "-=0.3")
			//animate the suibtle in
			.to(main.subTitle, 0.7, {top: subTitleTopPos + (subTitleHeight + (subTitleHeight * 0.5)), opacity: 1}, "-=0.5")

			//animate the line and the subTitle out
			.to(main.introLine, 1, {left: '100%', width:'0%'}, "+=1")
			.to(main.subTitle, 0.7, {top: subTitleTopPos - subTitleHeight}, "-=1")
			//move the Title up to the header position
			.to(main.introTitle, 1, {top: '15px', scale:1}, "-=1")
			//reveal the header and remove the animated title
			.to($('header'), 0, {position: 'fixed', width: '100%', display: 'block'})
			.to(main.introTitle, 0, {display: 'none'})
			.to(main.subTitle, 0, {display: 'none'}, "-=0.7")
			.to(main.introTitleCover, 0, {display: 'none'}, "-=0.5")
			.to(main.introSubTitleCover, 0, {display: 'none'}, "-=0.7")
			.to($('.header-spacer'), 0, {display:'block'})
			.to($('.header-spacer'), 0, {display:'block'})
			.to($('.intro-veil'), 1, {height: main.header.height() + 30}, "-=1")
			//animate the Navigation into frame
			.to($('nav'), 1, {bottom:0, opacity:1})
		},

		eventHandlers: function() {
			main.navItem.hover(this.navHoverInOverlayHandler, this.navHoverOutOverlayHandler);
			main.navItem.on('click', this.callPageHandler);
			main.homeLink
		},


		/* Event Handlers */
		navHoverInOverlayHandler : function(){
			//check which item was hovered over
			switch(this.text){
				case 'ABOUT' :
				main.navHoverOverlay.css({backgroundImage : 'url(img/about-hover-img.jpg)'});
				main.navHoverOverlay.attr('class', 'nav-hover-overlay about-btn');
				break;
				case 'WORK' :
				main.navHoverOverlay.css({backgroundImage : 'url(img/work-hover-img.jpg)'});
				main.navHoverOverlay.attr('class', 'nav-hover-overlay work-btn');
				break;
				case 'CONTACT' :
				main.navHoverOverlay.css({backgroundImage : 'url(img/contact-hover-img.jpg)'});
				main.navHoverOverlay.attr('class', 'nav-hover-overlay contact-btn');
				break;
				default:
				//do nothing
			}
			//reveal the overlay and scale it down
			TweenLite.to(main.navHoverOverlay, 0.5, { opacity : 0.6, scale : 1});
			//hide the main container
			main.mainContainer.css({'zIndex' : 2});
		},
		navHoverOutOverlayHandler : function(){
			//hide the overlay
			TweenLite.to(main.navHoverOverlay, 0.2, {opacity : 0, scale : 1.3});
			setTimeout(function(){
				main.mainContainer.css({'zIndex' : 101});
			},200);
			
		},
		callPageHandler : function(){
			//check which item was clicked
			switch(this.text){
				case 'ABOUT' :
				main.aboutPage.show();
				main.pageMarquee.css({backgroundImage : 'url(img/about-hover-img.jpg)'});
				//slide the About Marquee into position
				TweenLite.to(main.pageMarquee, 1, {height: '220px', opacity: 1});    
				//slide the About page into frame
				//main.aboutPage.css({'paddingTop' : main.pageMarquee.height()});
				TweenLite.to(main.aboutPage, 1, {position:'fixed', top: main.header.height()});
				break;
				case 'WORK' :
				main.navHoverOverlay.css({backgroundImage : 'url(img/work-hover-img.jpg)'});
				main.navHoverOverlay.attr('class', 'nav-hover-overlay work-btn');
				break;
				case 'CONTACT' :
				main.navHoverOverlay.css({backgroundImage : 'url(img/contact-hover-img.jpg)'});
				main.navHoverOverlay.attr('class', 'nav-hover-overlay contact-btn');
				break;
				default:
				//do nothing
			}
			//reveal the main container
			main.mainContainer.css({'zIndex' : 101});
			TweenLite.to(main.navHoverOverlay, 0.3, {opacity : 0, scale : 1.3});
		}

		
	};

	main.init();
	window.main = main;
});
