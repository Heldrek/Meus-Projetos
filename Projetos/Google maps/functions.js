$(function(){

	var mapa = $('#mapa');
	var timer;

	mapa.css('width','800').css('height','400').css('background-color','#b4b4b4').css('margin','0 auto')

	$(window).resize(function(){
		clearTimeout(timer);
		timer =	setTimeout(function(){
			location.href = "file:///C:/Meu%20Projetos%20Pr%C3%A1ticos/Meu%20Projetos/Google%20maps/index.html";
		},1000)
		
	})

})

window.onload = function(){

	var map;

	function initialize(){

		var mapProp = {
			center: new google.maps.LatLng(-12.977749,-38.501629),
			srollwheel:false,
			zoom:8,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById('mapa'),mapProp)

	}

	setTimeout(function(){
		map.panTo({'lat':-22.906847,'lng':-43.172897})
	},3000)

	initialize();

}