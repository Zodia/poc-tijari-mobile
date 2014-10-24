var customer_index = -1;
var application_index = -1;
var connected = 0;

var pagesStack = new Array ();

function wlCommonInit () {
	
	// Common initialization code goes here
	
	changePage ("pages/splash-view.html");
	
	$("#homeAction").on ("click", function () {
		changePage ("pages/customer-entry-view.html");
	});
	
	$("#notificationsAction").on ("click", function () {
		changePage ("pages/notifications-list-view.html");
	});
	
	$("#mortgageAction").on ("click", function () {
		changePage ("pages/mortgage-simulator-view.html");
	});
	
	$("#askExpertAction").on ("click", function () {
		changePage ("pages/ask_expert/expert-view.html");
	});
	
	$("nav#menu li a").on ("click", function () {
		$("nav#menu").trigger ("close.mm");
	});
	
	$(".menu-logout").on ("click", function () {
		changePage ("pages/login-view.html");
		connected = 0;
		$("nav#menu").trigger ("close.mm");
	});
}

function loadPage (url) {
	$("#pageContent").load (url, function () {
        $(this).enhanceWithin(); /* apply styles */
    });
} 

function storeInBackstack (url) {
	pagesStack.push (url)
}

function back () {
	loadPage (pagesStack.pop ());
	if (length > 0) {
		pagesStack.length = pagesStack.length - 1
	}
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

function changePage (url) {
	$(":mobile-pagecontainer").pagecontainer ("change", url).enhanceWithin ();
}

$(document).on ('pageinit', function () {
	$("nav#menu").mmenu ({
		dragOpen: true,
	    position: 'right',
	    direction: 'left'
	});
});