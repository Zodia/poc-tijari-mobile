var language = "french";

$(document).on ("pageinit", function () {
	
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
	$("#confirmationPopup").attr ("data-dismissible", dismissibleBool);
	
	$("#confirmationPopup").popup ({ tolerance: "0px, 12px, 32px, 12px" });
	$("#confirmationPopup").popup ("open");
		
	setTimeout (
		function () {
			$("#confirmationPopup").popup ("close");
		}, 
		4000
	);
	
	$(document).bind ({
		popupafterclose: function (event, ui) {
			if (translateBool) {
				console.log ("yes translate");
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
			$.trim ($(".email-p input").val ()) !== 'demo' || 
			$.trim ($(".pass-p input").val ()) !== 'demo') {
		
		$(".loading-language").css ("display", "none");
		$(".loader").css ("display", "none");
		$(".authentication-error").css ("display", "block");
		
		displayRedPopup (true, false);
	} else {
		connected = 1;
		loadPage ("home-view.html");
	}
}
