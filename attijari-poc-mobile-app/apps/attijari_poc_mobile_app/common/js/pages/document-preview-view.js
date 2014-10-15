$(".left .back").text("Property details");
$(".left").unbind("click").on("click", function() {
	loadPage("pages/property-view.html"); // "pages/splash-view.html"
});