$(".current-title").text ("FAQ's");

fillFaqs (30);

function fillFaqs (count) {
	
	var content = "";
	for (i = 0; i < count; i ++) {
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
