$(document).ready(function(){
	$("#header").find("li").hover(function(){
		$(this).toggleClass("underline");
	});
});


$(document).ready(function(){
	$('.one-cap').hover(function(){
		$('.one-desc').toggleClass('one-trans');
	});
	$('.two-cap').hover(function(){
		$('.two-desc').toggleClass('two-trans');
	});
	$('.three-cap').hover(function(){
		$('.three-desc').toggleClass('three-trans');
	});
	$('.four-cap').hover(function(){
		$('.four-desc').toggleClass('four-trans');
	});
});