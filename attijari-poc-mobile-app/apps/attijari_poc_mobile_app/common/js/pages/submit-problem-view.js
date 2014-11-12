$(".send-problem-button").on ("click", function () {
	confirmDialog("Votre problème a été soumis.", function() {
		loadPage("home-view.html");
	});
});


function confirmDialog(text, callback) {
	var popupDialogId = 'popupDialog';
	$(
			'<div data-role="popup" id="'
					+ popupDialogId
					+ '" data-confirmed="no" data-transition="pop" data-overlay-theme="b" data-theme="b" data-dismissible="false" style="max-width:500px;"> \
	                    <div role="main" class="ui-content" align="center" style="background-color: white;">\
	                        <h3 style="color:black;font-weight: normal;" class="ui-title">'
					+ text
					+ '<div class="ui-grid-a ui-responsive" id="button-div">'
					+ '<div class="ui-block-a"><a href="#" class="btn-submit optionConfirm" data-rel="back" >Ok</a></div>'
					+ '</div>' + '</div>').appendTo($.mobile.pageContainer);
	var popupDialogObj = $('#' + popupDialogId);
	popupDialogObj.trigger('create');
	popupDialogObj
			.popup({
				afterclose : function(event, ui) {
					popupDialogObj.find(".optionConfirm").first().off('click');
					var isConfirmed = popupDialogObj.attr('data-confirmed') === 'yes' ? true
							: false;
					$(event.target).remove();
					if (isConfirmed && callback) {
						callback();
					}
				}
			});
	popupDialogObj.popup('open');
	popupDialogObj.find(".optionConfirm").first().on('click', function() {
		popupDialogObj.attr('data-confirmed', 'yes');
	});
}