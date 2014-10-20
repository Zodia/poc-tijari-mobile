/**
 * 
 */



$("#existinguser").click(function() {

$("#pageContent").load("pages/customers-list.html", function () {
		
		$(this).enhanceWithin(); /* apply styles */
	});
	
});

$(".left .back").click(function() {

	$("#pageContent").load("pages/home-view.html", function () {
			
			$(this).enhanceWithin(); /* apply styles */
		});
		
	});



$("#newuser").on ("click", function () {
	customer_index = -1;
	$("#pageContent").load("pages/customer-view.html", function () {
		
		$(this).enhanceWithin(); /* apply styles */
	});
});

$( document ).ready(function() {
	$(".left .back").text("Back");
	
	$(".current-title").text ("Choosing Customer Type");	
	
});