jQuery(function($){
	var storyNav = {
		init: function() {
			this.setupElements();
			this.bindEvents();
		},
		setupElements: function() {
			// vars
			this.clientId = "";
			// elements
			this.window = $(window);
			this.storyNavContainer = $('.story-nav-container');
			this.storyNavContainerItems = $('.story-nav-container .story-nav');
			this.storyNavItem = $('.story-nav-container .story-nav div');
			this.storyNavItemHref = $('.story-nav-container .story-nav a');
		},
		bindEvents: function() {
			$('#work').on('scroll', this.windowScrollHandler);
			this.storyNavItem.on('click', this.storyNavItemClickHandler)
		},
		
		/////////////
		// Handlers
		////
		storyNavItemClickHandler: function(){
			console.log('selection: ' + storyNav.storyNavItem.html());
			storyNav.storyNavItem.removeClass('current-slide')
			$(this).addClass('current-slide');
		}
	};
	storyNav.init();
	window.storyNav = storyNav;
	console.log('selection: ' + storyNav.storyNavItem.html());
});