$(function(){  
$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
});


$(function(){
	$('#firstname').mousemove(function(e){
		$('#first_Hint').animate({
			opacity: 1,
		}, 1000);
	}).mouseout(function(){
		$("#first_Hint").finish();
		$('#first_Hint').animate({
			opacity: 0,
		}, 1000);
	});
	$('#lastname').mousemove(function(e){
		$('#lastname_Hint').animate({
			opacity: 1,
		}, 1000);
	}).mouseout(function(){
		$("#lastname_Hint").finish();
		$('#lastname_Hint').animate({
			opacity: 0,
		}, 1000);
	});
	$('#address').mousemove(function(e){
		$('#address_Hint').animate({
			opacity: 1,
		}, 1000);
	}).mouseout(function(){
		$("#address_Hint").finish();
		$('#address_Hint').animate({
			opacity: 0,
		}, 1000);
	});

	$('.help').click(function(){
		$('#first_Hint').animate({
			opacity: 1,
		}, 1000);
		$('#lastname_Hint').animate({
			opacity: 1,
		}, 1000);
		$('#address_Hint').animate({
			opacity: 1,
		}, 1000);	
	});
});
