$(document).ready(function(){
	$("#header").find("li").hover(function(){
		$(this).toggleClass("underline");
	});
});