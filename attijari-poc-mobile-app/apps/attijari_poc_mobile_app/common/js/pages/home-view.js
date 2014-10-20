/**
 * 
 */



$("#existingapp").click(function() {

$("#pageContent").load("pages/apps-list.html", function () {
		
		$(this).enhanceWithin(); /* apply styles */
	});
	
});




$("#newapp").on ("click", function () {
	customer_index = -1;
	$("#pageContent").load("pages/customer-entry-view.html", function () {
		
		$(this).enhanceWithin(); /* apply styles */
	});
});

$( document ).ready(function() {
	$(".left .back").text("Back");
	
	$(".current-title").text ("Choosing Application Type");	
	
});