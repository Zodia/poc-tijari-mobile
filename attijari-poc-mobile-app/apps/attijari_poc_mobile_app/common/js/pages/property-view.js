$("#doc_call").on("click", function() {
	$("#pageContent").load("pages/supporting-docs-view.html", function() {
		$(this).enhanceWithin(); /* apply styles */
	});
});
$("#cancel").on("click", function() {
	$("#pageContent").load("pages/customer-entry-view.html", function() {
		$(this).enhanceWithin(); /* apply styles */
	});
});

$(".current-title").text("Property details");
$(".left .back").text("Back");
if (prop_index != -1) {
	$(".left").unbind("click").on("click", function() {
		loadPage("pages/properties-listview.html");
	});
} else {
	$(".left").unbind("click").on("click", function() {
		loadPage("pages/customer-view.html");
	});
}

data = {
	"AlreadyOwn" : "N",
	"isExisting" : "E",
	"propAddress" : "Casa Nearshore, Shore 19, Sidi Maârouf, Casablanca",
	"propType" : "villa",
	"rooms" : ">4",
	"usage" : "rent",
	"liveableArea" : "210 sqm",
	"builtArea" : "250 sqm",
	"isEvaluated" : "Y",
	"evaluationSum" : "430,000"
};

if(prop_index== -1)
	document.getElementById("doc_call").disabled = true; 

function loadForm() {
	if (prop_index == -1)
		return 0;
	$.each(customers[customer_index].properties[prop_index],
			function(name, val) {
				var $el = $('[name="' + name + '"]'), type = $el.attr('type');

				switch (type) {
				case 'checkbox':
					$el.attr('checked', 'checked');
					break;
				case 'radio':
					$el.filter('[value="' + val + '"]').attr('checked',
							'checked');
					break;
				default:
					$el.val(val);
				}
			})
}

loadForm();
