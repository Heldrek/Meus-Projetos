$(document).ready(function(){

	$('#form_contato').submit(function(e){
		e.preventDefault()
		var nome = $('input[name=nome]').val();
		var email = $('input[name=email]').val();
		var telefone = $('input[name=telefone]').val();

		if(validarNome(nome) == false){
			aplicarCampoInvalido($('input[name=nome]'));
		}else if(validarEmail(email) == false){
			aplicarCampoInvalido($('input[name=email]'));
		}else if(validarTelefone(telefone) == false){
			aplicarCampoInvalido($('input[name=telefone]'));
		}

		return false;
	})

	$('input[type="text"]').focus(function(){
		resetarCampoInvalido($(this));
	})


	/* Funções para verificar os campos do formulário */

	function validarNome(nome){
		if(nome == '')
			return false;

		var amount = nome.split(' ').length;
		var splitStr = nome.split(' ');

		if(amount >= 2){
			for(var i = 0; i < amount; i++){

				if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){

				}else{
					return false;
				}

		}

		}
		
	}

	function validarEmail(email){
		if(email == '')
			return false;

		if(email.match(/^([A-a-Z-z-9._]{1,})+@+([a-z.]{1,})$/) == null){
			return false;
		}
	}

	function validarTelefone(telefone){
		if(telefone == '')
			return false;

		if(telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null){
			return false;
		}
	}

	$('input[name=telefone]').mask('(99)99999-9999')

	/* Funções para aplicar e resetar os campos inválidos */

	function aplicarCampoInvalido(el){
		el.css('border','2px solid red');
		el.css('color','red');
		el.val('Campo Inválido');
	}

	function resetarCampoInvalido(el){
		el.css('border','1px solid #ccc');
		el.css('color','#b4b4b4');
		el.val('');
	}




})