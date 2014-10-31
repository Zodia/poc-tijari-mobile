$(document).on ('pageshow', function () {
	$("#confirmationPopup").popup ({ tolerance: "0px, 12px, 32px, 12px" });
	$("#confirmationPopup").popup ("open");
	
	setTimeout (
		function () {
			$("#confirmationPopup").popup ("close");
		}, 
		3000
	);
});
