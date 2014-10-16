$(".current-title").text ("Help center");

$(".go-to-faq").on ("click", function () {
	loadPage ("pages/faqs-view.html");
});

$(".go-to-send-problem").on ("click", function () {
	loadPage ("pages/submit-problem-view.html");
});
