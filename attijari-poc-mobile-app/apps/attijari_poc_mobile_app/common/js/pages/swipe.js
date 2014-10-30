$( document ).on( "pageinit", "#page", function( event ) {
	var options = {
            $AutoPlay: false,
            $DragOrientation: 1,  
            $Loop: 0
        };

		var jssor_slider = new $JssorSlider$("slideshow", options);
   
//        jssor_slider.$Play();
	//$(".current-title").text ("Choosing Application Type");	
	
});