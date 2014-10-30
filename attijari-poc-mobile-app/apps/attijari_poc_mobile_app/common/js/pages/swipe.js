var jssor_slider;
$( document ).on( "pageinit", "#page", function( event ) {
	var options = {
            $AutoPlay: false,
            $DragOrientation: 1,  
            $Loop: 0,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 2,
                $Steps: 1
            }
        };

		jssor_slider = new $JssorSlider$("slideshow", options);
   
//        jssor_slider.$Play();
	//$(".current-title").text ("Choosing Application Type");	
	
});




var count = 0;
//
//function titleChange(count){
//	switch (count) {
//	case 0:
//		$('.current-title').text("Property Information");
//		break;
//	case 1:
//		$('.current-title').text("Mortgage Terms");
//		break;
//	case 2:
//		$('.current-title').text("Property Information");
//		break;
//	default:
//		break;
//	}
//};

$('#ui-block-a').on('click',function(){
//	alert(jssor_slider.$CurrentIndex());
//	titleChange(jssor_slider.$CurrentIndex()+1);
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
	                    <div role="main" class="ui-content" align="center" style="background-color: white;">\
	                        <h3 style="color:black;margin-bottom: 55px;font-weight: normal;" class="ui-title">'
					+ text
					+ '<div class="ui-grid-a ui-responsive" id="button-div">'
					+ '<div class="ui-block-a"><a href="#" class="btn-submit optionConfirm" data-rel="back" style="color:#DF4B20;font-weight:normal;text-decoration: none;">Yes</a></div>'
					+ '<div class="ui-block-b"><a href="#" class="btn-back optionCancel" data-rel="back" data-transition="flow" style="color:#DF4B20;font-weight:normal;text-decoration: none;">No</a></div>'
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

$('#ui-block-b').on('click',function(){
//	alert(jssor_slider.$CurrentIndex());
	if(jssor_slider.$CurrentIndex()==2)
		confirmDialog("submit", function() {
			loadPage("next-best-offer-view.html");
		});
});
