/**
 * 
 */
$( document ).ready(function() {

	$("#listholder").hide();

	



});


$("#existinguser").click(function() {
	$("#listholder").show();	
	$("#newuser").hide();
	$("#existinguser").hide();
});


$("#newuser").on ("click", function () {
	$("#pageContent").load("pages/customer-view.html", function () {
		$(this).enhanceWithin(); /* apply styles */
	});
});