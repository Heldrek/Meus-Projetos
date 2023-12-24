window.onload = function(){

	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-12.928640,-38.441521),
			scrollwheel:false,
			zoom:15,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		};

		map = new google.maps.Map(document.getElementById("mapa"),mapProp)
	}

	initialize();


	var refresh;
	var el = $('#just2-div a');
	var cta = $('.creation a');
	
}	



