
/* JavaScript content from js/pages/mortgage-simulator-view.js in folder common */
/**
 * Header setting
 */
$(".current-title").text ("Mortgage Simulator");
$(".left .back").text("Home");
$(".left .back").on ("click", function () {
	loadPage ("pages/customer-entry-view.html");
});


/**
 * Submit button Action.
 */

$("#submitButton").on("click", function() {
	loan();

});

/**
 * Function that checks for input values
 * @param as
 */
function checnum(as) {
	var dd = as.value;
	if (isNaN(dd)) {
		dd = dd.substring(0, (dd.length - 1));
		as.value = dd;
	}
}
/**
 * Function that computes the loan details
 */
function loan() {
	var cn = document.getElementById("mortgageSimulator").getElementsByTagName(
			"input");
	var a = cn[0].value;
	var b = cn[1].value;
	var c = cn[2].value;
	var n = c * 12;
	var r = b / (12 * 100);
	var p = (a * r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
	var prin = Math.round(p * 100) / 100;
	cn[3].value = prin;
	var mon = Math.round(((n * prin) - a) * 100) / 100;
	cn[4].value = mon;
	var tot = Math.round((mon / n) * 100) / 100;
	cn[5].value = tot;
	for (var i = 0; i < n; i++) {
		var z = a * r * 1;
		var q = Math.round(z * 100) / 100;
		var t = p - z;
		var w = Math.round(t * 100) / 100;
		var e = a - t;
		var l = Math.round(e * 100) / 100;
		a = e;
	}
}

