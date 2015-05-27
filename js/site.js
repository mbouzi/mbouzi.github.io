$(document).ready(function(){
	$("#header").find("li").hover(function(){
		$(this).toggleClass("underline");
	});
});


$(document).ready(function(){
	$('caption').hover(function(){
		$('.showgoer-desc').toggleClass('show-trans');
		$('.hacker-desc').toggleClass('hack-trans');
	});
});