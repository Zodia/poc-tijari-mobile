function wlCommonInit () {
	/*
	 * Use of WL.Client.connect() API before any connectivity to a Worklight Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	
	$(".myButton").on ("click", function () {
		$("#pageContent").load("pages/splash-view.html", function () {
	        $(this).enhanceWithin(); /* apply styles */
	    });
	});
	$("#pageContent").load("pages/splash-view.html", function () {
        $(this).enhanceWithin(); /* apply styles */
    });
	
	$.mobile.linkBindingEnabled = true;
	$.mobile.ajaxEnabled = true;
	
	/* Navigation drawer menu */
	$(function () {
		$("nav#menu").mmenu ({
			dragOpen: true,
		    position: 'right',
		    direction: 'left'
		});
	});
}