window.onload = function(){

	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-12.928640,-38.441521),
			scrollwheel:false,
			zoom:15,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp)
	}

	 function addMarker(lat,long,icon,content,click){
 		var latLng = {'lat':lat,'lng':long};

 		var marker = new google.maps.Marker({
 		position:latLng,
 		map:map,
 		icon:icon
 	})

 		var infoWindow = new google.maps.InfoWindow({
 		content:content,
 		maxWidth:200,	
 		pixelOffset: new google.maps.Size(0,8)
 	})

 		if(click == true){
 		google.maps.event.addListener(marker,'click',function(){
 			infoWindow.open(map,marker)
 	})
 		}else{
 		infoWindow.open(map,marker)
 	}
 
 }

	initialize();
	addMarker(-12.928640,-38.441521,'','Nosso endereço',true);

}

