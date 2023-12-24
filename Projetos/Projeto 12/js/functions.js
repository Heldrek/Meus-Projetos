$(document).ready(function(){

	$('.overlay-creation').hover(function(){
		$(this).css('background-color','rgba(0,0,0,0.4)');
	},function(){
		$(this).css('background-color','transparent');
	})

	$('nav.mobile h2').click(function(){
		$('nav.mobile').find('ul').slideToggle()
	})

	Fancybox.bind("[data-fancybox]");

})