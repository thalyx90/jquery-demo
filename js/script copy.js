$(function(){

	$('#slide-button').on('click',function(){

		$('header').animate({left:"0em"},500,function(){
			$('#slide-button>i').removeClass('fa-arrow-circle-right')
								.addClass('fa-arrow-circle-left');
		});
	});

	
});