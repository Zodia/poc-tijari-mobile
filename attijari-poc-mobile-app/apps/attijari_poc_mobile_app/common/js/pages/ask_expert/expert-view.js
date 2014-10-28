/*
 * sourcePage is an Object I have created for you in order to know from where your page is being 
 * accessed : mortgage-simulator or mortgage-terms.
 * 
 */
sourcePage.title = "Home";
sourcePage.url = "home-view.html";

$(".left a").attr("href", "../" + sourcePage.url);
$(".left a .label").text(sourcePage.title);

// Title of page
$(".current-title").text("Ask an expert");

/*
 * This function will change dynamically the value of expert info based on
 * whether he is Mortage or Refinance Expert input parameter : expertType =
 * Mortgage Or Refinance
 */
function dynamicExpertInfo(expertType) {

	// Mortgage Expert info
	if (expertType == 'Mortgage') {

		document.getElementById("chatExpertName").value = 'Shailendra Mishra';

		$("#expertInfoSectionImage")
				.html(
						"<img class='expertImage' src='../../images/pages/ask_expert/chat_with_expert/expert-Shailendra.jpg'>");
		$("#expertInfoSectionExpertName").html("<b>Shailendra Mishra</b>");
		$("#expertInfoSectionDisignation").html(
				"Mortage Expert<br> +971 566766488");
		$("#chatAreaExpertName").html("Shailendra Mishra:");

	} else if (expertType == 'Refinance') {// Refinance Expert info

		document.getElementById("chatExpertName").value = 'Souhail Guennouni';

		$("#expertInfoSectionImage")
				.html(
						"<img class='expertImage' src='../../images/pages/ask_expert/chat_with_expert/expert-souhail.jpg'>");
		$("#expertInfoSectionExpertName").html("<b>Souhail Guennouni</b>");
		$("#expertInfoSectionDisignation").html(
				"Refinance Expert<br> +971 566766488");
		$("#chatAreaExpertName").html("Souhail Guennouni:");
	}

}

/**
 * ChatConversion function is illustration only of chat services as part of POC,
 * These are static chat messages and will be enhanced or will get replaced with
 * chat service system.
 */
function chatConversation() {
	htmlText = $("#chatArea").html();

	htmlText=	htmlText
							+ '<div class="ui-grid-a" style="color: #000000; margin-left: 15px;">'
							+ '<div class="ui-block-a" style="width: 25%">Ali Abbas:</div>'
							+ '<div class="ui-block-b" style="width: 75%">';
	
							//if ((document.getElementById("employeeChatTextInput").value).indexOf('.png'  || '.jpg' || '.gif')>0){
							if ((document.getElementById("employeeChatTextInput").value).indexOf('.')>0){
								htmlText= htmlText +'<img src="../../images/pages/ask_expert/expert_view/sampleMortgageForm.png">'; 
							}else{
								htmlText= htmlText + document.getElementById("employeeChatTextInput").value;
							}
							htmlText= htmlText + '</div>'
							+ '</div>'

							+ '<div class="ui-grid-a" style="color: #B22222; margin-left: 15px;">'
							+ '<div class="ui-block-a" style="width: 25%">'
							// + document.getElementById('chatExpertName').value
							+ 'Shouhail Guennouni'
							+ ':</div>'
							+ '<div class="ui-block-b" style="width: 75%">';
							
							if (htmlText.indexOf('Ali')< 0){	
								htmlText= htmlText + 	'Ok';
							}else{
								htmlText= htmlText + 	'Ok, should we convert to this voice chat</div>';								}
							htmlText= htmlText+ '</div>';

							$("#chatArea").html(htmlText);
							
							document.getElementById("employeeChatTextInput").value = "";

}

/*
 * This part of JS will be used if Employee/Agent will press 'Enter' Button of
 * Keyboard
 * 
 */
