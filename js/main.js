;(function(){
	
	//sticky Navigation for Menu
	$('.navigation').localScroll()
	$('.icon').localScroll()
	var sticky = false

	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)


	$(window).scroll(function(){
		const inBottom = isInBottom()

		if(inBottom && !sticky){
			//show sticky navigation
			sticky = true
			stickNavigation()
		}
		if(!inBottom && sticky){
			//hide sticky navigation
			sticky = false
			unStickNavigation()
		}
	})

	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navigation").slideUp("fast")
		$("#sticky-navigation").slideDown("fast")
		$("#logo").addClass("logo-right")
		$("#logo").addClass("red-text")
		$("#logo").addClass("zoon-logo")
	}

	function unStickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute")
		$("#navigation").slideDown("fast")
		$("#sticky-navigation").slideUp("fast")
		$("#logo").removeClass("logo-right")
		$("#logo").removeClass("red-text")
		$("#logo").removeClass("zoon-logo")
	}

	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()

		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
	}
		
})()