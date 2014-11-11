$(document).on ("pageshow", function() {
	
	$(".applications").on ("click", function() {
		loadPage("applications-search-view.html");
	});

	$(".new-mortgage").on ('click', function() {
		confirmDialog("Nouveau Client?", function() {
			customer = {};
			property = {};
			loadPage("customer-view.html");
		}, function() {
			loadPage("customers-search-view.html");
		});
	});

	$(".mortgage-simulator").on ("click", function() {
		loadPage ("mortgage-simulator-view.html");
	});
});

function confirmDialog(text, callback_New, callback_Existing) {
	var popupDialogId = 'popupDialog';
	$(
			'<div data-role="popup" data-dismissible="true" id="'
					+ popupDialogId
					+ '" data-confirmed="" data-transition="pop" data-overlay-theme="b" data-theme="b" data-dismissible="false" style="max-width:500px;"> \
	                    <div data-role="header" data-theme="a">\
	                        <h1>Confirmation:</h1>\
	                    </div>\
	                    <div role="main" class="ui-content" align="center" style="background-color: white;">\
	                        <h3 style="color:black;margin-bottom: 55px;font-weight: normal;" class="ui-title">'
					+ text
					+ '<div class="ui-grid-a ui-responsive" id="button-div">'
					+ '<div class="ui-block-a"><a href="#" class="btn-submit optionNew" data-rel="back">Oui</a></div>'
					+ '<div class="ui-block-b"><a href="#" class="btn-back optionExisting" data-rel="back" data-transition="flow">Non</a></div>'
					+ '</div>' + '</div>').appendTo($.mobile.pageContainer);
	var popupDialogObj = $('#' + popupDialogId);
	popupDialogObj.trigger('create');
	popupDialogObj
			.popup({
				afterclose : function(event, ui) {
					popupDialogObj.find(".optionNew").first().off('click');
//					var isNew = popupDialogObj.attr('data-confirmed') === 'yes' ? true
//							: false;
					$(event.target).remove();
					if (popupDialogObj.attr('data-confirmed') === 'yes') {
						callback_New();
					}
					else if(popupDialogObj.attr('data-confirmed') === 'no'){
						callback_Existing();
					}
				}
			});
	popupDialogObj.popup('open');
	popupDialogObj.find(".optionNew").first().on('click', function() {
		popupDialogObj.attr('data-confirmed', 'yes');
	});
	popupDialogObj.find(".optionExisting").first().on('click', function() {
		popupDialogObj.attr('data-confirmed', 'no');
	});
}
