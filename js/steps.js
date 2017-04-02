 ;(function(){

	//$('.step:nth-child(1)').addClass('active')
	const selector = '#contact-form'

	$('.step textarea').on('keydown', (e)=>{
		if(e.keyCode == 13){
			e.preventDefault()
			$(e.target).blur()
		}
	})


	$(selector).find('.input').on('change', (e)=>{
		const $input = $(e.target)
		const $next_step = $input.parent().next('.step')
		const is_form_valid = is_valid_form()
		if(!is_form_valid && $next_step.length > 0){
			focus_next($next_step)
		}else{
			validate_form()
		}
		

	})

	
	//Helpers

	function validate_form(){
		if(is_valid_form()){
			send_form()
		}else{
			let $fieldset_invalid = $(selector).find('.input:invalid').first().parent()
			focus_next($fieldset_invalid)
		}

	}

	function is_valid_form(){
		return document.querySelector(selector).checkValidity()
	}

	function focus_next($next_step){
		$('.step.active').removeClass('active')
		$next_step.addClass('active')
		$next_step.find('.input').focus()
	}


	function send_form(){
		const $form = $(selector)
		$.ajax({
		    url: $form.attr("action"), 
		    method: "POST",
		    data: $form.formObject(),
		    dataType: "json",
		    success:function(){
		    	$form.slideUp()
		    	$('#contact-info').html('We sent you a message, we will get in contact with you as soon as possible')
		    }
		})
	}

})()