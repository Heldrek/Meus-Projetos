$(document).ready(function(){

	/* Menu */

	$('nav').click(function(){
		$('ul').slideToggle();
	})
	
	/* Slider Scroll */

	var curIndex = 0;
	var delay = 3000;
	var amt;

	initSlider();
	runSlider()
	function initSlider(){
		amt = $('.people').length;
		var elSizeBox = 100 * amt;
		var elContainer = 100 / amt;
		$('.scroll-wraper').css('width',elSizeBox+'%')
		$('.people').css('width',elContainer+'%')
	}

	function runSlider(){
		setInterval(function(){
			curIndex++;
			if(curIndex == amt)
				curIndex = 0;
			goToSlider(curIndex)
		},delay)
	}

	function goToSlider(curIndex){
		var offSetX = $('.people').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;

		$('.slider-scroll').animate({'scrollLeft':offSetX+'px'});

		$(window).resize(function(){
			$('.slider-scroll').animate({'scrollLeft':0})
		})
	}

	var Passing = 0;
	var timer = 3000;
	var amount;

	playSlider();
	syncSlider()
	function playSlider(){
		amount = $('.people-two').length;
		var elSizeBox = 100 * amount;
		var elContainer = 100 / amount;
		$('.wraper-two').css('width',elSizeBox+'%')
		$('.people-two').css('width',elContainer+'%')
	}

	function syncSlider(){
		setInterval(function(){
			Passing++;
			if(Passing == amount)
				Passing = 0;
			letToSlider(Passing)
		},delay)
	}

	function letToSlider(Passing){
		var offSetX = $('.people-two').eq(Passing).offset().left - $('.wraper-two').offset().left;

		$('.scroll-two').animate({'scrollLeft':offSetX+'px'});

		$(window).resize(function(){
			$('.scroll-two').animate({'scrollLeft':0})
		})
	}

	/* Scrolll Dinâmico */

	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetX = $(href).offset().top;

		$('body,html').animate({'scrollTop':offSetX+'px'})

		return false;
	})

	


	cliqueMenuSessaoTwo();
	function cliqueMenuSessaoTwo(){

	$('#clique1').click(function(){
		$('.Description').addClass('exibir');
		$('.Specifications,.Reviews').removeClass('exibir');
		$('.menu-sessao2 a').css('background','white').css('color','black');
		$(this).css('background','#4767C9').css('color','white');
		return false;
	})

	$('#clique2').click(function(){
		$('.Specifications').addClass('exibir');
		$('.Description,.Reviews').removeClass('exibir');
		$('.menu-sessao2 a').css('background','white').css('color','black');
		$(this).css('background','#4767C9').css('color','white');
		return false;
	})

	$('#clique3').click(function(){
		$('.Reviews').addClass('exibir');
		$('.Description,.Specifications').removeClass('exibir');
		$('.menu-sessao2 a').css('background','white').css('color','black');
		$(this).css('background','#4767C9').css('color','white');
		return false;
	})

	$('#clique1').click()

	}

	AOS.init();

})