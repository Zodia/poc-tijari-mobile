/**
 * 
 */

$('#listview').children('li').on('click', function () {
	  // alert('Selected Name=' + $(this).find("id").text());
	   customer_index =$(this).attr("id");
	   loadPage("../pages/customer-view.html");
	});




$( document ).ready(function() {
	$(".left .back").text("Back");
	
	$(".current-title").text ("Customer entry list");	
	
});

