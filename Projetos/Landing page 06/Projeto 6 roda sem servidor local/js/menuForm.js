$(function(){

	$('nav.mobile').click(function(){
		$('nav.mobile').find('ul').slideToggle();
		return false;
	})

/*
	verificarCliqueMenu();

	function verificarCliqueMenu(){
		$('a').click(function(){
			var href = $(this).attr('href')

			$.ajax({
				'url':href,
				'success':function(data){
					$('body').html(data)
				}
			})

			return false;
		})
	}
*/

	clickColor()
	function clickColor(){

		$('nav ul li').click(function(){
	
				$('nav ul li').removeClass('color-menu');
				$(this).addClass('color-menu');
				
			
		})


	}

	/*
	$(window).resize(function(){
			clearTimeout(refresh)
	refresh = setTimeout(function(){
			location.href = "";
		},1000)
	})
*/
/*
	$(el).click(function(e){
		e.preventDefault();
		return false;
	})

	$(cta).click(function(e){
		e.preventDefault();

	}).css('cursor','auto')
	
	
	console.log("Inner width "+cta.innerWidth());
	console.log("outer width "+cta.outerWidth(true));

*/

	/* Eventos do formulário */

	$('#form_contato').submit(function(e){
		e.preventDefault();
		var nome = $('input[name=nome]').val();
		var email = $('input[name=email]').val();
		var telefone = $('input[name=telefone]').val();

		if(verificarNome(nome) == false){
			aplicarCampoIncorreto($('input[name=nome]'))
			return false;
		}else if(verificarEmail(email) == false){
			aplicarCampoIncorreto($('input[name=email]'))
			return false;
		}else if(verificarTelefone(telefone) == false){
			aplicarCampoIncorreto($('input[name=telefone]'))
			return false;
		}

		return false;
	})

	$('input[type=text]').focus(function(){
		resetarCampoIncorreto($(this))
	})

	/* FUNÇÕES PARA VERIFICAR OS CAMPOS */

	function verificarNome(nome){
		if(nome == '')
			return false

		var amount = nome.split(' ').length;
		var splitStr = nome.split(' ');

		if(amount >= 2){
		for(var i = 0; i < amount; i++){
			if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/) == null){
				return false;
		}
	}
}

}

	function verificarEmail(email){
		if(email == '')
			return false;

		if(email.match(/^([A-Za-z-9._]{1,})+@+([A-Za-z.]{1,})$/) == null){
			return false;
		}
	}

	function verificarTelefone(telefone){
		if(telefone == '')
			return false
		
		if(telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null){
			return false;
	}
}

	/*FUNÇÕES PARA SETAR OS CAMPOS */

	function aplicarCampoIncorreto(el){
		el.css('border','2px solid red');
		el.css('color','red');
		el.val('Campo incorreto!');
	}

	function resetarCampoIncorreto(el){
		el.css('border','0');
		el.css('color','black');
		el.val('');
	}
	
	/* FORMA DO TELEFONE */

	
	
})