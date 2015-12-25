//VPD JS
var windowScroller = {
	init: function() {
		this.setupElements();
		this.bindEvents();
	},
	setupElements: function() {
		// vars
		
		// elements
		this.window = $(window);
		this.phase1 = $('#phase1');
		this.phase2 = $('#phase2');
		this.phase3 = $('#phase3');
		this.marginTop = 160;
		//vpd
		this.vpdPhase1 = $('#vpdPhase1');
		this.vpdPhase2 = $('#vpdPhase2');
		this.vpdPhase3 = $('#vpdPhase3');
		this.vpdPhase4 = $('#vpdPhase4');
		this.vpdPhase5 = $('#vpdPhase5');
		this.vpdPhase6 = $('#vpdPhase6');
		this.vpdPhase4Inner = $('.article-container');
		this.vpdPhase5Inner = $('#vpdPhase5 .mobile-devices-container');
		this.vpdPhase6Inner = $('.inner-container .left-col span');
		//dgm
		this.dgmPhase1 = $('#dgmPhase1');
		this.dgmPhase2 = $('#dgmPhase2');
		this.dgmPhase3 = $('#dgmPhase3');
		this.dgmPhase2Inner = $('#dgmPhase2 .mobile-devices-container');
		
	},
	bindEvents: function() {
		$('#work').on('scroll', this.windowScrollHandler);
	},
		
	/////window Scroller Handler
	windowScrollHandler: function(){
		var scrollTop = $(window).scrollTop() + Work.navHeader.height() + Work.subNav.height()+ windowScroller.marginTop;
		console.log("storyNav.storyNavItem: " + $(storyNav.storyNavItem[2]).html());
		console.log("Work.currentStory: " + Work.currentStory);
		if(Work.currentStory == 1){
			
			/*
			///////VPD
			*/
			var phase1Position = windowScroller.vpdPhase1.offset();
			if (scrollTop >= phase1Position.top) {
				storyNav.storyNavContainerItems.find('div').removeClass('current-slide current-slider');
				$(storyNav.storyNavItem[0]).addClass('current-slider');
			} else {
				$(storyNav.storyNavItem[0]).removeClass('current-slide, current-slider');
			}
			var phase2Position = windowScroller.vpdPhase2.offset();
			if (scrollTop >= phase2Position.top) {
				storyNav.storyNavContainerItems.find('div').removeClass('current-slide current-slider');
				$(storyNav.storyNavItem[1]).addClass('current-slider');
			} else {
				$(storyNav.storyNavItem[1]).removeClass('current-slide, current-slider');
			}
			//
			var phase3Position = windowScroller.vpdPhase3.offset();
			if (scrollTop >= phase3Position.top) {
				storyNav.storyNavContainerItems.find('div').removeClass('current-slide current-slider');
				$(storyNav.storyNavItem[2]).addClass('current-slider');
			} else {
				$(storyNav.storyNavItem[2]).removeClass('current-slide, current-slider');
			}
			//animate the CMS section
			var phase4Position = windowScroller.vpdPhase4.offset();
			if (scrollTop >= phase4Position.top) {
				windowScroller.vpdPhase4Inner.addClass('p4-in');
				storyNav.storyNavContainerItems.find('div').removeClass('current-slide current-slider');
				$(storyNav.storyNavItem[3]).addClass('current-slider');
			} else {
				windowScroller.vpdPhase4Inner.removeClass('p4-in');
				$(storyNav.storyNavItem[3]).removeClass('current-slide, current-slider');
			}
			//animate the Responsive (mobile devices) section
			var phase5Position = windowScroller.vpdPhase5.offset();
			if (scrollTop >= phase5Position.top) {
				windowScroller.vpdPhase5Inner.addClass('p5-in');
				storyNav.storyNavContainerItems.find('div').removeClass('current-slide current-slider');
				$(storyNav.storyNavItem[4]).addClass('current-slide');
			} else {
				windowScroller.vpdPhase5Inner.removeClass('p5-in');
				$(storyNav.storyNavItem[4]).removeClass('current-slide');
			}
			//animate the seo chart
			var phase6Position = windowScroller.vpdPhase6.offset();
			if (scrollTop >= phase6Position.top) {
				windowScroller.vpdPhase6Inner.addClass('fill-chart');
				storyNav.storyNavContainerItems.find('div').removeClass('current-slide current-slider');
				$(storyNav.storyNavItem[5]).addClass('current-slide');
			} else {
				windowScroller.vpdPhase6Inner.removeClass('fill-chart');
				$(storyNav.storyNavItem[5]).removeClass('current-slide');
			}
			///////
		}
		if(Work.currentStory == 2){
			/*
			///////DGM
			*/
			
			var phase1Position = windowScroller.dgmPhase1.offset();
			console.log("top value: " + phase1Position.top);
			if (scrollTop >= phase1Position.top) {
				storyNav.storyNavContainerItems.find('div').removeClass('current-slide current-slider');
				$(storyNav.storyNavItem[0]).addClass('current-slide');
			} else {
				$(storyNav.storyNavItem[0]).removeClass('current-slide');
			}
			//animate the Responsive (mobile devices) section
			var phase2Position = windowScroller.dgmPhase2.offset();
			console.log("top value: " + phase2Position.top);
			if (scrollTop >= phase2Position.top) {
				windowScroller.dgmPhase2Inner.addClass('dgm-p2-in');
				storyNav.storyNavContainerItems.find('div').removeClass('current-slide current-slider');
				$(storyNav.storyNavItem[1]).addClass('current-slide');
			} else {
				windowScroller.dgmPhase2Inner.removeClass('dgm-p2-in');
				$(storyNav.storyNavItem[1]).removeClass('current-slide');
			}
			//Scroll to Social Media
			var phase3Position = windowScroller.dgmPhase3.offset();
			console.log("top value: " + phase3Position.top);
			if (scrollTop >= phase3Position.top) {
				storyNav.storyNavContainerItems.find('div').removeClass('current-slide current-slider');
				$(storyNav.storyNavItem[2]).addClass('current-slide');
			} else {
				$(storyNav.storyNavItem[2]).removeClass('current-slide');
			}
		}
	},
	
};
windowScroller.init();
window.windowScroller = windowScroller;