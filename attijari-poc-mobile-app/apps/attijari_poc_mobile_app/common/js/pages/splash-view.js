$("#header").css ("display", "none");
$("#footer").css ("display", "none");

$("#loginAction").on ("click", function () {
	$("#header").css ("display", "block");
	$("#footer").css ("display", "block");
	$("#pageContent").load ("pages/login-view.html");
});