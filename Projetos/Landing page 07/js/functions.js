$(function(){

	var menu_mobile = $('header nav.mobile');

	menu_mobile.click(function(){
		$('header nav.mobile ul').css('opacity','1').css('transition','0.7s')
	})

	$('header nav.mobile').click(function(){
		setTimeout(function(){
			$('<li>Extra</li>').appendTo($('header nav.mobile ul'));
		},3000)
	})

	$('header nav.mobile ul a').click(function(e){
		e.preventDefault();
	})

	var button = $('input[type=button]');

	button.click(function(){
		var acao = $('input[type=email]').val();

		var cordenada = acao.split("@");

		if(cordenada[1] == 'hotmail.com'){
			alert("Você deve digitar gmail depois do \"@\".");
		}
	})

	// var addiv = $('footer');

	// addiv.html("<div class\"javascript\"><span>Contato - +55 (71) 99555-0455</p></div>")

	
	
})

window.onload = function(){
	 var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-23.550520,-46.633308),
			scrollwheel:false,
			zoom:8,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa-wraper2"),mapProp);
	}

	initialize();

	setTimeout(function(){
		map.panTo({'lat':-13.033510,'lng':-39.008760})
	},2000);
}