var language = "french";

$(document).on ("pageshow", function () {
	
	$(".language-actions .ui-block-b a").on ("click", function () {
		if (language == "arabic") {
			changeStyle (
				$(this), 
				$(".language-actions .ui-block-a a"),
				false
			);
			language =  "french";
			
			$(".loading-language").css ("display", "block");
			$(".loader").css ("display", "block");
			$(".authentication-error").css ("display", "none");
			
			displayRedPopup (false, true);
		} 
	});
	
	$(".language-actions .ui-block-a a").on ("click", function () {
		if (language == "french") {
			changeStyle (
				$(this), 
				$(".language-actions .ui-block-b a")
			);
			language =  "arabic";
			
			$(".loading-language").css ("display", "block");
			$(".loader").css ("display", "block");
			$(".authentication-error").css ("display", "none");
			
			displayRedPopup (false, true);
		} 
	});
	
	$(".submit-login").on ("click", function () {
		testData ();
	});
});

function changeStyle (focusBlock, freeBlock) {
	focusBlock.css ("color", "#FFF");
	focusBlock.css ("background-color", "#ef5a49");
	focusBlock.css ("border-color", "#ef5a49");
	
	freeBlock.css ("color", "#ef5a49");
	freeBlock.css ("background-color", "#FFF");
	freeBlock.css ("border-color", "#ef5a49");
}

function displayRedPopup (dismissibleBool, translateBool) {
	$("#confirmationLoginPopup").attr ("data-dismissible", dismissibleBool);
	
	if (language == 'french') {
		$('.loading-language').html('تحميل ملفات اللغة ...</br></br>المرجو الانتظار');
		$('.authentication-error').html('Erreur d\'authentification');
	} else {
		$('.loading-language').html('Chargement des fichiers de langue...</br></br>Merci de patienter.');
		$('.authentication-error').html('كلمة السر او الرمز غير صحيحة');
	} 
	
	$("#confirmationLoginPopup").popup ({ tolerance: "0px, 12px, 32px, 12px" });
	$("#confirmationLoginPopup").popup ("open");
		
	setTimeout (
		function () {
			$("#confirmationLoginPopup").popup ("close");
		}, 
		4000
	);
	
	$(document).bind ({
		popupafterclose: function (event, ui) {
			if (translateBool) {
				translate ();
			}
		}
	});
}

function translate () {
	// translation
	if (language == "french") {
		$(".email-p input").attr ("placeholder", "Addresse E-mail");
		$(".pass-p input").attr ("placeholder", "Mot de passe");
		$(".submit-login button").text ("Connexion");
		$(".links a.left").text ("Mot de passe oublié ?");
		
		$(".email-p input").css ("text-align", "left");
		$(".pass-p input").css ("text-align", "left");
	} else {
		$(".email-p input").attr ("placeholder","البريد");
		$(".pass-p input").attr ("placeholder","كلمة السر");
		$(".submit-login button").text ("دخول");
		$(".links a.left").text ("إستعادة كلمة السر");
		
		$(".email-p input").css ("text-align", "right");
		$(".pass-p input").css ("text-align", "right");
	}
}

function testData () {
	
	if ($.trim ($(".email-p input").val ()) === '' || 
			$.trim ($(".pass-p input").val ()) === '' || 
			($.trim ($(".email-p input").val ())).toLowerCase () !== 'demo' || 
			($.trim ($(".pass-p input").val ())).toLowerCase () !== 'demo') {
		
		$(".loading-language").css ("display", "none");
		$(".loader").css ("display", "none");
		$(".authentication-error").css ("display", "block");
		
		displayRedPopup (true, false);
	} else {
		connected = 1;
//		loadPage ("home-view.html");
		loadPage("home-view.html");
	}
}
