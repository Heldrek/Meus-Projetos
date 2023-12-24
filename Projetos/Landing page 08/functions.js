$(function(){

			 abrirMenu();	
	function abrirMenu(){
		$('nav.menu-desktop').click(function(e){
			e.stopPropagation();
			$('nav.menu-desktop ul').slideToggle()
		})

		$('nav.menu-desktop ul').click(function(e){
			e.stopPropagation();
		})
	}

	$('nav a').click(function(){
		var href = $(this).attr('href')
		var offSetTop = $(href).offset().top;

		$('html,body').animate({'scrollTop':offSetTop})
		return false;
	})

	/* Slider Scroll */

	var imgMax = $('.types-foods').length;
	var curIndex = 0;
	var imgShow = Math.ceil($('.types-foods').length/1) -1;

	initSlider();
	clickSlider();
	function initSlider(){
		var amt = $('.types-foods').length * 100;
		var elsingle = $('.types-foods');
		var elBoxSize = $('.slider-wraper');
		elsingle.css('width',100 * (100/300)+'%');
		elBoxSize.css('width',amt+'%');

		for(var i = 0; i < imgMax; i++){
			if(i == 0){
				$('.balls').append('<span style="background-color:#b4b4b4;"></span>')
			}else{
				$('.balls').append('<span></span>')
			}
		}

	}

	function clickSlider(){
		var spanIndex = $('.balls span').length;

		$('.arrow-right').click(function(){
			if(curIndex <= imgShow){
				curIndex++;
				if(curIndex > imgShow)
				curIndex = 0;
				var offSetX = $('.types-foods').eq(curIndex).offset().left - $('.slider-wraper').offset().left;
				$('.sliderScroll').animate({'scrollLeft':offSetX+'px'})
			}
		})

		$('.arrow-left').click(function(){
			if(curIndex >= 0){
				curIndex--;
				if(curIndex < 0)
				curIndex = imgShow;
				var offSetX = $('.types-foods').eq(curIndex).offset().left - $('.slider-wraper').offset().left;
				$('.sliderScroll').animate({'scrollLeft':offSetX+'px'})
			}
		})

		$(window).resize(function(){
			$('.sliderScroll').animate({'scrollLeft':0})
		})
	}

	initStorage();
	function initStorage(){

		if(typeof(Storage) !== 'undefined'){
			initialize();
		}else{
			alert('Atualize seu navegador!');
		}

	}

	

	function initialize(){
		if(sessionStorage.getItem('nome') !== null){
			$('.welcome').fadeOut();
			$('.welcome-back').fadeIn();
		}else{
			$('.welcome-back').fadeOut();
			$('.welcome').fadeIn();
			sessionStorage.nome = "Helder";
		}

		$('body,.close-welcome,.close-welcome-back').click(function(){
			$('.welcome,.welcome-back').fadeOut();
		})

		$('.box-welcome,.box-welcome-back').click(function(e){
			e.stopPropagation();
		})

	}

	

})