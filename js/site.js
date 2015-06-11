$(document).ready(function(){
	$("#header").find("li").hover(function(){
		$(this).toggleClass("underline");
	});
});


$(document).ready(function(){
	$('.show-cap').hover(function(){
		$('.showgoer-desc').toggleClass('show-trans');
	});
	$('.hack-cap').hover(function(){
		$('.hacker-desc').toggleClass('hack-trans');
	});
	$('.stack-cap').hover(function(){
		$('.stack-desc').toggleClass('stack-trans');
	});
	$('.irad-cap').hover(function(){
		$('.irad-desc').toggleClass('irad-trans');
	});
});