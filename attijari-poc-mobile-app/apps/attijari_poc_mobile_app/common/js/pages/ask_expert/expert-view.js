
// Invoking "Chat with expert" page
/*	$("#carLoanExpert1").on ("click", function () {
		//$("#main-chat-with-expert").style.visibility = 'visible';
		loadPage ("pages/ask_expert/chat-with-expert.html");
	});
	
	// Invoking "Chat with expert" page
	$("#searchlistitem1").on ("click", function () {
		loadPage ("pages/ask_expert/chat-with-expert.html");
	});*/
	

// Chat with Expert in chat window
function chatWithExpert(expertFirstName,expertLastName, expertType){
	
	//$("#chatWindowSection").style.display='visible';
	//$("#chatWindowSection").hide();
	$("#chatWindowSection").show();
	
	$("#expertImageSection").html('<img src="images/pages/ask_expert/chat_with_expert/expert-'+expertFirstName+'.jpg">');
	$("#expertInfoSection").html('<div class="ui-block-b" id="expertInfoSection" style="width: 65%">'
			+'<font face="verdana" size="4" color="white">'+expertFirstName+' '+expertLastName
			+'</font><br> <font face="verdana" size="1" color="white">Designation:'+expertType
			+'<br> Phone: +971 566766488<br>Email:'+expertFirstName+'.'+expertLastName+'@ae.ibm.com' 
			+'<br> Address: Building 5,	Rabat, Morocco</font>	');
	};