var customer_index = -1;
var application_index=-1;
var connected = 0;

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
		loadPage ("pages/notifications-list-view.html");
	});
	
	$("#mortgageAction").on ("click", function () {
		loadPage ("pages/mortgage-simulator-view.html");
	});
	
	$("#askExpertAction").on ("click", function () {
		loadPage ("pages/ask_expert/expert-view.html");
	});
	
	$(".menu-profile").on ("click", function () {
		loadPage ("pages/employee-profile-view.html");
		$("nav#menu").trigger ("close.mm");
	});
	
	$(".menu-help").on ("click", function () {
		loadPage ("pages/help-center-view.html");
		$("nav#menu").trigger ("close.mm");
	});
	
	$(".menu-logout").on ("click", function () {
		loadPage ("pages/login-view.html");
		connected = 0;
		$("nav#menu").trigger ("close.mm");
	});
}

function loadPage (url) {
	$("#pageContent").load(url, function () {
        $(this).enhanceWithin(); /* apply styles */
    });
} 

function confirmOperation (message, actionBlock, promoteTitle, promoteContent) {
	$("#pageContent").load("pages/confirmation-view.html", function () {
        $(this).enhanceWithin();
        
        if (message !== null && message !== undefined) {
        	$(".confirmation-message-core").text (message).enhanceWithin ();
        }
        
        if (actionBlock !== null && actionBlock !== undefined) {
        	$(".additional-action").html (actionBlock).enhanceWithin ();
        }
        
        if (promoteTitle !== null && promoteTitle !== undefined) {
        	$(".promote-title").text (promoteTitle).enhanceWithin ();
        }
        
        if (promoteContent !== null && promoteContent !== undefined) {
        	$(".promote-content").html (promoteContent).enhanceWithin ();
        }
    });
}

function getConnectionStatus () {
	return connected;
}

function setConnectionStatus (status) {
	connected = status;
}
