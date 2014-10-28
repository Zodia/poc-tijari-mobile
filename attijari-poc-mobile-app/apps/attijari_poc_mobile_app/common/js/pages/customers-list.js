/**
 * 
 */

$('#listview').children('li').on('click', function () {
	  // alert('Selected Name=' + $(this).find("id").text());
	   customer = customers[$(this).attr("id")];
	   property = customer.properties[0];
	   loadPage("../pages/customer-view.html");
	});




$( document ).ready(function() {
	$(".left .back").text("Back");
	
	$(".current-title").text ("Customer entry list");	
	
});

