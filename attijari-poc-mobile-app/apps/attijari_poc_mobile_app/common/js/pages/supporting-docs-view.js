$('#listDocs li').on('click', function (){
		 prop_index = $(this).attr("id"); 
		 loadPage("pages/document-preview-view.html");
	});

$(".current-title").text ("Property Supporting Documents");

$(".left").unbind("click").on("click", function() {
	loadPage("pages/property-view.html");
});