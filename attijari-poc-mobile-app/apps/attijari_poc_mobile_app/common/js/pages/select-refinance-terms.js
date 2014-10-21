
function checnum(as) {
	var dd = as.value;
	if (isNaN(dd)) {
		dd = dd.substring(0, (dd.length - 1));
		as.value = dd;
		
	}
}
function saveTerms () {
	var cn = document.getElementById("content").getElementsByTagName("input");
	terms.amount=cn[0].value;
	terms.interest=cn[1].value;
	terms.duration=cn[2].value;
}
// calling refinance simulator
$("#refinance_call").click(function() {
	saveTerms();
   $("#pageContent").load("pages/refinance-calculator-view.html", function () {
		
		$(this).enhanceWithin(); /* apply styles */
	});
	
});
$("#summurize_call").click(function() {
	   saveTerms();

	   $("#pageContent").load("pages/review-view.html", function () {
			
			$(this).enhanceWithin(); /* apply styles */
		});
		
	});

$("#expert_call").click(function() {

	   $("#pageContent").load("pages/ask_expert/expert-view.html", function () {
			
			$(this).enhanceWithin(); /* apply styles */
		});
		
});

$( document ).ready(function() {
	$(".left .back").text("Back");
	
	$(".current-title").text ("Select Refinance Terms");	
	
});

function loadTerms () {
	


$("#listTerms").append("<div class=\"ui-field-contain\"><label >Loan Amounts: </label><input onkeyup=checnum(this) type=\"text\" value=\""+terms.amount+"\"></input></div>");
$("#listTerms").append("<div class=\"ui-field-contain\"><label >Interest Rates: </label><input onkeyup=checnum(this) type=\"text\" value=\""+terms.interest+"\"></input></div>");
$("#listTerms").append("<div class=\"ui-field-contain\"><label >Term (Years):</label> <input onkeyup=checnum(this) type=\"text\" value=\""+terms.duration+"\"></input></div>");

	
//		 $("#listTerms").append("<li>Loan Amounts: <input onkeyup=checnum(this) type=\"text\" value=\""+terms.amount+"\"></input></li>");
//		 $("#listTerms").append("<li>Interest Rates: <input onkeyup=checnum(this) type=\"text\" value=\""+terms.interest+"\"></input></li>");
//		 $("#listTerms").append("<li>Term (Years): <input onkeyup=checnum(this) type=\"text\" value=\""+terms.duration+"\"></input></li>");
//	    
//		 $("#listTerms").listview("refresh");	
}

loadTerms();

$(".left .back").unbind('click').click(function() {

	$("#pageContent").load("pages/current-terms.html", function () {
			
			$(this).enhanceWithin(); /* apply styles */
		});
		
	});