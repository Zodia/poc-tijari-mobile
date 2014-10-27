$("#back").on("click", function() {
	loadPage("pages/property-view.html");
});
$("#submit").on("click", function() {
	alert("Submited");
});

$("#panel-expert").on("click",function(){
	sourcePage.title = "Mortgage Terms";
	sourcePage.url = "mortgage-terms-view.html";
	loadPage("pages/ask_expert/expert-view.html");
});