$("#yes").click(function() {

$("#pageContent").load("pages/current-terms.html", function () {
		
		$(this).enhanceWithin(); /* apply styles */
	});
	
});




$("#no").on ("click", function () {
	customer_index = -1;
	$("#pageContent").load("pages/current-terms.html", function () {
		
		$(this).enhanceWithin(); /* apply styles */
	});
});

$( document ).ready(function() {
	$(".left .back").text("Back");
	
	$(".current-title").text ("Mortgage File");	
	
});

$(".left .back").unbind('click').click(function() {

	$("#pageContent").load("pages/customer-view.html", function () {
			
			$(this).enhanceWithin(); /* apply styles */
		});
		
	});