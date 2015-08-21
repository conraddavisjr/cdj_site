jQuery(function($){
	var main = {
		init: function() {
			this.setupElements();
			this.setupBreakpoints();
			this.introAnimation();
			this.eventHandlers();
			this.contactForm();
		},
		setupElements: function() {
			//vars
			this.headerHeight = 80;
			this.leftValue = '50%';
			this.pageMarqueeHeight = '220px';
			//elements
			this.introTitleCover = $('#site-intro .introTitleCover');
			this.introSubTitleCover = $('#site-intro .introSubTitleCover');
			this.introLine = $('#site-intro .horizontal-line');
			this.introTitle = $('#site-intro .siteTitle');
			this.subTitle = $('#site-intro .sub-title');
			this.header = $('header');
			this.nav = $('nav ul');
			this.navItem = $('nav a');
			this.workCta = $('.learn-more, .contact');
			this.navHoverOverlay = $('.nav-hover-overlay');
			this.pageMarquee = $('.page-marquee');
			this.mainContainer = $('main, .member-bio');
			this.aboutPage = $('#about');
			this.workPage = $('#work');
			this.contactPage = $('#contact');
			this.homeLink = $('.siteTitle a');
			this.workAnimationStyle = 'notMobile';
			
		},

		setupBreakpoints: function(){
			var isBreakPoint = function (bp) {
		    	var bps = [320, 480, 768, 1024],
		        w = $(window).width(), min, max
			    for (var i = 0, l = bps.length; i < l; i++) {
			      if (bps[i] === bp) {
			        min = bps[i-1] || 0
			        max = bps[i]
			        break
			      }
			    }
			    return w > min && w <= max
			}
			// Usage
			if (isBreakPoint(768)) { 
				main.headerHeight = 55;
			} // Breakpoint between 768
			if (isBreakPoint(480)) { 
				main.headerHeight = 55;
				main.pageMarqueeHeight = '90px';
				main.workAnimationStyle = 'mobile';
			} // Breakpoint between 320 and 480
			if (isBreakPoint(320)) { 
				main.headerHeight = 47.5;
				main.pageMarqueeHeight = '90px';
				main.workAnimationStyle = 'mobile';
			} // 320 and below
		},
		
		introAnimation: function() {
			//dimensions for the intro line
			var introLineHeight = main.introLine.height();

			//dimensions for the Intro title
			var titleHeight = main.introTitle.height();
			//var titleWidth = main.introTitle.width() + (main.introTitle.width() * 0.37);
			var titleWidth = main.introTitle.width();
			console.log('titleWidth: ' + titleWidth);
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
				'display' : 'block',
				'opacity' : '0',
				'transform' : 'scale(2)',
				'top'  : titleTopPos,
				'left' :  main.leftValue,
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
			.to($('.intro-veil'), 1, {height: main.headerHeight}, "-=1")
			//animate the Navigation into frame
			.to($('nav'), 1, {bottom:0, opacity:1})
		},

		eventHandlers: function() {
			main.navItem.hover(this.navHoverInOverlayHandler, this.navHoverOutOverlayHandler);
			main.navItem.on('click', this.callPageHandler);
			main.homeLink.on('click', this.callPageHandler);
			main.workCta.on('click', this.callPageHandler);
		},

		contactForm: function(){
			///////
			// Contact Form JS
			//////

			// Get the form.
			var form = $('#contactForm');

			// Get the messages div.
			var formMessages = $('#form-messages');

			// Set up an event listener for the contact form.
			$(form).submit(function(e) {
				// Stop the browser from submitting the form.
				e.preventDefault();

				// Serialize the form data.
				var formData = $(form).serialize();

				// Submit the form using AJAX.
				$.ajax({
					type: 'POST',
					url: $(form).attr('action'),
					data: formData
				})
				.done(function(response) {
					// Make sure that the formMessages div has the 'success' class.
					$(formMessages).removeClass('error');
					//$(formMessages).addClass('success');

					// Set the message text.
					$(formMessages).text('Thank You!');

					// Animate the Thankyou msg in.
					main.thankYouMail();
				})
				.fail(function(data) {
					// Make sure that the formMessages div has the 'error' class.
					$(formMessages).removeClass('success');
					$(formMessages).addClass('error');

					// Set the message text.
					if (data.responseText !== '') {
						$(formMessages).text(data.responseText);
					} else {
						$(formMessages).text('Oops! An error occured and your message could not be sent.');
					}
				});
			});	
		},

		thankYouMail : function(){
			console.log("thankYouMail Called!");
			//animate the thank-you-message into frame
			//generate top value for the msg box
			var thankYouMessageHeight = $('.thank-you-message').height();
			//generate left value for the msg box
			var thankYouMessageWidth = $('.thank-you-message').width();
			TweenLite.to($('.thank-you-message'), 0.5, {
				top:'50%',
				marginTop: -(thankYouMessageHeight / 2),
				marginLeft: -(thankYouMessageWidth / 2)
			});
			// wait, then send the message off screen
			TweenLite.to($('.thank-you-message'), 0.5, {top:'-100%', delay: 2});
		},


		/* Event Handlers */
		navHoverInOverlayHandler : function(){
			//check which item was hovered over
			switch(this.text){
				case 'ABOUT' :
				main.navHoverOverlay.css({backgroundImage : 'url(img/about-hover-img.jpg)'});
				main.navHoverOverlay.attr('class', 'nav-hover-overlay about-btn');
				if($(this).hasClass('nav-active')){
					//keep the about marquee
				}else{
					//remove it
					main.pageMarquee.css({backgroundImage : 'none', opacity:0.5});
				}
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
			main.navHoverOverlay.css({'zIndex' : 102});
			TweenLite.to(main.navHoverOverlay, 0.5, {opacity : 0.9, scale : 1});
			TweenLite.to(main.pageMarquee, 0.5, {opacity : 0.9});
			//hide the main container
			main.mainContainer.css({'zIndex' : 2});
		},
		navHoverOutOverlayHandler : function(){
			//hide the overlay
			TweenLite.to(main.navHoverOverlay, 0.2, {opacity : 0, scale : 0.95});
			TweenLite.to(main.navHoverOverlay, 0, {opacity : 0.5, scale : 1.3, delay: 0.4});
			setTimeout(function(){
				main.navHoverOverlay.css({'zIndex' : 2});
				main.mainContainer.css({'zIndex' : 101});
			},200);
			
		},
		callPageHandler : function(){
			console.log('this.text: ' + this.text );
			//remove all .nav-active classes
			$('a').removeClass('nav-active');
			//open the selected page
			main.pageCloseHandler(); //close all pages 1st
			//check which item was clicked
			switch($(this).attr('navItem')){
				case 'home' :
					// main.pageCloseHandler(); handles the Home pg
				break;
				case 'about' :
					$('#navAbout').addClass('nav-active'); //add .nav-active class to nav item
					main.aboutPage.show();
					main.pageMarquee.css({backgroundImage : 'url(img/about-hover-img.jpg)'});
					//slide the About Marquee into position
					TweenLite.to(main.pageMarquee, 1, {height: main.pageMarqueeHeight, opacity: 1});    
					//slide the About page into frame
					TweenLite.to(main.aboutPage, 1, {position:'fixed', top: main.header.height()});
					//reveal the info-panel
					$('.info-panel').show();

				break;
				case 'work' :
					$('#navWork').addClass('nav-active'); //add .nav-active class to nav item
					main.navHoverOverlay.css({backgroundImage : 'url(img/work-hover-img.jpg)'});
					main.navHoverOverlay.attr('class', 'nav-hover-overlay work-btn');
					//animate the grid buckets in
					main.workPageAnimation();
				break;
				case 'contact' :
					$('#navContact').addClass('nav-active'); //add .nav-active class to nav item
					main.navHoverOverlay.css({backgroundImage : 'url(img/contact-hover-img.jpg)'});
					main.navHoverOverlay.attr('class', 'nav-hover-overlay contact-btn');
					//slide the Contact page into frame
					TweenLite.to(main.contactPage, 1, {top: 0});
				break;
				default:
				//do nothing
			}
			//reveal the main container
			main.mainContainer.css({'zIndex' : 101});
			TweenLite.to(main.navHoverOverlay, 0, {opacity : 0, scale : 1});
		},
		pageCloseHandler : function(){
			//Close all pages when this function is called

			//slide the pageMarquee out of Frame
			TweenLite.to(main.pageMarquee, 0.5, {height: '100%', opacity: 0});

			//remove the pageMarquee img source
			if($('header a').hasClass('nav-active')){
				//delay before removing the pageMarquee img
				setTimeout(function(){
					main.pageMarquee.css('backgroundImage', 'none');  
				},500);
			}else{
				//remove it
			}
			 
			//clear the sliding overlay
			$('main, .info-panel').removeClass('slide-in slide-out');
			//remove overlay close buttons
			$('.info-panel-close').removeClass('is-visible');

			
			/*About*/
			//slide the About page out of frame
			TweenLite.to(main.aboutPage, 1, {position:'fixed', top: '100%'});

			/*Work*/
			//scroll the work page to the top and slide the work page out
			TweenLite.to(main.workPage, 0.5, {bottom: '-100%', opacity: 0});
			setTimeout(function(){
				main.workPage.scrollTop(0);
				Work.closeStoryBtnHandler();
			}, 1000);

			/*Contact*/
			//slide the Contact page out of frame
			TweenLite.to(main.contactPage, 1, {top: '100%'});
		},

		//Work Page animation
		workPageAnimation : function(){
			//var workPageTl = new TimelineLite();
			//slide the work page in
			TweenLite.to(main.workPage, 1, {bottom: '0%', opacity: 1, paddingTop: main.header.outerHeight()});
			//grid buckets drop effect
			console.log('workAnimationStyle:' + main.workAnimationStyle);
			switch(main.workAnimationStyle){
				case 'notMobile' :
					TweenMax.staggerFrom('.work-bucket', 0.6, {top: '-1000px', delay:1}, 0.1);
					break;
				case 'mobile' :
					TweenMax.from('.work-bucket', 0.8, {top: '-2000px', delay:1}, 0.1);
					break;
				default:
				TweenMax.from('.work-bucket', 0.6, {top: '-1000px', delay:1}, 0.1);
			}
		}
		
	};

	main.init();
	window.main = main;
});
