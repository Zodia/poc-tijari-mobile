$(document).on("pageshow", function () {
	
	$(".submit-button").on ("click", function () {
		$("#confirmationPopup").popup ({ tolerance: "0px, 12px, 32px, 12px" });
		$("#confirmationPopup").popup ("open");
		
		setTimeout (
			function () {
				$("#confirmationPopup").popup ("close");
			}, 
			8000
		);
	});
	
	$(document).bind ({
		popupafterclose: function (event, ui) {
			$("#header .left a.ui-link").trigger ("click");
		}
	});
});
