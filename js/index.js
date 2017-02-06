$(function(){
	$('.nan-left').mouseover(function(){
		$('.nan-left div').css('opacity','0')
		if($(this).is(":animated")){
			$(this).stop()
			$('.nan-left').animate({
				right:'0'
			},500)
			
		}else{
			$('.nan-left').animate({
				right:'0'
			},500)
		}
		})
	$('.nan-left').mouseout(function(){
		$('.nan-left div').css('opacity','0.6')
		if($(this).is(":animated")){
			$(this).stop()
			$('.nan-left').animate({
				right:'-300px'
			},500)
		}else{
			$('.nan-left').animate({
				right:'-300px'
			},500)
		}
	})
	
})