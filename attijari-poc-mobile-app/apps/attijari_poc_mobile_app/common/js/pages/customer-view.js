$("#home_call").on ("click", function () {
		$("#pageContent").load("pages/home-view.html", function () {
			$(this).enhanceWithin(); /* apply styles */
		});
	});
$("#proprety_call").on ("click", function () {
	$("#pageContent").load("pages/property-view.html", function () {
		$(this).enhanceWithin(); /* apply styles */
	});
});

$(".current-title").text ("Customer View");
$(".left").on ("click", function () {
	loadPage ("pages/customer-view.html"); // "pages/splash-view.html"
});



autoFill{

data = {
	        "Title": "Mr",
	        "First_name": "Rachid",
	        "Last_name": "Mahmoudi",
	        "Nationality": "Morrocan",
	        "Email": "az@gmail.com",
	        "Mobile":"(212)-6757657 676545",
	        "Monthly_income":"60000",
	        "personal_loans":"Yes",
	        "MP_personal_loans":"3000",
	        "car_loans":"Yes",
	        "MP_car_loans":"2000",
	        "existing_mortgages":"Yes",
	        "MP_existing_mortgages":"4000",
	        "Existing_debit_card":"Yes",
	        "Existing_credit_card":"No"
	       
	        	
	};

	// reset form values from json object
	function resetForm(){ 
		$.each(data, function (name, val) {
	    var $el = $('[name="' + name + '"]'),
	        type = $el.attr('type');

	    switch (type) {
	        case 'checkbox':
	            $el.attr('checked', 'checked');
	            break;
	        case 'radio':
	            $el.filter('[value="' + val + '"]').attr('checked', 'checked');
	            break;
	        default:
	            $el.val(val);
	    }
	})}
}
	
 resetForm();