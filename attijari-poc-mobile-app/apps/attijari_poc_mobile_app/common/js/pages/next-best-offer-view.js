$(document).on ('pageshow', function () {
	$("#confirmationPopup").popup ("open");
	
	setTimeout (
		function () {
			$("#confirmationPopup").popup ("close");
		}, 
		2000
	);
	
	$(".ui-popup-container.ui-popup-active").css ("max-width", "inherit");
	$(".ui-popup-container.ui-popup-active").css ("top", "88px");
	$(".ui-popup-container.ui-popup-active").css ("bottom", "100px");
	$(".ui-popup-container.ui-popup-active").css ("right", "12px");
	$(".ui-popup-container.ui-popup-active").css ("left", "12px");
});