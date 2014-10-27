/**
 * 
 */



$("#existingapp").click(function() {

	loadPage("apps-list.html");
});




//$("#newapp").on ("click", function () {
//	customer_index = -1;
//	$("#pageContent").load("pages/customer-entry-view.html", function () {
//		
//		$(this).enhanceWithin(); /* apply styles */
//	});
//});

$( document ).ready(function() {
	
	//$(".current-title").text ("Choosing Application Type");	
	
});

/*
 * starting  the slide  effect
 * */
$("#one").hide();
$("#two").hide();
$("#tree").hide();
var i=0;
$("#slider").on ("click", function () {
	//$("#two").show("slide", { direction: "right" }, 1200);
	//$( "#slider" ).hide();
	//$( "#slider" ).html( $("#two").html());
	if(i==0){
		$( "#slider" ).html( $("#one").html());
		//$("#one").show("slide", { direction: "left" }, 3000);
	i=i+1;
	return -1;
	}
	if(i==1){
		$( "#slider" ).html( $("#two").html());
		i=i+1;
		return -1; 
		}
	if(i==3){
		$( "#slider" ).html( $("#tree").html());
		i=0;
		return -1;
		}
});


$("#mortgages").click(function() {
	
loadPage("mortgage-center-view.html");

		
});



