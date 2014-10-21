$('#gallery').on('click', function() {
	loadPage("pages/gallery-view.html");
});

$(".current-title").text("Porperty photographs");
$(".left").off();
$(".left").on("click", function() {
	$("#pageContent").load("pages/property-view.html", function() {
		$(this).enhanceWithin();
	});
});
