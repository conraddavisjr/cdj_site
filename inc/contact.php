<div id="contact">
    <script src="js/modernizr.custom.js"></script>
    <div class="contact-inner-container">
        <div class="fs-form-wrap" id="fs-form-wrap">
        	<div id="form-messages"></div>
            <div id="form-messages2"></div>
            <form id="contactForm" class="fs-form fs-form-full" autocomplete="off" method="post" action="mailer.php">
                <ol class="fs-fields">
                    <li>
                        <label class="fs-field-label fs-anim-upper" for="name">Hi! What's your name?</label>
                        <input class="fs-anim-lower" id="name" name="name" type="text" placeholder="My Name is..." required/>
                    </li>
                    <li>
                        <label class="fs-field-label fs-anim-upper" for="email" data-info="I won't send you spam, we promise...">What's your email address?</label>
                        <input class="fs-anim-lower" id="email" name="email" type="email" placeholder="email@emailGoes.here" required/>
                    </li>
                    <li data-input-trigger>
                        <label class="fs-field-label fs-anim-upper" for="siteGoal" data-info="This will help me know what kind of service you need">What's your priority for your new website?</label>
                        <div class="fs-radio-group fs-radio-custom clearfix fs-anim-lower">
                            <span><input id="q3b" name="siteGoal" type="radio" value="Sales"/><label for="q3b" class="radio-conversion">Sales</label></span>
                            <span><input id="q3c" name="siteGoal" type="radio" value="Social Media"/><label for="q3c" class="radio-social">Social Media</label></span>
                            <span><input id="q3a" name="siteGoal" type="radio" value="Mobile Market"/><label for="q3a" class="radio-mobile">Mobile market</label></span>
                        </div>
                    </li>
                    <li data-input-trigger>
                        <label class="fs-field-label fs-anim-upper" data-info="I'll check out sites in your industry when I contact you">Please Select Your Industry</label>
                        <select class="cs-select cs-skin-boxes fs-anim-lower" name="industry">
                            <option value="" disabled selected>Your Industry</option>
                            <option value="url('img/contactIcons/ad.png') #588c75" data-class="industry-ad">Advertising</option>
                            <option value="url('img/contactIcons/apparel.png') #b0c47f" data-class="industry-apparel">Apparel & Accessories</option>
                            <option value="url('img/contactIcons/beauty.png') #F395D5" data-class="industry-beauty">Beauty</option>
                            <option value="url('img/contactIcons/consulting.png') #f3ae73" data-class="industry-consulting">Consulting</option>
                            <option value="url('img/contactIcons/defence.png') #E8994B" data-class="industry-defence">Defence</option>
                            <option value="url('img/contactIcons/education.png') #FFF6D0" data-class="industry-education">Education</option>
                            <option value="url('img/contactIcons/energy.png') #FFFD3D" data-class="industry-energy">Energy</option>
                            <option value="url('img/contactIcons/entertainment.png') #62ECE6" data-class="industry-entertainment">Entertainment & Leisure</option>
                            <option value="url('img/contactIcons/financial.png') #ADF58F" data-class="industry-financial">Financial Services</option>
                            <option value="url('img/contactIcons/food.png') #D25A45" data-class="industry-food">Food & Beverage</option>
                            <option value="url('img/contactIcons/health.png') #FF3F3F" data-class="industry-health">Health</option>
                            <option value="url('img/contactIcons/legal.png') #B6914E" data-class="industry-legal">Legal</option>
                            <option value="url('img/contactIcons/manufacturing.png') #f9eec0" data-class="industry-manufacturing">Manufacturing</option>
                            <option value="url('img/contactIcons/mechanical.png') #F7C7A9" data-class="industry-mechanical">Mechanical</option>
                            <option value="url('img/contactIcons/video.png') #525BFF" data-class="industry-video">Motion Picture & Video</option>
                            <option value="url('img/contactIcons/realEstate.png') #F2D255" data-class="industry-realEstate">Real Estate</option>
                            <option value="url('img/contactIcons/retail.png') #BBDB4D" data-class="industry-retail">Retail & Wholesale</option>
                            <option value="url('img/contactIcons/services.png') #faf4d4" data-class="industry-services">Services</option>
                            <option value="url('img/contactIcons/sports.png') #FFBF33" data-class="industry-sports">Sports</option>
                            <option value="url('img/contactIcons/hardwareSoftware.png') #BDF1F1" data-class="industry-hardwareSoftware">Hardware/Software</option>
                        </select>
                    </li>
                    <li>
                        <label class="fs-field-label fs-anim-upper" for="message">Describe how you imagine your new website</label>
                        <textarea class="fs-anim-lower" id="message" name="message" placeholder="Describe here"></textarea>
                    </li>
                    <li>
                        <label class="fs-field-label fs-anim-upper" for="budget">What's your budget?</label>
                        <input class="fs-mark fs-anim-lower" id="budget" name="budget" type="number" placeholder="1000" step="100" min="100"/>
                    </li>
                </ol><!-- /fs-fields -->
                <button class="fs-submit" type="submit">Send answers</button>
            </form><!-- /fs-form -->
        </div><!-- /fs-form-wrap -->
    </div><!-- /container -->
    <div class="thank-you-message"></div>
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
                    classie.add( document.body, 'overview' ); // for demo purposes only
                }
            } );
        })();
    </script>
</div>