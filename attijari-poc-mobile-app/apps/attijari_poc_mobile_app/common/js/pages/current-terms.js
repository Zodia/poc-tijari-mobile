$("#SelectRefinanceTerms").click(function() {

   $("#pageContent").load("pages/select-refinance-terms.html", function () {
		
		$(this).enhanceWithin(); /* apply styles */
	});
	
});






$( document ).ready(function() {
	$(".left .back").text("Back");
	
	$(".current-title").text ("Current Terms");	
	
});