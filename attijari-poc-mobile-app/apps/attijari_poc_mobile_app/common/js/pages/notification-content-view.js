$(document).on ("pageshow", function () {
	
	$(".thumbnail-c").attr ("style", "background-image: url(" + expertNotification.pic + ");");
	$(".title-c").html (expertNotification.title);
	$(".status-c").html (expertNotification.status);
	$(".date-c em").html ("Reçu le : " + expertNotification.date);
	
	$(".message-core-c").html (expertNotification.content);
	
	if (expertNotification.status == "Rejeté") {
		$(".resend-rejected").removeAttr("disabled");
	} else {
		$(".resend-rejected").attr("disabled", "disabled");
	}
});
