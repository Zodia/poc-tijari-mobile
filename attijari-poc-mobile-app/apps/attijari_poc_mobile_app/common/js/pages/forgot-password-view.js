/*   hiding the dialog box , */

$(document).ready(function() {
	$("#dialog").hide();
	$(".right").hide();
	$("#header").show();
	$("#footer").hide();
	$(".current-title").text("Forgot Password");
	$(".left .back").text("Back");

});
/*   */

$("#buttongo").on("click", function() {
	
	$("#dialog").show();
	
});

$("#dialog").on("click", function() {

	$("#dialog").hide();
});
