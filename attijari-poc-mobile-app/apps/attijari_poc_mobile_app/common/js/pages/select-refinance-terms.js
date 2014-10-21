$("#refinance_call").click(function() {

   $("#pageContent").load("pages/refinance-calculator-view.html", function () {
		
		$(this).enhanceWithin(); /* apply styles */
	});
	
});
$("#summurize_call").click(function() {

	   $("#pageContent").load("pages/select-refinance-terms.html", function () {
			
			$(this).enhanceWithin(); /* apply styles */
		});
		
	});

$("#expert_call").click(function() {

	   $("#pageContent").load("pages/select-refinance-terms.html", function () {
			
			$(this).enhanceWithin(); /* apply styles */
		});
		
});



$( document ).ready(function() {
	$(".left .back").text("Back");
	
	$(".current-title").text ("Select Refinance Terms");	
	
});