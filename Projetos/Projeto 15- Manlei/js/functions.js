$(document).ready(function(){

	/* Eventos do menu */

	$('nav.mobile i').click(function(){
		$('nav.mobile').find('ul').slideToggle();      
	})

	$('nav ul a').click(function(){

		var move = $(this).attr('move');
		var scrollTop = $(move).offset().top;	
		$('html,body').animate({'scrollTop':scrollTop+40});
		return false;	
	});

	/* Funçoes do slider */

	var imgMySelf = $('.image_side2_myself').length;
	var indexImg = 0;
	var delay = 3000;

	iniciarSlider()
	function iniciarSlider(){

		$('.image_side2_myself').eq(0).fadeIn();

		setInterval(function(){
			organizandoSlider()
		},delay)

	}

	function organizandoSlider(){
		$('.image_side2_myself').eq(indexImg).stop().fadeOut(1000);
		indexImg++;
		$('.image_side2_myself').eq(indexImg).stop().fadeIn(1000);
		if(indexImg == imgMySelf){
			indexImg = 0;
		$('.image_side2_myself').eq(indexImg).stop().fadeIn(1000);
		}
	}

	/* Funções da nossa scroll */

	var amt;
	var timer = 3000;
	var indexScroll = 0;

	calcularScroll()
	function calcularScroll(){

		amt = $('.pessoa_scroll').length;
		var elContent = 100 / amt;
		var elSingle = 100 * amt;
		$('.scroll_wraper').css('width',elSingle+'%');
		$('.pessoa_scroll').css('width',elContent+'%');
		
		for(var i = 0; i < amt; i++){
			if(i == 0){
				$('.balls_span').append('<span style="background-color:#1C0051;"></span>');
			}else{
				$('.balls_span').append('<span></span>');
			}
		}

		setInterval(function(){
				indexScroll++;
			if(indexScroll == amt){
				indexScroll=0;
			}

			configurarScroll(indexScroll);
		},timer);

	}

	mudarSpan();
	function mudarSpan(){
		$('.balls_span span').click(function(){
			indexScroll = $(this).index();
			$('.balls_span span').css('background-color','#ACC6C7');
			$(this).css('background-color','#1C0051')
			var elOffX = $('.pessoa_scroll').eq(indexScroll).offset().left - $('.scroll_wraper').offset().left;
			$('.scroll_animate').stop().animate({'scrollLeft':elOffX});
		})
	}

	function configurarScroll(indexScroll){

		var elOffX = $('.pessoa_scroll').eq(indexScroll).offset().left - $('.scroll_wraper').offset().left;
			$('.balls_span span').css('background-color','#ACC6C7');
			$('.balls_span span').eq(indexScroll).css('background-color','#1C0051');
			$('.scroll_animate').stop().animate({'scrollLeft':elOffX});

			$(window).resize(function(){
				$('.scroll_animate').stop().animate({'scrollLeft':0});	
			})

	}; 



});



