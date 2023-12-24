$(document).ready(function(){

	var elLi;

	$('nav.menu-mobile ul li').eq(9).click(function(){
		$('ul.sub-menu-mobile-languages').slideToggle();
		if($('nav.menu-mobile ul li').slideDown()){
			$('nav.menu-mobile ul li > a > i').eq(0).css('display','none');
			$('nav.menu-mobile ul li > a > i').eq(1).css('display','inline-block');
		}else if($('nav.menu-mobile ul li').click() == $('ul.sub-menu-mobile-languages').css('display','none')){
			$('nav.menu-mobile ul > li > a > i').eq(1).css('display','none');
			$('nav.menu-mobile ul > li > a > i').eq(0).css('display','inline-block');
		}

		return false;
	})


	openMenu()
	function openMenu(){
		$('nav.menu-mobile > div').click(function(){
		$('.ul-menu-mobile,.btn-x,div.blur-menuzinho').animate({width:'toggle'})
		// $('section.main-header').css('z-index','1');
	})

		$('.ul-menu-mobile').click(function(e){
			e.stopPropagation();
	})

	}

	addElementos()
	function addElementos(){
		var elCarMenu = $('<li><a href="#"><h2><i class="fa fa-shopping-cart" aria-hidden="true"></i></h2><h2>Cart</h2></a></li>').insertAfter('nav.menu-mobile');
		var elSearch = $('<div class="search"><input type="text" name="search"><input type="submit" name="acao" value="Search"></div>').insertAfter('.main-header .center');
	}


	/* Slider após o menu */

	var curIndex = 0;
	var imgAmt = $('.img-slider-main').length;
	var delay =5000;

	initSlider()
	function initSlider(){
		$('.img-slider-main').eq(0).fadeIn()

		for(var i = 0; i < imgAmt; i++){
			if(i == 0){
				$('<span style="background-color:white;"></span>').appendTo('.balls-span');
			}else{
				$('.balls-span').append('<span></span>');
			}
		}

		setInterval(function(){
			sliderMain()
		},delay)
	}

	nextSlider();
	function nextSlider(){
		$('.balls-span span').click(function(){
			$('.img-slider-main').eq(curIndex).stop().fadeOut();
			$('.balls-span span').eq(curIndex).css('background-color','grey').css('width','14px');;
			curIndex = $(this).index();
			$('.img-slider-main').eq(curIndex).stop().fadeIn();
			$(this).css('background-color','white').css('width','25px'); 
		})
	}

	function sliderMain(){
		$('.img-slider-main').eq(curIndex).stop().fadeOut();
		$('.balls-span span').eq(curIndex).css('background-color','grey').css('width','14px');
		curIndex++;
		$('.balls-span span').eq(curIndex).css('background-color','white').css('width','25px');
		$('.img-slider-main').eq(curIndex).stop().fadeIn();
		if(curIndex == imgAmt){
			curIndex = 0;
		$('.balls-span span').eq(curIndex).css('background-color','white').css('width','25px');
		$('.img-slider-main').eq(curIndex).stop().fadeIn(2000)
		}
	}


	clickNext()
	function clickNext(){

		$('.arrow-left i').click(function(){
		$('.img-slider-main').eq(curIndex).stop().fadeOut();
		$('.balls-span span').eq(curIndex).css('background-color','grey').css('width','14px');
		if(curIndex <= imgAmt){
			curIndex--;
		$('.balls-span span').eq(curIndex).css('background-color','white').css('width','25px');
		$('.img-slider-main').eq(curIndex).stop().fadeIn();
		}
		if(curIndex < 0){
			curIndex = imgAmt;
			curIndex--;
		}

		})

		$('.arrow-right i').click(function(){
		$('.img-slider-main').eq(curIndex).stop().fadeOut();
		$('.balls-span span').eq(curIndex).css('background-color','grey').css('width','14px');
		curIndex++;
		$('.balls-span span').eq(curIndex).css('background-color','white').css('width','25px');
		$('.img-slider-main').eq(curIndex).stop().fadeIn();
		if(curIndex >= imgAmt){
			curIndex = 0;
		$('.balls-span span').eq(curIndex).css('background-color','white').css('width','25px');
		$('.img-slider-main').eq(curIndex).stop().fadeIn();
		}
		})

	}


	simpleExecution()
	function simpleExecution(){

		var hoverLink = $('box-to-center-card a:nth-of-type(2) i').eq(1);
		var hoverlink1 = $('box-to-center-card a:nth-of-type(2) i').eq(0);

		$(hoverLink).on({
			mouseenter:()=>{
				$(hoverlink1).css('display','none');
				$(hoverLink).css('display','block').css('color','#DC2F43');
				$(hoverLink).css('border-top','2px solid #DC2F43');
				$(hoverLink).css('border-bottom','2px solid #DC2F43');
				console.log('ola')
		},
			mouseleave:()=>{
				$(hoverlink1).css('display','inline-block');
				$(hoverLink).css('display','none').css('color','#DC2F43');
				$(hoverLink1).css('border-top','2px solid #9AA4BF');
				$(hoverLink1).css('border-bottom','2px solid #9AA4BF');
				console.log('')
		}
		})


		/* Marcar a label do footer */ 
		
		$('.form-footer form label').click(function(){

			$('.form-footer form label i').animate({width:'toggle'});

		})

	}

	

	



})