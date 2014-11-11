var count = 0;
var answer = "";
var chatType = "text";

var videoPlayer = document.getElementById ('videoPlayer');

$(document).on ("pageshow", function () {
	
	$(".bottom-actions .chat-text-content .send").on ("click", function () {
		addMessages ();
	});
	
	$(".text-message").on ("keypress", function (event) {
        
		if (event.which == '13') {
			addMessages ();
		}
	});
	
	$(".chat-actions .ui-block-a a").on ("click", function () {
		if (chatType == "video") {
			changeStyle (
				$(this), 
				$(".chat-actions .ui-block-b a")
			);
			
			chatType = "text";
			
			videoPlayer.pause ();
			
			$(".video-core").css ("display", "none");
			$(".conversation-core").css ("top", "136px");
		} 
	});
	
	$(".chat-actions .ui-block-b a").on ("click", function () {
		 if (chatType == "text") {
			 changeStyle (
				$(this), 
				$(".chat-actions .ui-block-a a")
			 );
			 
			 chatType = "video";
			 
			 $(".video-core").css ("display", "block");
			 
			 videoPlayer.play ();
			 
			 $(".conversation-core").css ("top", "" + (136 + $(".video-core video").height ()) + "px");
		 }
	});
});

function addMessages () {
	
	if($.trim ($(".text-message").val ()) !== '') {
		
		$("#chat-results").append ("<p class='employee'>" +
									"<span class='left'>Ali Abbas : </span>" +
									"<span class='right'>" + 
									$(".text-message").val () + 
									"</span>" +
									"</p>");
		
		if (count % 4 == 0) {
			answer = "Oui, continue s'il-te-plait..";
		} else if (count % 4 == 1) {
			answer = "Donc si je comprends bien, tu aimerai connaitre la situation de X. N'est-ce-pas ?";
		} else if (count % 4 == 2) {
			answer = "Ok, récapitulons...";
		} else if (count % 4 == 3) {
			answer = "Laisse moi un moment s'il-te-plait, je dois vérifier un point.";
		}
		
		$("#chat-results").append ("<p class='expert'>" +
									"<span class='left'>Souhail Guennouni : </span>" +
									"<span class='right'>" + 
									answer + 
									"</span>" +
									"</p>");
		
		$(".text-message").val ("");
		
		count ++;
	}
}

function changeStyle (focusBlock, freeBlock) {
	focusBlock.css ("color", "#FFF");
	focusBlock.css ("background-color", "#ef5a49");
	focusBlock.css ("border-color", "#ef5a49");
	
	freeBlock.css ("color", "#ef5a49");
	freeBlock.css ("background-color", "#FFF");
	freeBlock.css ("border-color", "#ef5a49");
}

function changeBlock (toShowBlock, toHideBlock) {
	toShowBlock.css ("display", "block");
	toHideBlock.css ("display", "none");
}