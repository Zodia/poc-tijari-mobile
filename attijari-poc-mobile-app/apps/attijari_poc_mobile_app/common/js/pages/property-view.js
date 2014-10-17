
$("#cancel").on("click", function() {
	$("#pageContent").load("pages/customer-entry-view.html", function() {
		$(this).enhanceWithin(); /* apply styles */
	});
});

$(".current-title").text("Property details");
$(".left .back").text("Back");
$(".left").off();
if (prop_index != -1) {
	$(".left").on("click", function() {
		loadPage("pages/properties-listview.html");
	});
} else {
	$(".left").on("click", function() {
		loadPage("pages/customer-view.html");
	});
}


//if(prop_index== -1)
//	document.getElementById("doc_call").disabled = true; 

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
			});
}

loadForm();

$("#doc_call").on("click", function() {
	property = $("form").serializeObject();
	$("#pageContent").load("pages/supporting-docs-view.html", function() {
		$(this).enhanceWithin(); /* apply styles */
	});
});
