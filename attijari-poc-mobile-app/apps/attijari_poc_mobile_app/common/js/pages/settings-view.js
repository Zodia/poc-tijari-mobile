$(".current-title").text ("Preferences");

$( "#flip" ).slider({
	start: function( event, ui ) {
		confirmDialog("Voulez vous continuer?",	function() {	//loadPage("login-view.html");					
		});
	}
	});

function confirmDialog(text, callback) {
	var popupDialogId = 'popupDialog';
	$(
			'<div data-role="popup" id="'
					+ popupDialogId
					+ '" data-confirmed="no" data-transition="pop" data-overlay-theme="b" data-theme="b" data-dismissible="false" style="max-width:500px;"> \
	                    <div data-role="header" data-theme="a">\
	                        <h1>Changer la langue va redemarrer l\'application. </h1>\
	                    </div>\
	                    <div role="main" class="ui-content" align="center" style="background-color: white;">\
	                        <h3 style="color:black;margin-bottom: 55px;font-weight: normal;" class="ui-title">'
					+ text
					+ '<div class="ui-grid-a ui-responsive" id="button-div">'
						+'<div class="ui-block-a"><a href="#" class="btn-submit optionConfirm" data-rel="back" style="color:#DF4B20;font-weight:normal;text-decoration: none;">Yes</a></div>'
						+'<div class="ui-block-b"><a href="#" class="btn-back optionCancel" data-rel="back" data-transition="flow" style="color:#DF4B20;font-weight:normal;text-decoration: none;">No</a></div>'
					+'</div>'
	                +'</div>')
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