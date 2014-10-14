$("#customer_call").on ("click", function () {
	$("#pageContent").load("pages/customer-view.html", function () {
		$(this).enhanceWithin(); /* apply styles */
	});
});

$("#cancel").on ("click", function () {
	$("#pageContent").load("pages/customer-view.html", function () {
		$(this).enhanceWithin(); /* apply styles */
	});
});

$(".current-title").text ("Properties list");
$(".left .back").text("Customer details");
$(".left .back").on ("click", function () {
	$("#pageContent").load("pages/customer-view.html", function () {
		$(this).enhanceWithin(); /* apply styles */
	});
});

$('#listProperties li').on('click', function (){
		loadPage("pages/property-view.html");
});

