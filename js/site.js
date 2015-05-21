$(document).ready(function(){
	$("#header").find("li").hover(function(){
		$(this).toggleClass("underline");
	});
});


$(document).ready(function(){
	$('caption').click(function(){
		$('.projects').toggleClass('opac');
		$('.project-desc').toggleClass('desc-trans');
	});
});