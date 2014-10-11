$( document ).ready(function() {

	$("#dialog").hide();	

	$("#dialog").click(function () {
        $(this).dialog('close');
    	$("#dialog").hide();
    });


});

$("#buttongo").on("click",function(){
  //alert(login);
	if($('#login').val()=="demo" && $('#password').val()=="demo"  )
	{
	alert("success");
	
	//$.mobile.loadPage("pages/existing-or-new-custemer.html");
		$("#pageContent").load("pages/existing-or-new-custemer.html", function () {
			$(this).enhanceWithin(); /* apply styles */
		});
		
		
	}
	else
	{
		//alert("failure");
		$("#dialog").show();
		$("#dialog").shake();
	}
});

