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
function chatWithExpert(expertFirstName, expertLastName, expertType) {

	//Remove if any text are present in chat window
	$("#chatConversionArea").html("");
	
	$("#chatWindowSection").show();

	$("#expertImageSection").html(
			'<img src="images/pages/ask_expert/chat_with_expert/expert-'
					+ expertFirstName + '.jpg">');
	$("#expertInfoSection")
			.html(
					'<div class="ui-block-b" id="expertInfoSection" style="width: 65%">'
							+ '<font face="verdana" size="4" color="white">'
							+ expertFirstName
							+ ' '
							+ expertLastName
							+ '</font><br> <font face="verdana" size="1" color="white">Designation:'
							+ expertType
							+ '<br> Phone: +971 566766488<br>Email:'
							+ expertFirstName
							+ '.'
							+ expertLastName
							+ '@ae.ibm.com'
							+ '<br> Address: Building 5,	Rabat, Morocco</font>	');
	
	document.getElementById("expertName").value = expertFirstName+' '+expertLastName;
};

// Alert messages when experts are Busy & Offline
function alertMsgPopup(status) {

	$("#chatWindowSection").hide();
	$("#statusAlertPopUp")
			.html(
					'<img src="images/pages/ask_expert/expert_view/icon-alert.png">'
							+ '<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a> '
							+ 'Currently expert is ' + status
							+ ', Please reach out to other experts');				
     }

/**
 * ChatConversion function is illustration only of chat services as
 * part of POC, These are static chat messages and will be enhanced or will get
 * replaced with chat service system.
 */

function chatConversation() {
		
	// Chat text entered into textbox of chat window
	chatText = "<font color='BLACK' size='2'> Shailendra Mishra "
			+ document.getElementById("inputchatText").value + "</font><br>";

	// Response Chat
	responseChat1 = "<font color='Blue'  size='2'> "+document.getElementById("expertName").value +" : Hello </font> <br>";
	responseChat2 = "<font color='Blue'  size='2'> "+document.getElementById("expertName").value +" :  Please tell me </font><br>";
	
	// Chat conversation chat window - Div :chatConversionArea
	document.getElementById("chatConversionArea").value = $(
			"#chatConversionArea").html(
			chatText + responseChat1 + responseChat2);

	// Chat conversation in textArea of chat window

	/*
	 * if(!isEmpty($('#chatConversionArea'))){
	 * document.getElementById("chatConversionArea").value =
	 * document.getElementById("chatConversionArea").value +
	 * $("#chatConversionArea").html( chatText + responseChat2) ; }
	 */

	// setInterval(2000);
	document.getElementById("inputchatText").value = "";
};