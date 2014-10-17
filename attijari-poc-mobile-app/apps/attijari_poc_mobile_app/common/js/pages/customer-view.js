var prop_index = -1;
//$("#home_call").on("click", function() {
//	$("#pageContent").load("pages/customer-entry-view.html", function() {
//		$(this).enhanceWithin(); /* apply styles */
//	});
//});
$("#proprety_call").on("click", function() {
	customer = $("form").serializeObject();
	var correct=$("#customer_form").validationEngine('validate');
	//alert(correct);
	if(correct){
	
	if (customer_index == -1)
		$("#pageContent").load("pages/property-view.html", function() {
			$(this).enhanceWithin(); /* apply styles */
		});
	else
		$("#pageContent").load("pages/properties-listview.html", function() {
			$(this).enhanceWithin(); /* apply styles */
		});
}
});

$(".current-title").text("Customer View");
$(".left .back").text("Back");
$(".left").unbind("click").on("click", function() {
	loadPage("pages/customers-list.html"); // "pages/splash-view.html"
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


$(document).ready(function(){

	$("#customer_form").validationEngine({validateNonVisibleFields: true});	

	
	
	
	

});

function hideHistory(){
	if (customer_index == -1){
		   $('#historyContent').hide();
		
		}else{
			$('#historyContent').show();
		} 
	     
}


hideHistory(); 

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
