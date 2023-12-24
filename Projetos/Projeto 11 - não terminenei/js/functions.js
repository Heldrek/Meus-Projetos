$(document).ready(function(){

	var CurIndex = 0
	var imgAmt = $('.img-slider').length;
	var delay = 3000;


	comecarSlider();
	function comecarSlider(){
		$('.img-slider').eq(0).fadeIn()

		setInterval(function(){
			playSlider()
		},delay)
	}

	function playSlider(){
		$('.img-slider').eq(CurIndex).fadeOut(2000);
		CurIndex++;
		$('.img-slider').eq(CurIndex).fadeIn(2000);
		if(CurIndex == imgAmt){
			CurIndex = 0;
		$('.img-slider').eq(CurIndex).fadeIn(2000);
		}
	}

})