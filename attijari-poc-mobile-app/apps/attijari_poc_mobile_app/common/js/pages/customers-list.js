/**
 * 
 */

$('#listview').children('li').on('click', function () {
	  // alert('Selected Name=' + $(this).find("id").text());
	   customer_index =$(this).attr("id");
	   loadPage("pages/customer-view.html");
	});



$(".left .back").unbind("click").on("click", function() {
	loadPage("pages/customer-entry-view.html");
});
$( document ).ready(function() {
	$(".left .back").text("Back");
	
	$(".current-title").text ("Customer entry list");	
	
});

