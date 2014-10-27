var customer_index = -1;
var application_index = -1;
var connected = 0;

var pagesStack = new Array ();

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
	
	loadPage ("pages/splash-view.html");
	
	/* Navigation drawer menu */
	$(document).on ("swipeleft swiperight", "#page", function (e) {
        if ($(".ui-page-active").jqmData ("panel") !== "open") {
        	
            if (e.type === "swipeleft") {
                $("#right-panel").panel ("open");
            }
        }
    });
	
	$("#homeAction").on ("click", function () {
		loadPage ("home-view.html");
	});
	
	$("#notificationsAction").on ("click", function () {
		loadPage ("notifications-list-view.html");
	});
	
	$("#settingsAction").on ("click", function () {
		loadPage ("mortgage-simulator-view.html");
	});
	
	$("#askExpertAction").on ("click", function () {
		loadPage ("ask_expert/expert-view.html");
	});
	
	$("#right-menu li.logout").on ("click", function () {
		loadPage ("login-view.html");
		connected = 0;
	});
}

function loadPage (url) {
	/*$("#pageContent").load (url, function () {
        $(this).enhanceWithin(); /* apply styles 
    });*/
	
	$(":mobile-pagecontainer").pagecontainer ("change", url, { transition: "slide" });
} 

function confirmOperation (message, actionBlock, promoteTitle, promoteContent) {
	load("confirmation-view.html", function () {
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
