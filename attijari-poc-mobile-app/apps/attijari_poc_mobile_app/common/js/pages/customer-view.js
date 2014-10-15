var prop_index = -1;
//$("#home_call").on("click", function() {
//	$("#pageContent").load("pages/customer-entry-view.html", function() {
//		$(this).enhanceWithin(); /* apply styles */
//	});
//});
$("#proprety_call").on("click", function() {
	
	if (customer_index == -1)
		$("#pageContent").load("pages/property-view.html", function() {
			$(this).enhanceWithin(); /* apply styles */
		});
	else
		$("#pageContent").load("pages/properties-listview.html", function() {
			$(this).enhanceWithin(); /* apply styles */
		});
});

$(".current-title").text("Customer View");
$(".left .back").text("Back");
$(".left").unbind("click").on("click", function() {
	loadPage("pages/customer-entry-view.html"); // "pages/splash-view.html"
});

data = {
	"Title" : "",
	"First_name" : "",
	"Last_name" : "",
	"Nationality" : "",
	"Email" : "",
	"Mobile" : "",
	"Monthly_income" : "",
	"personal_loans" : "",
	"MP_personal_loans" : "",
	"car_loans" : "",
	"MP_car_loans" : "",
	"existing_mortgages" : "",
	"MP_existing_mortgages" : "",
	"Existing_debit_card" : "",
	"Existing_credit_card" : ""

};

// reset form values from json object
function resetForm() {
	if (customer_index == -1)
		return 0;
	$.each(customers[customer_index], function(name, val) {
		var $el = $('[name="' + name + '"]'), type = $el.attr('type');

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
	})
}

resetForm();


$(document).on("pageshow", "#registerPage", function() {


	

	$("#registerForm").validate({

		errorPlacement: function(error, element) {
			if (element.attr("name") === "favcolor") {
				error.insertAfter($("#favcolor").parent());
			} else {
				error.insertAfter(element);
			}
		}

	});

});
