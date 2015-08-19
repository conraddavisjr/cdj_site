jQuery(function($){ 
	/*var storyBg ={ //store the background URLs for the stories
		vpdIcon:    ['url("../img/vpd-sidebar-thumb.jpg")'],
	}*/
	var Story = {
		vpdSite:{
			switchId: 1,
			storyBg: "vpd-bg",
			siteIndicatorName: "Visnapuu Design",
			siteIndicatorStyle:"vpd-site-indicator",
			navigation: ['Preface', 'Transformations', 'Color Pallete', 'CMS', 'Mobile-Friendly', 'SEO'],
			navigationLinks: ['#vpdPhase1','#vpdPhase2','#vpdPhase3','#vpdPhase4','#vpdPhase5','#vpdPhase6','#vpdPhase7','#vpdPhase8'],
		},
		dgmSite:{
			switchId: 2,
			storyBg: "dgm-bg",
			siteIndicatorName: "Mr.8000",
			siteIndicatorStyle:"dgm-site-indicator",
			navigation: ['CMS', 'Responsive', 'Social Media'],
			navigationLinks: ['#dgmPhase1','#dgmPhase2','#dgmPhase3','#dgmPhase4','#dgmPhase5'],
		}
	};
	window.Story = Story;
});