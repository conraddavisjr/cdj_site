//dgm JS
jQuery(function($){
	var dgm = {
		init: function() {
			this.setupElements();
			this.bindEvents();
			this.gsap();
		},
		setupElements: function() {
			// vars
			
			// elements
		},
		bindEvents: function() {
			
		},
		
		gsap: function(){
			var dgmPBegin = $('#dgmPBegin'),
				dgmOverlayCover = $('.overlay-cover'),
				dgmCmsSidebar = $('.dgm-cms-sidebar'),
				dgmCmsSidebarPara = $('.dgm-cms-sidebar p'),
				photoGallery = $('.photo-gallery');
				locationPre = $('.location-pre');
				dgmCmsBg = $('.dgm-cms-bg');
				dgmPEnd = $('#dgmPEnd');
				//btns
				playBtn = $(".dgmPlayBtn"),
				restartBtn = $(".dgmRestartBtn"),
				tl = new TimelineLite({onUpdate:updateSlider});	
			
			console.log('sidebar test: ' + dgmCmsSidebarPara.text());
			tl.to(dgmCmsSidebar, 1, {backgroundImage:'none'})
			  .to(dgmCmsBg, 0.2, {border:'0px dashed red'})
			  .to(dgmPBegin, 1, {alpha:0}, "-=1")
			  .to(dgmCmsSidebarPara, 0.3, {alpha:1}, "-=0.5")
			  .to(dgmOverlayCover, 0.5, {alpha:0}, "+=1.5")
			  .to(dgmCmsSidebarPara, 0.4, {text:"Let's add a photo Gallery."}, "+=1.5")
			  .to(dgmOverlayCover, 0.5, {alpha:1}, "-=0.3")
			  .to(dgmCmsSidebar, 1, {width:'50%'})
			  .to(dgmCmsSidebar, 1, {backgroundImage:'url(img/pGalleryBg.jpg)'})
			  .to(dgmCmsSidebarPara, 0.3, {alpha:0}, "-=1")
			  .to(dgmCmsSidebar, 1, {backgroundImage:'url(img/pGalleryBg2.jpg)'}, "-=0.5")
			  .to(dgmOverlayCover, 0.5, {alpha:0})
			  .to(dgmCmsSidebar, 1, {backgroundImage:'url(img/pGalleryBg2-hover.jpg)'})
			  .to(photoGallery, 0.8, {border:'dashed 5px red', backgroundColor: '#A00000'}, "-=1.5")
			  .to(photoGallery, 1, {backgroundImage:'url(img/pgalleryAddition.jpg)'}, "+=0.5")
			  .to(photoGallery, 0.3, {border:'dashed 0px red', top:'60%', height:'42px'}, "-=1")
			  .to(dgmCmsSidebar, 1, {width:'28.5%'})
			  .to(dgmCmsSidebarPara, 0.5, {text:"Just like that, his gallery is connected to his event", alpha:1}, "+=0.5")
			  .to(dgmCmsSidebar, 0.5, {backgroundImage:"none"}, "-=0.5")
			  .to(locationPre, 0.5, {zIndex:8, alpha:1}, "+=2.5")
			  .to(locationPre, 0.5, {zIndex:2, alpha:0}, "+=2")
			  .to(dgmCmsSidebarPara, 0.5, {alpha:0})
			  .to(dgmCmsSidebar, 1, {backgroundImage:'url(img/dgm-gmap.jpg)'}, "-=0.5")
			  .to(dgmOverlayCover, 0.5, {alpha:1}, "-=1")
			  .to(dgmCmsSidebarPara, 0.5, {alpha:1, color:'white', text:"Simply enter the coords!"}, "+=0.5")
			  .to(dgmCmsSidebar, 0.3, {backgroundImage:'url(img/dgm-mapOver.jpg)'}, "-=1")
			  .to(dgmOverlayCover, 0.5, {alpha:0}, "+=1")
			  .to(dgmCmsBg, 0.2, {border:'4px dashed red', background:'transparent'}, "-=0.5")
			  .to(dgmCmsBg, 0.2, {border:'4px dashed red', backgroundColor:'rgba(255,50,50,0.8)'}, "-=0.5")
			  .to(dgmCmsBg, 0.2, {backgroundColor:'rgba(255,50,50,0.2)'})
			  .to(dgmCmsBg, 0.2, {backgroundColor:'rgba(255,50,50,0.2)'}, "+=1")
			  .to(dgmCmsBg, 0.5, {backgroundImage:'url(img/dgm-google-map.jpg)'})
			  .to(dgmCmsBg, 0.2, {border:'0px dashed red'}, "-=0.5")
			  .to(dgmCmsSidebarPara, 0.5, {text:"The website does the rest!"}, "+=0.5")
			  .to(dgmPEnd, 1.5, {alpha:1, zIndex:10}, "+=2.5")
			  
			  
			
			//Stop the the presentation from auto starting.
			tl.stop();
				  
			$( "#slider" ).slider({
					range: false,
					min: 0,
					max: 100,
					step:.1,
					slide: function ( event, ui ) {
						tl.progress( ui.value/100 ).pause();
					}
			 });	
					
			function updateSlider() {
				$("#slider").slider("value", tl.progress() * 100);
			} 				  
					
			playBtn.click(function(){
				//Play the tween forward from the current position.
				//If tween is complete, play() will have no effect
				tl.play();
			});
			restartBtn.click(function(){
				//Start playing from a progress of 0.
				tl.restart();
			});
			
			//show the demoBackground div after DOM is ready and all images loaded
			TweenLite.set($("#presentation-stage"), {visibility:"visible"});
		},
		
		//Event Handlers
		
	};
	dgm.init();
	window.dgm = dgm;
});
