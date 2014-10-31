$( document ).ready(function() {
	var options = {
			$AutoPlay: "false",
			$AutoPlayInterval: 10000,
            $Loop: 0,            
            $DragOrientation: 3, 
            $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
                $Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
                $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                $AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
                $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
                $SpacingX: 8,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
                $SpacingY: 8,                                   //[Optional] Vertical space between each item in pixel, default value is 0
                $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
            }
        };
	var options1 = {
			$Transitions :{$Duration:1200,x:-0.3,y:0.3,$Delay:60,$Zoom:1,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$JssorEasing$.$EaseInJump,$Top:$JssorEasing$.$EaseInJump,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2,$Round:{$Left:0.8,$Top:0.8}},
			$AutoPlayInterval: 5000,
			$AutoPlay: true,
			$DragOrientation: 3,                               
	};
	var options2 = {
			$Transitions :{$Duration:1200,x:-0.3,y:0.3,$Delay:60,$Zoom:1,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$JssorEasing$.$EaseInJump,$Top:$JssorEasing$.$EaseInJump,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2,$Round:{$Left:0.8,$Top:0.8}},
			$AutoPlayInterval: 7000,
			$AutoPlay: true,
			$DragOrientation: 3,                               
	};
	var options3 = {
			$Transitions :{$Duration:1200,x:-0.3,y:0.3,$Delay:60,$Zoom:1,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$JssorEasing$.$EaseInJump,$Top:$JssorEasing$.$EaseInJump,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2,$Round:{$Left:0.8,$Top:0.8}},
			$AutoPlayInterval: 4500,
			$AutoPlay: true,
			$DragOrientation: 3,                               
	};
	var options4 = {
			$Transitions :{$Duration:1200,x:-0.3,y:0.3,$Delay:60,$Zoom:1,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$JssorEasing$.$EaseInJump,$Top:$JssorEasing$.$EaseInJump,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2,$Round:{$Left:0.8,$Top:0.8}},
			$AutoPlayInterval: 6500,
			$AutoPlay: true,
			$DragOrientation: 3,                               
	};
	

		var jssor_slider1 = new $JssorSlider$("slideshow5", options);
		var jssor_slider1 = new $JssorSlider$("slideshow6", options1);
		var jssor_slider1 = new $JssorSlider$("slideshow7", options2);
		var jssor_slider1 = new $JssorSlider$("slideshow8", options3);
		var jssor_slider1 = new $JssorSlider$("slideshow9", options4);

		
   
        jssor_slider1.$Play();
	
});




$(".applications").click(function() {
	loadPage("applications-search-view.html");
});

$(".new-mortgage").on('click', function() {
	confirmDialog("Choisir", function() {
		customer = {};
		property = {};
		loadPage("customer-view.html");
	}, function() {
		loadPage("customers-list-view.html");
	});
});

$(".mortgage-simulator").click(function() {
	loadPage("mortgage-simulator-view.html");
});

$(".refinancing").click(function() {
	// loadPage ("mortgage-center-view.html");
});

function confirmDialog(text, callback_New, callback_Existing) {
	var popupDialogId = 'popupDialog';
	$(
			'<div data-role="popup" id="'
					+ popupDialogId
					+ '" data-confirmed="no" data-transition="pop" data-overlay-theme="b" data-theme="b" data-dismissible="false" style="max-width:500px;"> \
	                    <div data-role="header" data-theme="a">\
	                        <h1>Nouveau Client?</h1>\
	                    </div>\
	                    <div role="main" class="ui-content" align="center" style="background-color: white;">\
	                        <h3 style="color:black;margin-bottom: 55px;font-weight: normal;" class="ui-title">'
					+ text
					+ '<div class="ui-grid-a ui-responsive" id="button-div">'
					+ '<div class="ui-block-a"><a href="#" class="btn-submit optionNew" data-rel="back" style="color:#DF4B20;font-weight:normal;text-decoration: none;">Oui</a></div>'
					+ '<div class="ui-block-b"><a href="#" class="btn-back optionExisting" data-rel="back" data-transition="flow" style="color:#DF4B20;font-weight:normal;text-decoration: none;">Non</a></div>'
					+ '</div>' + '</div>').appendTo($.mobile.pageContainer);
	var popupDialogObj = $('#' + popupDialogId);
	popupDialogObj.trigger('create');
	popupDialogObj
			.popup({
				afterclose : function(event, ui) {
					popupDialogObj.find(".optionNew").first().off('click');
					var isNew = popupDialogObj.attr('data-confirmed') === 'yes' ? true
							: false;
					$(event.target).remove();
					if (isNew && callback_New) {
						callback_New();
					}
					if(!isNew && callback_Existing){
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
