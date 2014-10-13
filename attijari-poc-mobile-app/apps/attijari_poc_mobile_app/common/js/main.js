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
	
	$.mobile.linkBindingEnabled = true;
	$.mobile.ajaxEnabled = true;
	
	loadPage ("pages/splash-view.html");
	
	/* Navigation drawer menu */
	$(function () {
		$("nav#menu").mmenu ({
			dragOpen: true,
		    position: 'right',
		    direction: 'left'
		});
	});
	
	$("#homeAction").on ("click", function () {
		loadPage ("pages/customer-entry-view.html");
	});
	
	$("#notificationsAction").on ("click", function () {
		loadPage ("pages/notifications-view.html");
	});
	
	$("#mortgageAction").on ("click", function () {
		loadPage ("pages/mortgage-simulator-view.html");
	});
}

function loadPage (url) {
	$("#pageContent").load(url, function () {
        $(this).enhanceWithin(); /* apply styles */
    });
} 