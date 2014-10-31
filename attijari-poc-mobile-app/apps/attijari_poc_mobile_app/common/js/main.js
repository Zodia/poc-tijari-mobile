var customer_index = -1;
var application_index = 0;
var connected = 0;

function wlCommonInit () {
	// Common initialization code goes here
	if (connected == 0) {
		loadPage ("pages/login-view.html");
	} else {
		loadPage ("pages/home-view.html");
	}
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
