fillFaqs (30);

function fillFaqs (count) {
	
	var title = "";
	var content = "";
	for (i = 0; i < count; i ++) {
		
		if (i % 10 == 0) {
			title = "Quel est le Délai de validité de l’offre de prêt : 30 jours ?";
			content = "L’offre de contrat de crédit immobilier est envoyée au client par la banque par courrier.</br> Elle ne doit pas être remise de la main à la main.</br> L’offre est valable <pre>30 jours au minimum</pre> à compter de sa réception par l’emprunteur. Pendant cette durée, la banque doit maintenir <span class='boldText'>inchangées</span> les conditions de son offre.";
		} else if (i% 10 == 1) {
			title = "Quelle est la Condition suspensive d’obtention du crédit : 1 mois ?";
			content = "";
		} else if (i% 10 == 2) {
			title = "";
			content = "";
		} else if (i% 10 == 3) {
			title = "";
			content = "";
		} else if (i% 10 == 4) {
			title = "";
			content = "";
		} else if (i% 10 == 5) {
			title = "";
			content = "";
		} else if (i% 10 == 6) {
			title = "";
			content = "";
		} else if (i% 10 == 7) {
			title = "";
			content = "";
		} else if (i% 10 == 8) {
			title = "";
			content = "";
		} else if (i% 10 == 9) {
			title = "";
			content = "";
		}
		
		
		content += '<div data-role="collapsible" class="faq-item">';
		content += '<h3>How to do xx ' + (i+1) + ' ? </h3>';
		content += '<div class="details-container">';
		content += 'This is the answer of the question <pre>' + i + '</pre>, This is the answer of the question , This is the answer of the question , This is the answer of the question ,';
		content += 'This is the answer of the question <pre>' + i + '</pre>, This is the answer of the question , This is the answer of the question , This is the answer of the question ,';
		content += 'This is the answer of the question <pre>' + i + '</pre>, This is the answer of the question , This is the answer of the question , This is the answer of the question ,';
		content += 'This is the answer of the question <pre>' + i + '</pre>, This is the answer of the question , This is the answer of the question , This is the answer of the question ,';
		content += 'This is the answer of the question <pre>' + i + '</pre>, This is the answer of the question , This is the answer of the question , This is the answer of the question ,';
		content += 'This is the answer of the question <pre>' + i + '</pre>, This is the answer of the question , <pre>This is the answer of the question , This is the answer of</pre> the question ,';
		content += 'This is the answer of the question <pre>' + i + '</pre>, This is the answer of the question , This is the answer of the question , This is the answer of the question ,';
		content += 'This is the answer of the question <pre>' + i + '</pre>, This is the answer of the question , This is the answer of the question , This is the answer of the question ,';
		content += 'This is the answer of the question <pre>' + i + '</pre>, This is the answer of the question , This is the answer of the question , This is the answer of the question ,';
		content += 'This is the answer of the question <pre>' + i + '</pre>, This is the answer of the question , This is the answer of the question , This is the answer of the question ,';
		content += 'This is the answer of the question <pre>' + i + '</pre>, This is the answer of the question , This is the answer of the question , This is the answer of the question ,';
		content += 'This is the answer of the question <pre>' + i + '</pre>, This is the answer of the question , This is the answer of the question , This is the answer of the question ,';
		content += 'This is the answer of the question <pre>' + i + '</pre>, This is the answer of the question , This is the answer of the question , This is the answer of the question ,';
		content += 'This is the answer of the <pre>question <pre>' + i + '</pre>, This is the answer of the question , This is the answer of the question </pre>, This is the answer of the question ,';
		content += 'This is the answer of the question <pre>' + i + '</pre>, This is the answer of the question , This is the answer of the question , This is the answer of the question ,';
		content += 'This is the answer of the question <pre>' + i + '</pre>, This is the answer of the question , This is the answer of the question , This is the answer of the question ,';
		content += '</div>';
		content += '</div>';
	}
	
	$("#faq-set").html (content);
	$("#faq-set").collapsibleset ();
}
