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

var header = $('#welcome-section');
var range = 1000;

$(window).on('scroll', function () {
  
    var scrollTop = $(this).scrollTop();
    var offset = header.offset().top;
    var height = header.outerHeight();
    offset = offset + height / 2;
    var calc = 1 - (scrollTop - offset + range) / range;
  
    header.css({ 'opacity': calc });
  
    if ( calc > '1' ) {
      header.css({ 'opacity': .35 });
    } else if ( calc < '0' ) {
      header.css({ 'opacity': 0 });
    }
  
});
