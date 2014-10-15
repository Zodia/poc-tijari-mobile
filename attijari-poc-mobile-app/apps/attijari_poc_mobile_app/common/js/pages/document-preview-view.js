$(".left .back").text("Back");

$(".left").unbind("click").on("click", function() {
	loadPage("pages/supporting-docs-view.html"); // "pages/splash-view.html"
});

$(".current-title").text ("Documents Viewer");