$("#mortgage_call").click(function() {

   $("#pageContent").load("pages/mortgage-simulator-view.html", function () {
		
		$(this).enhanceWithin(); /* apply styles */
	});
	
});
$("#summurize_call").click(function() {

	   $("#pageContent").load("pages/review-view.html", function () {
			
			$(this).enhanceWithin(); /* apply styles */
		});
		
	});

$("#expert_call").click(function() {

	   $("#pageContent").load("pages/expert-view.html", function () {
			
			$(this).enhanceWithin(); /* apply styles */
		});
		
});



$( document ).ready(function() {
	$(".left .back").text("Back");
	
	$(".current-title").text ("Select Refinance Terms");	
	
});