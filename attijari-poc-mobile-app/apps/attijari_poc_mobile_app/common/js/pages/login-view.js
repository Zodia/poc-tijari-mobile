$( document ).ready(function() {
	$(".current-title").text ("Login Page");
	$("#dialog").hide ();	
	$(".right").hide ();
	$("#header").show ();
	$("#footer").hide ();
	$("#dialog").click (function () {
        $("#dialog").hide ();
    });
	
	if (connected == 1) {
		loadPage("pages/apps-list.html");		
	}	
});

$("#forgotpass").on ("click",function () {
	loadPage ("pages/forgot-password-view.html");
});

$("#registerlink").on ("click",function () {
	loadPage ("pages/register-view.html");
});

$("#buttongo").on("click",function(){
	if($('#emailinput').val () == "demo" && $('#passwordinput').val () == "demo") {
		connected = 1;
		$(".right").show ();
		$("#footer").show ();	
	
		//loadPage("pages/home-view.html");
		loadPage ("pages/home-view.html");	
	} else {
		$("#dialog").dialog ();
		$("#dialog").show ();
	}
}); 
//