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
