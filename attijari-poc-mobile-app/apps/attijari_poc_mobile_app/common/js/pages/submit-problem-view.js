/*$(".send-problem-button"). on ("click", function () {
	
	var message = "Thank you! Problem details have been successfully submitted!";
	/*var additionalAction = '<a href="#" data-role="button" data-inline="true" data-theme="b" id="loginAction">New application</a>';
	var promoteTitle = "Next best offers";
	var promoteContent = '<div class="ui-grid-a">';
		promoteContent += '<div class="ui-block-a">';
		promoteContent += '<div class="ui-bar ui-bar-e">'
		promoteContent += '<i class="fa fa-car"></i>';
		promoteContent += '<p>Buy a car</p>';
		promoteContent += '</div>';
		promoteContent += '</div>';
		promoteContent += '<div class="ui-block-b">';
		promoteContent += '<div class="ui-bar ui-bar-e">'
		promoteContent += '<i class="fa fa-home"></i>';
		promoteContent += '<p>Buy a house</p>';
		promoteContent += '</div>';
		promoteContent += '</div>';
		promoteContent += '<div class="ui-block-a">';
		promoteContent += '<div class="ui-bar ui-bar-e">'
		promoteContent += '<i class="fa fa-plane"></i>';
		promoteContent += '<p>Take a vacation</p>';
		promoteContent += '</div>';
		promoteContent += '</div>';
		promoteContent += '<div class="ui-block-b">';
		promoteContent += '<div class="ui-bar ui-bar-e">'
		promoteContent += '<i class="fa fa-university"></i>';
		promoteContent += '<p>Go to college</p>';
		promoteContent += '</div>';
		promoteContent += '</div>';
		promoteContent += '</div>';
	
	confirmOperation (message, null, null, null);
});
*/

$(document).on("pageshow", function () {
	
	$(".message-submit input").on ("click", function () {
		$("#confirmationPopup").popup ({ tolerance: "0px, 12px, 32px, 12px" });
		$("#confirmationPopup").popup ("open");
		
		setTimeout (
			function () {
				$("#confirmationPopup").popup ("close");
			}, 
			4000
		);
	});
	
	$(document).bind ({
		popupafterclose: function (event, ui) {
			loadPage("home-view.html");
		}
	});
});
