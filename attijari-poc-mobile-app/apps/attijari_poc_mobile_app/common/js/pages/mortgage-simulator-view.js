$(document).on ("pageshow", function () {
	
	$("select.select-informations").on ("change", function () {
		loan ();
	});
	
	$("input.loan-amount-input").on ("keyup", function () {
		checkAndValidate (this);
	})
	
	/** 
	 * Submit button Action.
	 */
	$("#submitButton").on ("click", function () {
		sourcePage.title = "Mortgage Simulator"; 
		sourcePage.url = "mortgage-simulator-view.html";
	});
});

/**
 * Function to check and calculate the loan
 * @param as:
 * 	Context
 */
function checkAndValidate (as){
	checnum (as);
	loan ();
}

/**
 * Function that checks for input values
 * @param as
 */
function checnum (as) {
	var dd = as.value;
	
	if (isNaN(dd)) {
		dd = dd.substring (0, (dd.length - 1));
		as.value = dd;
	}
}   

/**
 * Function that computes the loan details
 */
function loan () {
	var cn = document.getElementById ("mortgageSimulator").getElementsByTagName ("input");

	var select = document.getElementById ("select-native-1");
	var mValue = select.options[select.selectedIndex].value;
	var select2 =  document.getElementById ("select-native-2");
	var mValue2 = select2.options[select2.selectedIndex].value;
	
	var terms = 0;
	if (mValue == 0) {
		 terms = 5;
	} else if (mValue == 1) {
		 terms = 10;
	} else if (mValue == 2) {
		 terms = 15;
	} else if (mValue == 3) {
		 terms = 20;
	} else if (mValue == 4) {
		 terms = 25;
	} else if (mValue == 5) {
		 terms = 30;
	} else if (mValue == 6) {
		 terms = 35;
	} else if (mValue == 7) {
		 terms = 40;
	} else {
		 terms = 0;
	}
	
	var interest = 0;
	if (mValue2 == 0) {
		interest = parseFloat ("0.01");
	} else if (mValue2 == 1) {
		interest = parseFloat ("0.02");
	} else if (mValue2 == 2) {
		interest = parseFloat ("0.03");
	} else if (mValue2 == 3) {
		interest = parseFloat ("0.04");
	} else if (mValue2 == 4) {
		interest = parseFloat ("0.05");
	} else if (mValue2 == 5) {
		interest = parseFloat ("0.06");
	} else if (mValue2 == 6){
		interest = parseFloat ("0.07");
	} else if (mValue2 == 7){
		interest = parseFloat ("0.08");
	} else if (mValue2 == 8){
		interest = parseFloat ("0.09");
	} else if (mValue2 == 9){
		interest = parseFloat ("0.10");
	} else{
		interest = 0;
	}
	
	if (cn[0].value != "") {

		var a = cn[0].value;
		var b = interest;
		var c = terms;
		var n = c * 12;
		var r = b / 12; //(12 * 100)
		var p = (a * r * Math.pow ((1 + r), n)) / (Math.pow ((1 + r), n) - 1);
		
		var prin = Math.round (p * 100) / 100;
		cn[3].value = prin + " MAD";
	
		var mon = Math.round (((n * prin) - a) * 100) / 100;
		cn[4].value = mon + " MAD";
		
		var tot2 = (cn[2].value * a * c) /100 ;
		cn[5].value = tot2 + " MAD";
		
		var pmi = (cn[1].value * a * 2) / 100;
		cn[6].value = pmi + " MAD";
		
		for (var i = 0; i < n; i++) {
			var z = a * r * 1;
			var q = Math.round(z * 100) / 100;
			var t = p - z;
			var w = Math.round(t * 100) / 100;
			var e = a - t;
			var l = Math.round(e * 100) / 100;
			a = e;
		}
	} else{
		cn[3].value = "";
		cn[4].value = "";
		cn[5].value = "";
	}
}
