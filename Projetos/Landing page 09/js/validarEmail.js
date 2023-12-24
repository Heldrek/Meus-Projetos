// $(document).ready(function(){

	/* Eventos do formulário */
/*
	$('#form_contato').submit(function(){
		var nome = $('input[name=nome]').val();
		var telefone = $('input[name=telefone]').val();
		var email = $('input[name=email]').val();

		if(validarNome(nome) == false){
			aplicarCampoInvalido($('input[name=nome]'))
			return false;
		}else if(validarTelefone(telefone) == false){
			aplicarCampoInvalido($('input[name=telefone]'))
			return false;
		}else if(validarEmail(email) == false){
			aplicarCampoInvalido($('input[name=email]'))
			return false;
		}

		return false;
	})

	$('input[type=text]').focus(function(){
		resetarCampoInvalido($(this))
	})

	/* Funções para validar os campos */
/*
	function validarNome(nome){
		if(nome == '')  
			return false; 

		var amountNome = nome.split(' ').length;
		var splitStr = nome.split(' ');

		if(amountNome >= 2){
			for(var i = 0; i < amountNome; i++){
				if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
				
			}else{
				return false;
			}	

		}

	}else{
		return false;
	}

}
/*
	function validarTelefone(telefone){
		if(telefone == '')
			return false;

		if(telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null)
			return false;
	}

	function validarEmail(email){
		if(email == '')
			return false;

		if(email.match(/^([A-Za-z-9_.]{1,})+@+([a-z-.]{1,})$/) == null){
			return false;
		}
	}

	/* Campos para aplicar campo inválido */
/*
	function aplicarCampoInvalido(el){
		el.css('border','1px solid red');
		el.css('color','red');
		el.val('invalid camp!');
	}

	function resetarCampoInvalido(el){
		el.css('border','0');
		el.css('color','black');
		el.val('');
	}
/*
})