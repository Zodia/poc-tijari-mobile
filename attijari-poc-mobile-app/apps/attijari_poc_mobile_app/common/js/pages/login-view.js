$( document ).ready(function() {
	$(".current-title").text ("Login Page");
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



$("#forgotpass").on("click",function(){
	
	$("#pageContent").load("pages/forgot-password-view.html", function () {
		$(this).enhanceWithin();
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
		$("#footer").show();	
	
		//loadPage("pages/home-view.html");
		loadPage("pages/home-view.html");
		
		
		
	}
	else
	{
		
	
		$( "#dialog").dialog();
		$("#dialog").show();
		
	}
});

