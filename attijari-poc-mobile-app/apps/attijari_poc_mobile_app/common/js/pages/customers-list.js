/**
 * 
 */

$('#listview').children('li').on('click', function () {
	  // alert('Selected Name=' + $(this).find("id").text());
	   customer_index =$(this).attr("id");
	   loadPage("pages/customer-view.html");
	});

