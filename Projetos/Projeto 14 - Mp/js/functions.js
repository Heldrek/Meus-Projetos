$(document).ready(function(){

	/* Cliqque abrir menu */

	$('nav.geral h2').click(function(){
		$('nav.geral').find('ul').animate({width:'toggle'});
	})

	/* Acima abrir menu */

	var amt;
	var curIndex = 0;
	var delay = 3000;

/*	Funções do Slide */

	initSlider()
	function initSlider(){
		amt = $('.authors').length;
		var elContent = $('.authors');
		var elSingle = $('.scroll-wraper');
		var elMult = 100 * amt;
		var elDiv = 100 / amt;

		elContent.css('width',elDiv+'%');
		elSingle.css('width',elMult+'%');

		for(var i = 0; i < amt; i++){
			if(i == 0){
				$('.balls-span').append('<span style="background-color:#333;"></span>');
			}else{
				$('.balls-span').append('<span></span>');
			}

		}
	};

	runSlider()
	function runSlider(){
		setInterval(function(){
			if(curIndex >= 0){
				curIndex++;
				if(curIndex >= amt)
					curIndex=0;
				  goToSlide(curIndex)
			}
		},delay)
	}

	function goToSlide(curIndex){

		var elOffX = $('.authors').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
		$('.balls-span span').css('background-color','#999');
		$('.balls-span span').eq(curIndex).css('background-color','#333')
		$('.slider-scroll').animate({'scrollLeft':elOffX})

		$(document).resize(function(){
			$('.slider-scroll').animate({'scrollLeft':0})
		})
	}

	prevClick()
	function prevClick(){
		$('.arrow-left').click(function(){
			if(curIndex <= amt){
				curIndex--;
				var elOffX = $('.authors').eq(curIndex*1).offset().left - $('.scroll-wraper').offset().left;
				$('.balls-span span').css('background-color','#999');
				$('.balls-span span').eq(curIndex).css('background-color','#333')
				$('.slider-scroll').animate({'scrollLeft':elOffX});
				if(curIndex < 0)
					curIndex = amt;
				
			}
		})
	}

	nextClick();
	function nextClick(){
		$('.arrow-right').click(function(){
			if(curIndex >= 0){
				curIndex++;
				if(curIndex >= amt)
					curIndex=0;

				var elOffX = $('.authors').eq(curIndex*1).offset().left - $('.scroll-wraper').offset().left;
				$('.balls-span span').css('background-color','#999');
				$('.balls-span span').eq(curIndex).css('background-color','#333')
				$('.slider-scroll').animate({'scrollLeft':elOffX});
			}

		})
	}

	clickSpan()
	function clickSpan(){
		$('.balls-span span').click(function(){
			$('.balls-span span').css('background-color','#999');
			curIndex = $(this).index();
			var elOffX = $('.authors').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
			$(this).css('background-color','#333')
			$('.slider-scroll').animate({'scrollLeft':elOffX});
		})
	}

});