
//$("#main-chat-with-expert").style.visibility = 'hidden';

$("#main-chat-with-expert").style.display = "hidden"; 

// Invoking "Chat with expert" page
	$("#carLoanExpert1").on ("click", function () {
		$("#main-chat-with-expert").style.visibility = 'visible';
	});
	
	// Invoking "Chat with expert" page
	$("#searchlistitem1").on ("click", function () {
		loadPage ("pages/ask_expert/chat-with-expert.html");
	});