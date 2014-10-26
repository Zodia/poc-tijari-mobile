/**
 * 
 */

$('#listview').children('li').on('click', function () {
	  // alert('Selected Name=' + $(this).find("id").text());
	application_index =$(this).attr("id"); 
	   loadPage("../pages/application-details.html");
	});

$( document ).ready(function() {
	$(".left .back").text("Back");
	
	$(".current-title").text ("Application Entry List");	
	
});

