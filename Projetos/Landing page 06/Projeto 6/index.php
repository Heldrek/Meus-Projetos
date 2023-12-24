<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Landing page 06</title>
	<link rel="shortcut icon" type="image-x/png" href=""/>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Bebas+Neue&family=DM+Serif+Display&family=Dancing+Script&family=EB+Garamond&family=Geologica&family=Hind+Siliguri:wght@500&family=Josefin+Sans:ital,wght@0,500;1,400&family=Kanit:wght@300&family=Lato&family=Montserrat&family=Nunito+Sans:wght@300&family=Open+Sans:wght@300;700;800&family=Oswald&family=PT+Sans&family=Red+Hat+Display:wght@400;500;700&family=Righteous&family=Roboto+Condensed:wght@300&family=Roboto+Slab:wght@300&family=Roboto:wght@300;400&family=Rowdies:wght@300&family=Sigmar&family=Teko:wght@500&family=Ubuntu:ital@1&family=Ysabeau:wght@500&display=swap" rel="stylesheet">
</head>
<body>	

	<header>
		<nav class="desktop">
			<ul>
				<li><a href="home">Inicio</a></li>
				<li><a href="landing">Landing</a></li>
				<li><a href="about">Sobre</a></li>
				<li><a href="team">Time</a></li>
				<li><a href="contact">Contato</a></li>
				<div class="clear"></div>
			</ul>
		</nav><!--desktop-->

			<nav class="mobile">
			<ul>
				<li><a href="home">Inicio</a></li>
				<li><a href="landing">Landing</a></li>
				<li><a href="about">Sobre</a></li>
				<li><a href="team">Time</a></li>
				<li><a href="contact">Contato</a></li>
				<div class="clear"></div>
			</ul>
		</nav><!--mobile-->
	</header>

<?php
	if(isset($_GET['url'])){
		if(file_exists($_GET['url']).'.html'){
			include($_GET['url'].'.html');
		}else{
			include('404.html');
		}
	}else{
		include('home.html');
	}
?>

	<footer>
		<div class="creation">
			<a href="">web templates</a>
			<p>Todos os direitos reservados.</p>
			<a href="">Copyright - ltda 2023</a>
			<div class="clear"></div>
		</div><!--criation-->

		<div class="map">
			<h2>Nosso Endereço</h2>
		<div class="map-wraper">
		<div id="mapa"></div><!--mapa-->
		</div><!--map-wraper-->
		<div><!--map-->
		<div class="clear"></div>
	</footer>

<script src="js/jquery.js"></script>
<script src="js/functions.js"></script>
<script
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDbFukBCnxUpkSWB5Ae__QxWDNHE8a0Zp8&callback=Function.prototype">
</script>
<script src="js/menuForm.js"></script>
</body>
</html>