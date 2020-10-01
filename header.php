<body>
	<header>
		<div class="NavEmptyBox"></div>
		<div class="wrapper">
			<div class="header_text_name_left"> Cindy</div>
			<div class="header_text_name_and"> & </div>
			<div class="header_text_name_right"> Ken </div>
			<!-- <div class="logo"><a href="<?php //echo $site_url; 
											?>">#kendy</div> -->
		</div>
		<div class="header_text_belowname"> 26 Jun 2021 </div>
		<div class="header_text_hotelname"><a href="https://www.eohotels.com/"> Eastern & Oriental Hotel </a></div>
		<div class="header_text_belowname"> Penang, Malaysia </div>
		<input id="toggle" class="toggle" type="checkbox">
		<div class="buttonRSVPDesktop">
			<a href="<?php echo $site_url; ?>rsvp">RSVP Here!</a>
		</div>
		<nav class="nav">
			<ul class="nav__list_header">
				<li class="nav__item"><a href="<?php echo $site_url; ?>">Home</a></li>
				<li class="nav__item"><a href="<?php echo $site_url; ?>about">About Us</a></li>
				<li class="nav__item"><a href="<?php echo $site_url; ?>program">Programm</a></li>
				<!-- <li class="nav__item RSVP"><a href="<?php echo $site_url; ?>rsvp">RSVP</a></li> -->
				<li class="nav__item"><a href="<?php echo $site_url; ?>travel">Travel & Accomodation</a></li>
				<li class="nav__item" title="We need your help!"><a href="<?php echo $site_url; ?>organisation">Contribution</a></li>
				<!-- <li class="nav__item"><a href="<?php echo $site_url; ?>secure">Pictures</a></li> -->
			</ul>
		</nav>

		<div class="notice_box"> Please note due to the Covid-19 situation, the wedding could be postponed/cancelled last minute.</div>

		<div class="header_text_belowname"> Days to go... </div>
		<div class="countdown" id="countdown"></div>
	</header>


	<script>
		// Set the date we're counting down to
		// var countDownDate = new Date("May 23, 2020 14:00:00").getTime();
		var countDownDate = new Date("Jun 26, 2021 09:00:00").getTime();

		// Update the count down every 1 second
		var x = setInterval(function() {

			// Get today's date and time
			var now = new Date().getTime();

			// Find the distance between now and the count down date
			var distance = countDownDate - now;

			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Output the result in an element with id="demo"
			document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
				minutes + "m " + seconds + "s ";

			// If the count down is over, write some text 
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("countdown").innerHTML = "Wedding is in progress";
			}
		}, 1000);
	</script>