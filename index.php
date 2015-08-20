<!doctype html>
<html lang="en" class="no-js">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="author" content="Conrad Davis Jr" />
	<link id="page_favicon" href="img/icons/favicon.ico" rel="icon" type="image/x-icon" />
	<link href='http://fonts.googleapis.com/css?family=Cinzel:700|Ubuntu:300italic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/intro.css">
	<script src="js/modernizr.js"></script>
    
	<title>Conrad Davis Jr</title>
</head>
<body>
	<div class="nav-hover-overlay"></div>
	<header class="siteTitle"><a>Conrad Davis Jr</a></header>
	<main>
		<div class="page-marquee"></div>
		<div class="header-spacer"></div>
		<section id="site-intro">
			<div class="introTitleCover"></div>
			<div class="introSubTitleCover"></div>
        	<h1 class="siteTitle">Conrad Davis Jr</h1>
            <div class="horizontal-line"></div>
            <div class="sub-title">Development | Design | UX</div>
            <div class="intro-veil"></div>
        </section>
        <!-- Home Page-->
        <?php include('inc/home.php') ?>
        <!--About-->
        <?php include('inc/about.php') ?>
    </main>
    <!--Slide-in Side Panel-->
    <?php include('inc/additionalPanel.php') ?>
    <!--Work-->
    <?php include('inc/work2.php') ?>
	<!--Contact-->
    <?php include('inc/contact.php') ?>
    <a href="#0" class="info-panel-close">Close</a> <!-- close the info panel section -->
    <nav>
    	<ul>
    		<li><a id="about-btn" href="#about">ABOUT</a></li>
    		<li><a href="#work">WORK</a></li>
    		<!--<li>LAB</li>-->
    		<li><a class="contact-btn" href="#contact">CONTACT</a></li>
    	</ul>
    </nav>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <!--GSAP-->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenMax.min.js"></script>
    <!--GSAP (END)-->
    <script src="js/main.js"></script>
    <script src="js/home.js"></script>
    <script src="js/slidePanel.js"></script>
    <!--styles that can load after page intro-->
    <link href="css/sitePages.css" type="text/css" rel="stylesheet"> 
    <link href="css/work.css" type="text/css" rel="stylesheet">
    <!-- post load func--> 
    <script src="js/classie.js"></script>
    <script src="js/selectFx.js"></script>
    <script src="js/fullscreenForm.js"></script>
    <script>
        (function() {
            var formWrap = document.getElementById( 'fs-form-wrap' );

            [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
                new SelectFx( el, {
                    stickyPlaceholder: false,
                    onChange: function(val){
                       document.querySelector('span.cs-placeholder').style.background = val;
                    }
                });
            } );

            new FForm( formWrap, {
                onReview : function() {
                    classie.add( document.body, 'overview' );
                }
            } );
        })();
    </script>
    <!-- Work Page JS -->
    <link rel="stylesheet" href="css/image-comparison.css">
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/plugins/TextPlugin.min.js"></script>
    <script src="js/image-comparison.js"></script>
    <script src="js/work/vpd.js"></script>
    <script src="js/work/dgm.js"></script>
    <script src="js/work/windowScroller.js"></script>
    <script src="js/work/storyNav.js"></script>
    <script src="js/work/story.js"></script>
    <script src="js/work.js"></script>
    <!-- Work Page JS (END) -->
</body>
</html>