$(document).ready(function(){

	$('nav.general').click(function(){
		$('nav.general').find('ul').animate({width:'toggle'})
	})

	$('.general a').click(function(){

		var mTg = $(this).attr('moveup');
		var elOffY = $(mTg).offset().top;

		$('html,body').animate({'scrollTop':elOffY-60})

		return false;
	})

	/* Eventos do formul-ario */

	$('#form_contato').submit(function(){
		var nome = $('input[name=nome]').val();
		var email = $('input[name=email]').val();

		if(validarNome(nome) == false){
			aplicarCampoInvalido($('input[name=nome]'));
		}else if(validarEmail(email) == false){
			aplicarCampoInvalido($('input[name=email]'));
		}else{
			alert('Seja ben-vindo(a)');
		}
		return false;
	})

	$('input[type=text]').focus(function(){
		resetarCampoInvalido($('input[type=text]'));
	})

	/* Funções dos campos dos formulários */

	function validarNome(nome){
		if(nome == '')
			return false;

		var amt = nome.split(' ').length;
		var splitStr = nome.split(' ');

		for(var i = 0; i < amt; i++){
			if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){

			}else{
				return false;
			}
		}

	}

	function validarEmail(email){
		if(email == '')
			return false;

		if(email.match(/^([a-z-A-Z-9_.]{1,})+@+([a-z-.]{1,})$/) == null){
			return false
		}		
	}

	function aplicarCampoInvalido(el){
		el.css('border','2px solid red');
		el.css('color','red');
		el.val('Campo Inválido');
	}

	function resetarCampoInvalido(el){
		el.css('border','2px solid #ccc');
		el.css('color','black');
		el.val('');
	}
})