var customer_index = -1;
var application_index = 0;
var connected = 0;

var countZoom = 0;
var zoom = 0;

function wlCommonInit () {
	// Common initialization code goes here
	if (connected == 0) {
		loadPage ("pages/applications-search-view.html");
	} else {
		loadPage ("pages/home-view.html");
	}
}

function loadPage (url) {
	$(":mobile-pagecontainer").pagecontainer ("change", url, { transition: "slide" });
} 

$(document).on ("pageshow", function () {
	$(".logout").on ("click", function () {
		loadPage ("login-view.html");
		connected = 0;
	});
	
	$('div *, p *, span *, li *, a *').each(function () {
	    var el = $(this);
	    var size = parseInt(el.css('font-size'));
	    el.data('font-size', size);
	});
	
	$("#changeSizeAction").on ("click", function () {
		
		countZoom ++;
		
		if (countZoom % 3 == 0) {
			zoom = 0;
			changeSize ();
		} else if (countZoom % 3 == 1) {
			zoom = 1;
			changeSize ();
		} else if (countZoom % 3 == 2) {
			zoom = 3;
			changeSize ();
		}
		
	});
});

function getConnectionStatus () {
	return connected;
}

function setConnectionStatus (status) {
	connected = status;
}

function changeSize () {
	$('div *, p *, span *, li *, a *').each(function () {
        var el = $(this);
        var size = el.data('font-size');
        el.css('font-size', Math.max (size + zoom, 0) + 'px');
    });
}
