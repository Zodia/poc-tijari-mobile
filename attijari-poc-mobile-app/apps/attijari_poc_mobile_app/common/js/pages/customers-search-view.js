$(".cancel").on("click", function () {
	$("div.ui-input-search.ui-shadow-inset.ui-input-has-clear.ui-body-inherit.ui-corner-all input").val ("");
	$("a.ui-input-clear.ui-btn.ui-icon-delete.ui-btn-icon-notext.ui-corner-all").addClass("ui-input-clear-hidden");
});

$('#list-results').children ('li').on ('click', function () {
	customer = customers[$(this).attr("id")];
	property = customer.properties[0];
});