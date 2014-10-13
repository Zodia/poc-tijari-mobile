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
		$(".header").show();
		$(".footer").show();	
	
		$("#pageContent").load("pages/customer-entry-view.html", function () {
			$(this).enhanceWithin(); /* apply styles */
		});
		
		
	}
	else
	{
		$("#dialog").show();
		$("#dialog").shake();
	}
});

