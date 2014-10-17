$("#cancel").on ("click", function () {
	$("#pageContent").load("pages/customer-view.html", function () {
		$(this).enhanceWithin(); /* apply styles */
	});
});


$(".current-title").text ("Properties list");
$(".left .back").text("Back");
$(".left").off();
$(".left").on ("click", function () {
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
		 property = customers[customer_index].properties[prop_index];
		 loadPage("pages/property-view.html");
	});
	 $("#listProperties").listview("refresh");
  
  
	
	
}

loadProperties();


