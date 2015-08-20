<?php // Check if a client site is being called
if(isset($_GET["client"])){
	$client = $_GET["client"];
}else{
	$client = "";
}
?>

<?php //Set a href URL on the home Button
	$url_path = $_SERVER['PHP_SELF'];
	$tokens = explode('/', $url_path);
	$tokens_explode = $tokens[sizeof($tokens)-1];
	$url_path = $tokens_explode;
	if($url_path == "work.php"){
		//$home_link = "href=\"/\" ";
		$home_link = "href=\"/\" ";
	}else{
		$home_link ='';
	}
?>
<script> var clientSite = "<?php echo $client; ?>"; console.log("clientSite: " + clientSite);</script>
	<div class="storyBg"></div>
	<div id="work">
        <div class="siteOverlay">
            <div class="close-bg"></div>
            <div class="website-icons group">
                <div class="close-btn">Close <span>X</span></div>
                <ul>
                    <li siteId="dgmSite" class="site-icon-cta">
                        <figure>
                            <img src="img/dgm-sidebar-thumb.jpg">
                            <figcaption>Mr. 8000</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="img/dgm-sidebar-thumb.jpg">
                            <figcaption>Mr. 8000</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="img/dgm-sidebar-thumb.jpg">
                            <figcaption>Mr. 8000</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="img/dgm-sidebar-thumb.jpg">
                            <figcaption>Mr. 8000</figcaption>
                        </figure>
                    </li>
                </ul>
            </div><!--website-icons-->
        </div>
        <section class="sub-nav">
            <div class="content">
                <h1>WORK</h1>
                <div class="site-indicator">&nbsp;</div>
                <div class="close-story">Close<span>X</span></div>
            </div>
        </section>
        <div class="container-1200 group">
            <section class="sidebar">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
            <!-- <section class="story-nav-container">
                <div class="story-nav">
                	<a><div></div></a>
                    <a><div></div></a>
                    <a><div></div></a>
                    <a><div></div></a>
                    <a><div></div></a>
                    <a><div></div></a>
                    <a><div></div></a>
                </div>
            </section> -->
            <main>
				<?php include('inc/work/workIntro.php'); ?>
				<article id="client-story">	
                	<!--VPD-->
                    <section class="vpdSite">
						<?php include('inc/work/vpdPhase1.php'); ?>
                        <?php include('inc/work/vpdPhase2.php'); ?>
                        <?php include('inc/work/vpdPhase3.php'); ?>
                        <?php include('inc/work/vpdPhase4.php'); ?>
                        <?php include('inc/work/vpdPhase5.php'); ?>
                        <?php include('inc/work/vpdPhase6.php'); ?>
                        <?php include('inc/work/vpdPhase7.php'); ?>
                    </section>
                    <!--DGM-->
                     <section class="dgmSite">
                    	<?php include('inc/work/dgmPhase1.php'); ?>
                        <?php include('inc/work/dgmPhase2.php'); ?>
                        <?php include('inc/work/dgmPhase3.php'); ?>
                    </section>
                </article>
            </main>
            <div class="website-icons group">
                <ul>
                    <li siteId="dgmSite" class="site-icon-cta">
                        <figure>
                            <img src="img/dgm-sidebar-thumb.jpg">
                            <figcaption>Mr. 8000</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="img/dgm-sidebar-thumb.jpg">
                            <figcaption>Mr. 8000</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="img/dgm-sidebar-thumb.jpg">
                            <figcaption>Mr. 8000</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="img/dgm-sidebar-thumb.jpg">
                            <figcaption>Mr. 8000</figcaption>
                        </figure>
                    </li>
                </ul>
            </div><!--website-icons-->
        </div>
        <!--<div class="miscellaneous-container">
        	<div class="container-1200 group">
                <div class="vpd-left-bush"></div>
                <div class="vpd-right-bush"></div>
                <div class="vpd-twig"></div>
            </div>
        </div>-->
    </div>
</body>
</html>