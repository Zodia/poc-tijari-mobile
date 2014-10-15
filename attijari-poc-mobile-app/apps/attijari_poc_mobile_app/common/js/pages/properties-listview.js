

$("#customer_call").on ("click", function () {
	$("#pageContent").load("pages/customer-view.html", function () {
		$(this).enhanceWithin(); /* apply styles */
	});
});

$("#cancel").on ("click", function () {
	$("#pageContent").load("pages/customer-view.html", function () {
		$(this).enhanceWithin(); /* apply styles */
	});
});


$(".current-title").text ("Properties list");
$(".left .back").text("Customer details");
$(".left .back").unbind("click").on ("click", function () {
	$("#pageContent").load("pages/customer-view.html", function () {
		$(this).enhanceWithin(); /* apply styles */
	});
});




function loadProperties () {
	
    
	$.each(customers[customer_index].properties, function(i,val ) {
		
		var li="<li id=\""+i+"\"><a>"+val.propAddress+"</a></li>";
		 $("#listProperties").append(li);
		
		});
	
	 $('#listProperties li').on('click', function (){
		 prop_index = $(this).attr("id"); 
		 loadPage("pages/property-view.html");
	});
	 $("#listProperties").listview("refresh");
  
  
	
	
}

loadProperties();


