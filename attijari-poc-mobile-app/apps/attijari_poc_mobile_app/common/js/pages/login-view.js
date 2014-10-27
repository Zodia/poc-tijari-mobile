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

$("#frensh").on ("click",function () {
	$("#buttongo").html("Se connecter");
	$("#registerlink").html("S'enregister");
	$("#forgotpass").html("Mot de passe oulbié!");
	$("#passwordinput").attr("placeholder", "Mot de passe");
	$("#emailinput").attr("placeholder", "Email");
	
	
	
});
$("#arabic").on ("click",function () {
	$("#buttongo").html("تسجيل الدخول");
	$("#registerlink").html("التسجيل");
	$("#forgotpass").html("إستعادة كلمة السر");
	$("#emailinput").attr("placeholder","البريد");
	$("#passwordinput").attr("placeholder","كلمة السر");
	
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


