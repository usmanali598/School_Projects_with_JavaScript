$(document).ready(function(){
	$('.btn').click(function(){
		$(this).toggle(5000);
		})
		
		$('#what').click(function(){
			$('#what').css("background","yellow");
			$('#see').css("visibility","visible");
		})
		
		$('#slid').click(function(){
		 $('div').slideToggle(1000);
		 $('div').text("Up and down").css("textAlign","center");
		})
		
	})