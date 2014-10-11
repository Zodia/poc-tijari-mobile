/**
 * 
 */
$( document ).ready(function() {

	$("#listholder").hide();	





});


$("#existinguser").click(function() {
	$("#listholder").show();	
});


$("#newuser").on ("click", function () {
	$("#pageContent").load("pages/customer-entry-view.html", function () {
		$(this).enhanceWithin(); /* apply styles */
	});
});