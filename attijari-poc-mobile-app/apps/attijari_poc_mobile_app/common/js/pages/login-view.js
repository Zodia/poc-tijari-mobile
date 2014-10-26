$( document ).ready(function() {
	$("#dialog").hide ();	
	$("#dialog").click (function () {
        $("#dialog").hide ();
    });
	
	if (connected == 1) {
		loadPage("apps-list.html");		
	}	
});

$("#forgotpass").on ("click",function () {
	loadPage ("forgot-password-view.html");
});

$("#registerlink").on ("click",function () {
	loadPage ("register-view.html");
});

$("#buttongo").on("click",function(){
	if($('#emailinput').val () == "demo" && $('#passwordinput').val () == "demo") {
		connected = 1;
	
		//loadPage("pages/home-view.html");
		loadPage ("home-view.html");	
	} else {
		$("#dialog").dialog ();
		$("#dialog").show ();
	}
}); 
//