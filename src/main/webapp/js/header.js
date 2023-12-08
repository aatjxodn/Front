/**
 *            헤더 js
 */

$(document).ready(function() {
	
	$(".ul2 > li > a").hover(function() {
		$(".ul2 > li > ul").slideDown(300);
		$(".ul2 > li > ul").css("display","block");
		$(".ul2 > li > ul").css("position","absolute");
		$(".ul2 > li > ul").css("z-index","1");
		$(".ul2 > li > ul").css("background-color","#9932CC");
	});
	
	$(".ul2").mouseleave(function() {
		$(".ul2 > li > ul").slideUp(600);	
	});
	
});

