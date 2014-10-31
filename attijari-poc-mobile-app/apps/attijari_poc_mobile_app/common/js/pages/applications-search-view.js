$('#listview').children('li').on('click', function () {
	application_index =$(this).attr("id"); 
	loadPage("application-details.html");
});
