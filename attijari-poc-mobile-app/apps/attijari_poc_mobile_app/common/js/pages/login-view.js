$( document ).ready(function() {
	
	$("#dialog").hide();	
	$(".right").hide();
	$("#header").show();
	$("#footer").hide();
	$("#dialog").click(function () {
        //$(this).dialog('close');
    	$("#dialog").hide();
    });
	if (connected == 1){
		

		loadPage("pages/apps-list.html");
		
		
	}
		
		
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
		$("#footer").show();	
	
		$("#pageContent").load("pages/home-view.html", function () {
			$(this).enhanceWithin(); /* apply styles */
		});
		
		
	}
	else
	{
		
	
		$( "#dialog").dialog();
		$("#dialog").show();
		
	}
});

