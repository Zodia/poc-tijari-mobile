$( document ).ready(function() {
	
	$("#dialog").hide();	
	//$("#header").show();
	//$("#footer").show();
	$("#dialog").click(function () {
        //$(this).dialog('close');
    	$("#dialog").hide();
    });

});


$("#gosemulator").on("click",function(){
	
	$("#pageContent").load("pages/mortgage-simulator-view.html", function () {
		$(this).enhanceWithin();
	});
});

$("#buttongo").on("click",function(){
  //alert(login);
	if($('#login').val()=="demo" && $('#password').val()=="demo"  )
	{
		
		connected = 1;
		$(".right").show();
		$("#header").show();
		$("#footer").show();	
	
		$("#pageContent").load("pages/customer-entry-view.html", function () {
			$(this).enhanceWithin(); /* apply styles */
		});
		
		
	}
	else
	{
		
	
		$( "#dialog").dialog();
		$("#dialog").show();
		
	}
});

