$(document).on("pageshow", function() {
	$("#confirmationPopupQst").popup({
		tolerance : "0px, 12px, 32px, 12px"
	});

	$(".message-submit .send-problem-button").on("click", function(e) {

		e.stopImmediatePropagation();
		e.preventDefault();

		$("#confirmationPopupQst").popup("open");

		setTimeout(function() {
			$("#confirmationPopupQst").popup("close");
		}, 4000);

		return false;
	});

	$(document).bind({
		popupafterclose : function(event, ui) {
			$(".submit-problem-form").attr("action", "home-view.html");

			$(".submit-problem-form").submit();
		}
	});
});