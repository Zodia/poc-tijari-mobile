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
$(".left").on ("click", function () {
	loadPage ("pages/properties-listview.html");
});

$('#listProperties li').on('click', function (){
		loadPage("pages/property-view.html");
});