$(document).ready(function(){
	$("#header").find("li").hover(function(){
		$(this).toggleClass("underline");
	});
});


$(document).ready(function(){
	$('caption').hover(function(){
		$('.project-desc').toggleClass('desc-trans');
	});
});