$("#home_call").on ("click", function () {
		$("#pageContent").load("pages/home-view.html", function () {
			$(this).enhanceWithin(); /* apply styles */
		});
	});
$("#proprety_call").on ("click", function () {
	$("#pageContent").load("pages/property-view.html", function () {
		$(this).enhanceWithin(); /* apply styles */
	});
});

$(".current-title").text ("Customer View");
$(".left").on ("click", function () {
	loadPage ("pages/customer-view.html"); // "pages/splash-view.html"
});
