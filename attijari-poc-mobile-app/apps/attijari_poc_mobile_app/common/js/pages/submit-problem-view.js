$(document).on("pageshow", function () {
	
	$("#confirmationPopup").popup ({ tolerance: "0px, 12px, 32px, 12px" });
	
	$(".message-submit .send-problem-button").on ("click", function (e) {
		
		e.stopImmediatePropagation ();
	    e.preventDefault ();
		
		$("#confirmationPopup").popup ("open");
		
		setTimeout (
			function () {
				$("#confirmationPopup").popup ("close");
			}, 
			4000
		);
		
		return false;
	});
	
	$(document).bind ({
		popupafterclose: function (event, ui) {
			$(".submit-problem-form").attr ("action", "home-view.html");
			
			$(".submit-problem-form").submit();
		}
	});
});
