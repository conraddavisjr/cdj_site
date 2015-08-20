jQuery(function($){
	var Work = {
		init: function() {
			this.setupElements();
			this.bindEvents();
			this.helperFunctions();
			this.clientSiteHandler();
		},
		setupElements: function() {
			// vars
			this.clientId = "";
			this.currentStory = "";
			this.navLength = 0;
			// elements
			this.window = $(window);
			this.workPage = $('#work');
			this.navHeader = $('header');
			this.subNav = $('.sub-nav');
			this.websiteIcons = $('.website-icons');
			this.siteIndicator = $('.site-indicator');
			this.storyBg = $('#work');
			this.closeStoryBtn = $('.close-story');
			this.sidebar = $('.sidebar');
			this.siteIcon = $('.site-icon, .site-icon-cta');
			this.workIntro = $('#work-intro');
			this.clientStory = $("#client-story");
			this.storyGroup = $('#client-story section');
			this.storyNavContainer = $('.story-nav-container');
			this.storyNavContainerItems = $('.story-nav-container .story-nav');
			this.storyNavChildren = $('.story-nav-container .story-nav div');
			this.cdImageContainer = $('.cd-image-container');
		},
		bindEvents: function() {
			this.closeStoryBtn.on('click', this.closeStoryBtnHandler);
			this.siteIcon.on('click', this.siteCtaClickHandler);
			this.sidebar.hover(this.sideBarOverHandler, this.sideBarOutHandler);
			this.workPage.on('scroll', this.windowScrollHandler);
		},
		
		///////
		//Handlers
		//////
		
		/////subNav
		//Close Btn
		closeStoryBtnHandler: function(){
			Work.siteIndicator.html('&nbsp;');
			Work.siteIndicator.attr('class','site-indicator');
			Work.sidebar.removeClass('sidebar-in');
			Work.websiteIcons.removeClass('fly-out-left');
			Work.clientStory.fadeOut(0);
			Work.storyNavContainer.fadeOut(0);
			Work.storyBg.attr('class','storyBg');
			Work.closeStoryBtn.css('display','none');
			$('.' + Work.clientId).removeClass('story-reveal');//hide the corresponding client story via the clientId
			setTimeout(function(){
				Work.workIntro.fadeIn(1500);
			},100);	
		},
		
		/////sidebar + website Icon CTAs
		siteCtaClickHandler: function(){
			Work.storyGroup.removeClass('story-reveal');
			Work.clientId = $(this).attr('siteId');
			console.log('clientId: ' + Work.clientId);
			Work.websiteIcons.addClass('fly-out-left');
			Work.sidebar.addClass('sidebar-in');
			Work.workIntro.fadeOut(0);
			Work.storyBg.attr('class','storyBg');
			Work.storyBg.addClass(Story[Work.clientId].storyBg); //add the corresponding client id class
			Work.siteIndicator.text(Story[Work.clientId].siteIndicatorName);//populate the site-indicator with the coressponding client name 
			Work.siteIndicator.attr('class','site-indicator');
			Work.siteIndicator.addClass(Story[Work.clientId].siteIndicatorStyle);//set site-indicator copy color per client name
			
			//Set a switch for the current client story
			Work.currentStory = Story[Work.clientId].switchId;
			
			/////populate the story Nav with items
			// First, clear the item list
			storyNav.storyNavItem.html('');
			storyNav.storyNavItem.attr('class','');
			storyNav.storyNavContainerItems.find('div').attr('class', '');
			//
			navLength = Work.navLength;
			navLength = Story[Work.clientId].navigation.length;
			for (var navPointer = 0; navPointer < navLength; navPointer++) {
				if(navPointer==0){
					$(storyNav.storyNavItem[navPointer]).addClass('story-nav-item current-slide');
					$(storyNav.storyNavItem[navPointer]).html(Story[Work.clientId].navigation[navPointer]);
					$(storyNav.storyNavItemHref[navPointer]).attr('href', Story[Work.clientId].navigationLinks[navPointer]);
				}
				$(storyNav.storyNavItem[navPointer]).addClass('story-nav-item');
				$(storyNav.storyNavItem[navPointer]).html(Story[Work.clientId].navigation[navPointer]);
				$(storyNav.storyNavItemHref[navPointer]).attr('href', Story[Work.clientId].navigationLinks[navPointer]);
			}
			
			
			Work.closeStoryBtn.css('display','inline-block');
			$('.' + Work.clientId).addClass('story-reveal');//reveal the corresponding client story via the clientId
			setTimeout(function(){
				Work.clientStory.fadeIn(1500);
				Work.storyNavContainer.fadeIn(1500);
			},100);
			if(Work.clientId == 'vpdSite'){
				setTimeout(function(){
					Work.cdImageContainer.addClass('cd-image-appear');
				},1000);
			}
			Work.helperFunctions(); //Reinitalize the smooth slider
		},
		sideBarOverHandler: function(){
			//	
		},
		sideBarOutHandler: function(){
			//
		},
		/////sidebar + website Icon CTAs (END)
		
		/////window Scroller
		windowScrollHandler: function(){
			console.log("You are Scrolling the page!");
			//attach the subNav to the header upon scrolling	
			var scrollTop = Work.workPage.scrollTop() + Work.navHeader.height();
			var subNavTop = Work.navHeader.height();
			if (scrollTop > subNavTop) {
				Work.subNav.removeClass('sub-nav-detach');
				Work.subNav.addClass('sub-nav-attach');
			} else {
				Work.subNav.removeClass('sub-nav-attach');
				Work.subNav.addClass('sub-nav-detach');
			}
			/////subNav (END)
		},
		/////window Scroller (END)
		
		
		///////
		//Handlers (END)
		//////
		helperFunctions: function(){
			//jQuery smooth scrolling
			$(function smoothScroller() {
			  $('a[href*=#]:not([href=#])').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  if (target.length) {
					$('html,body').animate({
					  scrollTop: target.offset().top
					}, 1000);
					return false;
				  }
				}
			  });
			});
		},
		clientSiteHandler: function(){
			if(clientSite != ''){
				Work.clientId = clientSite;
				console.log("clientId: " + Work.clientId);
				Work.storyGroup.removeClass('story-reveal');
				Work.sidebar.addClass('sidebar-in');
				Work.workIntro.fadeOut(0);
				Work.storyBg.attr('class','storyBg');
				Work.storyBg.addClass(Story[Work.clientId].storyBg); //add the corresponding client id class
				Work.siteIndicator.text(Story[Work.clientId].siteIndicatorName);//populate the site-indicator with the coressponding client name 
				Work.siteIndicator.attr('class','site-indicator');
				Work.siteIndicator.addClass(Story[Work.clientId].siteIndicatorStyle);//set site-indicator copy color per client name
				
				//Set a switch for the current client story
				Work.currentStory = Story[Work.clientId].switchId;
				
				/////populate the story Nav with items
				// First, clear the item list
				storyNav.storyNavItem.html('');
				storyNav.storyNavItem.attr('class','');
				storyNav.storyNavContainerItems.find('div').attr('class', '');
				//
				navLength = Work.navLength;
				navLength = Story[Work.clientId].navigation.length;
				for (var navPointer = 0; navPointer < navLength; navPointer++) {
					if(navPointer==0){
						$(storyNav.storyNavItem[navPointer]).addClass('story-nav-item current-slide');
						$(storyNav.storyNavItem[navPointer]).html(Story[Work.clientId].navigation[navPointer]);
						$(storyNav.storyNavItemHref[navPointer]).attr('href', Story[Work.clientId].navigationLinks[navPointer]);
					}
					$(storyNav.storyNavItem[navPointer]).addClass('story-nav-item');
					$(storyNav.storyNavItem[navPointer]).html(Story[Work.clientId].navigation[navPointer]);
					$(storyNav.storyNavItemHref[navPointer]).attr('href', Story[Work.clientId].navigationLinks[navPointer]);
				}
				Work.closeStoryBtn.css('display','inline-block');
				$('.' + Work.clientId).addClass('story-reveal');//reveal the corresponding client story via the clientId
				setTimeout(function(){
					Work.clientStory.fadeIn(1500);
					Work.storyNavContainer.fadeIn(1500);
				},100);
				if(Work.clientId == 'vpdSite'){
					setTimeout(function(){
						Work.cdImageContainer.addClass('cd-image-appear');
					},1000);
				}
				Work.helperFunctions(); //Reinitalize the smooth slider
			}
		}
	};
	Work.init();
	window.Work = Work;
});