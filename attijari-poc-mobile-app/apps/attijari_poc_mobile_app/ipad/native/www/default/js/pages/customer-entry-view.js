
/* JavaScript content from js/pages/customer-entry-view.js in folder common */
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

$('#listview').children('li').on('click', function () {
	  // alert('Selected Name=' + $(this).find("id").text());
	   customer_index =$(this).attr("id");
	   loadPage("pages/customer-view.html");
	});



$("#newuser").on ("click", function () {
	$("#pageContent").load("pages/customer-view.html", function () {
		$(this).enhanceWithin(); /* apply styles */
	});
});