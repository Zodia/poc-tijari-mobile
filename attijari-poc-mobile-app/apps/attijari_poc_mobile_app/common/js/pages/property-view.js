$(document).ready(function() {

	$("#property_form").validationEngine({
		validateNonVisibleFields : true
	});

});

function openFileOption()
{
  document.getElementById("file1").click();
}

// if(prop_index== -1)
// document.getElementById("doc_call").disabled = true;

$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name] !== undefined) {
			if (!o[this.name].push) {
				o[this.name] = [ o[this.name] ];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};

function loadForm() {
	var data;
	data = property;
	$.each(data, function(name, val) {
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
	});
}

loadForm();


//$("#mortgage_terms").on("click", function() {
//	property = $("form").serializeObject();
//	var correct = $("#property_form").validationEngine('validate');
//	// alert(correct);
//	if (correct) {
//		loadPage("mortgage-terms.html");
//	}
//});