$('#employeeChatTextInput')
		.keypress(
				function(event) {
					if (event.keyCode == 13) {
						htmlText = $("#chatArea").html();

						$("#chatArea")
								.html(
										htmlText
												+ '<div class="ui-grid-a" style="color: #000000; margin-left: 15px;">'
												+ '<div class="ui-block-a" style="width: 25%">Ali Abbas:</div>'
												+ '<div class="ui-block-b" style="width: 75%">'
												+ document
														.getElementById("employeeChatTextInput").value
												+ '</div>'
												+ '</div>'

												+ '<div class="ui-grid-a" style="color: #B22222; margin-left: 15px;">'
												+ '<div class="ui-block-a" style="width: 25%">'
												// +
												// document.getElementById('chatExpertName').value
												+ 'Shouhail Guennouni'
												+ ':</div>'
												+ '<div class="ui-block-b" style="width: 75%"> Ok, should we convert to this voice chat</div>'
												+ '</div>');

						document.getElementById("employeeChatTextInput").value = "";
					}
				});

/*
 * Browse File folder
 */
function openFile() {
	$('input[type=file]').click();
}

$('#attachFile').change(function(click) {
	$('#employeeChatTextInput').val(this.value);
	//alert(document.getElementById('employeeChatTextInput').value());
});


/* Display Video section for 
 * Chatting F2F
 */
function openVedio(){
	$("#chatVideo").show();
}

/* Close F2F Video 
 */
function closeVideo(){
	$("#chatVideo").hide();
}


// Invoking "Chat with expert" page
/*
 * $("#carLoanExpert1").on ("click", function () {
 * //$("#main-chat-with-expert").style.visibility = 'visible'; loadPage
 * ("pages/ask_expert/chat-with-expert.html"); }); // Invoking "Chat with
 * expert" page $("#searchlistitem1").on ("click", function () { loadPage
 * ("pages/ask_expert/chat-with-expert.html"); });
 */

// Chat with Expert in chat window
/*
 * function chatWithExpert(expertFirstName, expertLastName, expertType) {
 * 
 * //Remove if any text are present in chat window
 * $("#chatConversionArea").html("");
 * 
 * $("#chatWindowSection").show();
 * 
 * $("#expertImageSection").html( '<img
 * src="images/pages/ask_expert/chat_with_expert/expert-' + expertFirstName +
 * '.jpg">'); $("#expertInfoSection") .html( '<div class="ui-block-b"
 * id="expertInfoSection" style="width: 65%">' + '<font face="verdana" size="4"
 * color="white">' + expertFirstName + ' ' + expertLastName + '</font><br>
 * <font face="verdana" size="1" color="white">Designation:' + expertType + '<br>
 * Phone: +971 566766488<br>Email:' + expertFirstName + '.' + expertLastName +
 * '@ae.ibm.com' + '<br> Address: Building 5, Rabat, Morocco</font> ');
 * 
 * document.getElementById("expertName").value = expertFirstName+'
 * '+expertLastName; };
 */
// Alert messages when experts are Busy & Offline
/*
 * function alertMsgPopup(status) {
 * 
 * $("#chatWindowSection").hide(); $("#statusAlertPopUp") .html( '<img
 * src="images/pages/ask_expert/expert_view/icon-alert.png">' + '<a href="#"
 * data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete
 * ui-btn-icon-notext ui-btn-right">Close</a> ' + 'Currently expert is ' +
 * status + ', Please reach out to other experts'); }
 */

/**
 * ChatConversion function is illustration only of chat services as part of POC,
 * These are static chat messages and will be enhanced or will get replaced with
 * chat service system.
 */

/*
 * function chatConversation() { // Employee Name who is chatting with Expert
 * $("#employeeNameChat").html("Ali Abbas:"); // Chat text entered into textbox
 * of chat window $("#employeeChatAreaText").html(
 * document.getElementById("employeechatTextInput").value); // Resetting input
 * chat text box document.getElementById("employeechatTextInput").value = ""; };
 */