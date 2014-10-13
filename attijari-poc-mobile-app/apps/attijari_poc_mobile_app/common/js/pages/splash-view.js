$("#header").css ("display", "none");
$("#footer").css ("display", "none");

$("#loginAction").on ("click", function () {
	$("#pageContent").load ("pages/login-view.html");
});