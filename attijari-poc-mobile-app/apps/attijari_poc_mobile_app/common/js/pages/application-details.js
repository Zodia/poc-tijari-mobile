$(".current-title").text("Application details");
$(".left").off();
$(".left").on("click", function() {
	loadPage("pages/apps-list.html");
});

$('#edit').on('click', function() {
	property = applications[application_index].customer.property;
	customer = applications[application_index].customer;
	loadPage("pages/customer-view.html");
});
$('#cancel').on('click', function() {
	loadPage("pages/home-view.html");
});
function resetFormCustomer() {
	$.each(applications[application_index].customer, function(name, val) {
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

resetFormCustomer();

function resetFormProperty() {
	$.each(applications[application_index].customer.property, function(name,
			val) {
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

resetFormProperty();