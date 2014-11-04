fillFaqs (30);

function fillFaqs (count) {
	
	var title = "";
	var coreContent = "";
	for (i = 0; i < count; i ++) {
		
		if (i % 10 == 0) {
			title = "Quel est le Délai de validité de l’offre de prêt : 30 jours";
			content = "L’offre de contrat de crédit immobilier est envoyée au client par la banque par courrier.</br> "
			content += "Elle ne doit pas être remise de la main à la main.</br> L’offre est valable <pre>30 jours au minimum</pre> à compter de sa réception par l’emprunteur. "
			content += "Pendant cette durée, la banque doit maintenir <span class='boldText'>inchangées</span> les conditions de son offre.";
		} else if (i% 10 == 1) {
			title = "Quelle est la Condition suspensive d’obtention du crédit : 1 mois";
			content = "Le compromis ou la promesse de vente comporte une condition suspensive d’obtention du financement par l’acheteur, ";
			content += "lorsque celui-ci finance son achat par un crédit. Cette condition suspensive est valable au minimum un mois à compter de la signature de l’avant-contrat de vente." 
			content += "<pre>Ce délai peut être allongé par les parties ou être prolongé à l’expiration du délai minimal</pre>.";
			content += " Vous disposez en pratique d’un mois minimum pour trouver le prêt. Si la banque vous refuse le crédit, la vente est annulée. "
			content += "</br>La somme versée lors de la signature de la promesse de vente, généralement 10 % du prix de la vente, vous est remboursée."
			content += "<span class='boldText'>Renoncer au bénéfice de cette clause, attention aux conséquences</span>.";
			content += "</br>Vous pouvez renoncer au bénéfice de la condition suspensive en apposant une mention manuscrite dans l’avant-contrat de vente.";
			content += "</br>Mais attention aux conséquences de cette renonciation. Si vous devez recourir à un prêt, vous ne pourrez pas bénéficier des dispositions protectrices de la loi. Si vous n'obtenez pas le prêt et que vous devez renoncer à votre achat, vous devrez laisser au vendeur la somme versée à la signature de la promesse de vente.";
		} else if (i% 10 == 2) {
			title = "Quel est le Délai d’acceptation de l’offre de prêt : 10 jours";
			content = "A réception de l’offre de crédit, l’emprunteur dispose d’un <span class='boldText'>délai minimum de 10 jours de réflexion.</span>";
			content += "</br>Vous ne pouvez donner votre acceptation <pre>qu’après expiration de ce délai</pre>. C’est-à-dire que l’offre de prêt peut être signée et renvoyée seulement à partir du 11ème jour. Le jour de la réception de l’offre ne compte pas dans le délai.";
			content += "Si vous recevez l’offre le 06 mars, vous pouvez l’accepter à partir du 17 mars, <span class='boldText'>pas avant</span>."
			content += "</br>Pour exprimer votre acceptation, vous datez et signez l’offre et vous la renvoyez par courrier à la banque. Pour vérifier le respect du délai d’acceptation de 10 jours, c’est le cachet de La Poste qui est pris en compte.";
		} else if (i% 10 == 3) {
			title = "Quel est le contenu d’une proposition de crédit";
			content = "Un crédit immobilier vous engage sur des sommes d’argent importantes et ne doit pas être souscrit à la légère. Prenez donc bien le temps d’étudier la ou les propositions de prêt que le client a.";
			content += "</br>Voici les éléments obligatoires qui doivent figurer dans toutes offres de prêt :"
			content += "<ul><li>Identité de l’emprunteur.</li>";
			content += "<li>Identité du prêteur.</li>";
			content += "<li>Identité de la caution, s’il y en a une.</li>";
			content += "<li>Nature du prêt (crédit immobilier classique, prêt à taux zéro, prêt conventionné, etc..).</li>";
			content += "<li>Objet du prêt (construction d’une maison, achat d’un appartement neuf, achat d’une maison ancienne, etc.).</li>";
			content += "<li>Le montant du crédit.</li>";
			content += "<li>La durée des remboursements.</li>";
			content += "<li>Le taux d’intérêt de l’emprunt et sa nature (fixe ou variable).</li>";
			content += "<li>Dans le cas d’un taux fixe, un tableau d’amortissement du prêt récapitulant pour chaque échéance la répartition du remboursement entre intérêts et capital.</li>";
			content += "<li>Dans le cas d’un taux variable, les modalités du calcul de la variation du taux d’intérêt ainsi qu’une notice explicative avec des simulations pour expliquer " +
						"l’impact d’une variation du taux sur les mensualités, la durée du prêt et le coût total.</li>";
			content += "<li>Le coût total du prêt ainsi que son Taux Effectif Global (et modalités d’indexation si crédit à taux variable).</li>";
			content += "<li>La date à laquelle l’argent sera disponible.</li>";
			content += "<li>Les garanties et assurances exigées et leurs coûts. Elles doivent être accompagnées d’une information sur le fait que vous avez le droit de demander une délégation d’assurance de prêt immobilier pour une assurance couvrant les mêmes conditions.</li>";
			content += "<li>Le montant des frais de dossier.</li></ul>";
		} else if (i% 10 == 4) {
			title = "Comment comparer plusieurs propositions de crédits immobiliers";
			content = "Le coût d’un prêt immobilier peut avoir de fortes différences, même pour un montant et une durée identiques d’emprunt. ";
			content += "Il est donc recommandé de comparer les offres de prêt de plusieurs banques afin d’obtenir le meilleur crédit immobilier possible.</br>";
			content += "Pour simplifier votre démarche, vous pouvez demander une étude personnalisée auprès de plus de <span class='boldText'>100 banques</span>, cela ne prend que quelques minutes et c’est gratuit.";
			content += "Pour comparer deux offres entre elles, vous ne devez pas vous intéresser qu’au taux d’intérêt du crédit. Vous devez regarder l’ensemble des conditions et comparer le coût global des deux offres. Comme nous l’avons vu ci-dessus, la banque doit obligatoirement vous informer du coût total du prêt et du taux effectif global (TEG). C’est à partir de ces éléments que vous pourrez réellement comparer deux offres.";
			content += "Vérifiez également les différentes conditions proposées, notamment l’assurance de prêt immobilier et les frais de remboursement anticipé de votre crédit immobilier. Il est parfois préférable d’avoir un coût d’emprunt un peu plus élevé mais de bénéficier de conditions de modification plus souples et moins chères. Il est effectivement rare qu’un prêt immobilier ne subisse pas de modifications sur la durée et les conditions initialement prévues.";
		} else if (i% 10 == 5) {
			title = "Qu'est-ce que le nantissement";
			content = "<pre>« Nantir » son contrat d’assurance-vie</pre>, c’est-à-dire se servir de son contrat comme d’une garantie dans le cadre d’un crédit, est une option possible pour un crédit immobilier. Cependant, Benjamin Clavel balaie cette alternative dans le cas des primo-accédants : « Les banques peuvent accepter du nantissement sur du prêt in fine, jamais sur de la résidence principale ! »";
		} else if (i% 10 == 6) {
			title = "Comment saisir et vendre du bien immobilier aux enchères judiciaires";
			content = "Les enchères judiciaires sont celles qui permettent à chacun d'enchérir pour l'acquisition d'un bien immobilier dont la liste est continuellement affichée chaque semaine publiquement au tribunal.";
			content += "Cette méthode de recouvrement efficace pour le créancier <span class='boldText'>peut toucher tant la résidence habituelle du débiteur que ses résidences secondaires</span>.";
			content += "</br>Or, il existe de nombreux moyens de défense permettant au débiteur de ne pas faire les frais de la mise en vente de son bien immobilier aux enchères judiciaires.";
			content += "En effet, il est important de rappeler qu'à tout moment le débiteur peut décider de vendre amiablement son bien afin de tenter d’en obtenir un meilleur prix qu'à la barre du tribunal et ainsi de mettre fin à la tentative de saisie.";
			content += "Si cette vente est faite à un tiers de confiance, la vente amiable peut permettre de conserver le bien immobilier sans risque de saisie ultérieure.";
			content += "</br>Par ailleurs, il convient de noter que si les biens vendus aux enchères judiciaires peuvent l'être à bas prix en raison de l'absence d'enchérisseurs, ils le sont souvent au prix du marché moins 12% environs correspondant aux frais et émoluments de procédure.";
		} else if (i% 10 == 7) {
			title = "L'hypothèque";
			content = "En cas de non remboursement du prêt, la banque peut saisir le bien et le vendre pour se rembourser.";
			content += "</br>L’hypothèque est <span class='boldText'>obligatoirement</span> rédigée par un notaire et elle est enregistrée au bureau de la conservation des hypothèques. Elle coûte environ 2 % du montant du prêt, correspondant aux frais d’actes notariés et aux taxes.";
			content += "Et en cas de vente du bien avant la fin du crédit, le notaire doit annuler la garantie. Il procède à une mainlevée d’hypothèque. Des frais de mainlevée sont dus (frais d’actes + taxes).";
		} else if (i% 10 == 8) {
			title = "Comment définir la caution";
			content = "Gros avantage pour l’emprunteur : <span class='boldText'>c’est la garantie la moins chère</span>.";
			content += "</br>Un organisme financier se porte garant pour l’acquéreur vis-à-vis de sa banque et s’engage à payer à la place de celui-ci dans le cas où il ne payerait plus le crédit. Plusieurs sociétés de cautionnement proposent ce type de garantie, dont Crédit Logement est la plus connue et plus utilisée par les emprunteurs.</br>";
			content += "<pre>Le cautionnement par une société spécialisée ne nécessite pas d’acte notarié ni </br>d’enregistrement.<pre> D’où des frais en général moins élevés que pour l’hypothèque. Et le coût de la caution, qui comprend une commission et un versement à un fonds mutuel de garantie, est partiellement restitué (de l’ordre de 75 %) après complet remboursement du prêt.";
			content += "Plus rarement, le prêt immobilier peut être garanti par la caution d’un tiers, un membre de la famille de l’emprunteur par exemple. Elle n’est toutefois pas toujours acceptée par la banque, qui peut la considérer comme une garantie insuffisante de paiement en cas de défaillance de l’emprunteur.";
		} else if (i% 10 == 9) {
			title = "Garantie et assurance emprunteur : les différences";
			content = "Garantie du prêt et assurance emprunteur ne couvrent pas les mêmes risques. La garantie (hypothèque, caution…) protège la banque dans les cas de défaillance de l’emprunteur non couverts par l’assurance (difficultés financières non liées à la maladie ou l’invalidité par exemple).";
			content += "</br>En cas de non remboursement, la banque peut saisir le bien et le vendre pour se rembourser.";
			content += "L’assurance emprunteur prend le relais de l’emprunteur dans le paiement des échéances en cas de maladie ou d’invalidité provoquant une incapacité de travail ou dans le remboursement du capital restant dû en cas de décès.";
		}
		
		coreContent += '<div data-role="collapsible" class="faq-item">';
		coreContent += '<h3>' + title + ' ? </h3>';
		coreContent += '<div class="details-container">';
		coreContent += content;
		coreContent += '</div>';
		coreContent += '</div>';
	}
	
	$("#faq-set").html (coreContent);
	$("#faq-set").collapsibleset ();
}