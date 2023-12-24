$(document).ready(function(){

	var iShow = Math.ceil($('.activities').length/1) -1;
	var curIndex = 0;

	function startSlider(){
		var amt = $('.activities').length * 100;
		var elImg = $('.activities');
		var elSingle = $('.scroll-wraper');
		elImg.css('width',100 * (100/400)+'%');
		elSingle.css('width',amt+'%');
	}

	startSlider();

	function clickPrevious(){
		$('.arrow-left').click(function(){
			if(curIndex > 0){
			curIndex--;
			var elOffX = $('.activities').eq(curIndex*1).offset().left - $('.scroll-wraper').offset().left; 
			$('.sliderScroll').animate({'scrollLeft':elOffX+'px'})
			}
		})
	}

	clickPrevious()

	function clickNext(){
		$('.arrow-right').click(function(){
			if(curIndex < iShow){
			curIndex++;
			if(curIndex == iShow)
				curIndex = 0;
			var elOffX = $('.activities').eq(curIndex*1).offset().left - $('.scroll-wraper').offset().left; 
			$('.sliderScroll').animate({'scrollLeft':elOffX+'px'})
			}
		})
	}

	clickNext();

	/* Slider de imagens normal */

	 var amount = $('.img-slider').length;
	 var curNext = 0;
	 var delay = 3000;

	 function initSlider(){
	 	$('.img-slider').eq(0).fadeIn()

	 	setInterval(function(){
	 		sliderFade();
	 	},delay)
	 }

	 initSlider();

	 function sliderFade(){
	 	$('.img-slider').eq(curNext).fadeOut(2000)
	 	curNext++;
	 	if(curNext == amount)
	 		curNext = 0;
	 	$('.img-slider').eq(curNext).fadeIn(2000)
	 }


})	