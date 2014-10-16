$(".current-title").text("All info review");

$(".left").unbind("click").on("click", function() {
	loadPage("pages/supporting-docs-view.html");
});

function confirmDialog(text, callback) {
	var popupDialogId = 'popupDialog';
	$(
			'<div data-role="popup" id="'
					+ popupDialogId
					+ '" data-confirmed="no" data-transition="pop" data-overlay-theme="b" data-theme="b" data-dismissible="false" style="max-width:500px;"> \
	                    <div data-role="header" data-theme="a">\
	                        <h1>Are you sure?</h1>\
	                    </div>\
	                    <div role="main" class="ui-content" align="center">\
	                        <h3 class="ui-title">'
					+ text
					+ '</h3>\
	                        <a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b optionConfirm" data-rel="back">Yes</a>\
	                        <a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b optionCancel" data-rel="back" data-transition="flow" >No</a>\
	                    </div>\
	                </div>')
			.appendTo($.mobile.pageContainer);
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
$('#submit').on('click', function() {
	confirmDialog("submit", function() {
		alert('Confirmed');
	});
});