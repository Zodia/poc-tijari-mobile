$("#customer_call").on ("click", function () {
	$("#pageContent").load("pages/customer-view.html", function () {
		$(this).enhanceWithin(); /* apply styles */
	});
});
$("#doc_call").on ("click", function () {
	$("#pageContent").load("pages/supporting-docs-view.html", function () {
		$(this).enhanceWithin(); /* apply styles */
	});
});
$("#cancel").on ("click", function () {
	$("#pageContent").load("pages/home-view.html", function () {
		$(this).enhanceWithin(); /* apply styles */
	});
});