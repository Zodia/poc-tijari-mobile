$( document ).ready(function() {
		
	$(".right").hide();
	$("#header").show();
	$("#footer").hide();
	$(".current-title").text ("Forgot Password");
	$(".left .back").text("Back");
	
			
});

$(".left .back").on("click",function(){
	
	$("#pageContent").load("pages/login-view.html", function () {
		$(this).enhanceWithin();
	});
});


$("#buttongo").on("click",function(){
	
alert("email sent successfully");	
});





