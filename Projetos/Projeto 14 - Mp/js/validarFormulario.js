$(document).ready(function(){

$('#form_only').submit(function(){

if(formularioPreenchido()){
		var form = $('#form_only');
$('#form_only').ajaxSubmit({
	beforeSubmit: function(){
		form.find('input[type=submit]').attr('disabled','true');
		form.find('input[type=submit]').attr('value','Carregando');
		form.find('input[type=submit]').animate({'opacity':'0.4'});
	},
	success: function(data){
		alert('Obrigado, aguarde o retorno!');
		form.find('input[type=submit]').removeAttr('disabled');
		form.find('input[type=submit]').attr('value','Enviar');
		form.find('input[type=submit]').animate({'opacity':'1'});
		form[0].reset();
	}
})
}else{
	alert('Formulários vázios não são permitidos!')
}

return false;
})

function formularioPreenchido(){
	var nome = $('input[name=nome]').val()
	var email = $('input[name=email]').val()
	var mensagem = $('input[name=mensagem]').val()

	if(nome == ''|| email == ''|| mensagem == ''){
		return false;
	}else{
		return true;
	}
}


})

