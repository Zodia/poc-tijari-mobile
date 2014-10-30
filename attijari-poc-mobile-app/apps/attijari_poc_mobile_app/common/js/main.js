var customer_index = -1;
var application_index = -1;
var connected = 0;

var pagesStack = new Array ();

function wlCommonInit () {
	// Common initialization code goes here
	loadPage ("pages/login-view.html");
}

function loadPage (url) {
	$(":mobile-pagecontainer").pagecontainer ("change", url, { transition: "slide" });
} 

$(document).on ("pagecreate", function () {
	$(".logout").on ("click", function () {
		loadPage ("login-view.html");
		connected = 0;
	});
});

function getConnectionStatus () {
	return connected;
}

function setConnectionStatus (status) {
	connected = status;
}