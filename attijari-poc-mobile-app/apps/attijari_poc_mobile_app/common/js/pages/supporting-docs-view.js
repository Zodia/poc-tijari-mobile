//$('#listDocs li').on('click', function (){
//		 prop_index = $(this).attr("id"); 
//	});

var i = 0;
$(".current-title").text("Property Supporting Documents");
$(".left").off();
$(".left").on("click", function() {
	$("#pageContent").load("pages/property-view.html", function() {
		$(this).enhanceWithin();
	});
});


function AddDocument() {
	i++;
	var li = "<li>"
			+ "<i class='fa fa-file-pdf-o ui-li-icon ui-corner-none doc-type-icon'>"
			+ "</i>"
			+ "Document "
			+ i
			+ "<input data-clear-btn='true' name='file-2' id='file-2' value='' type='file'></li>";
	$("#listDocuments").append(li).listview("refresh").enhanceWithin();

}

$('#add_document').on('click', function() {
	AddDocument();
});
