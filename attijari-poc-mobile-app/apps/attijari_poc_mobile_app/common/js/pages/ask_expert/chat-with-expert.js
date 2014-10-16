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
	responseChat1 = "<font color='Blue'  size='2'> Cristian Carstoiu : Hello </font> <br>";
	responseChat2 = "<font color='Blue'  size='2'> Cristian Carstoiu  :  Please tell me </font><br>";
	
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