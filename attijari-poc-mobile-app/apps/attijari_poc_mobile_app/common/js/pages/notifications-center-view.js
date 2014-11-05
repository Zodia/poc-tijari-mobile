/*$(function() {

    function prevent_default (e) {
        e.preventDefault ();
    }

    function disable_scroll () {
        $(document).on ('touchmove', prevent_default);
    }

    function enable_scroll () {
        $(document).unbind ('touchmove', prevent_default)
    }

    var x;
    $('.notifications-list li > a')
	    .on ('touchstart', function(e) {
	        $('.notifications-list li > a').css ('left', '0px') // close em all
	        x = e.originalEvent.pageX // anchor point
	    })
	    .on ('touchmove', function(e) {
	        var change = e.originalEvent.pageX - x
	        change = Math.min (Math.max (-100, change), 0) // restrict to -100px left, 0px right
	        e.currentTarget.style.left = change + 'px'
	        if (change < -10) {
	        	disable_scroll (); // disable scroll once we hit 10px horizontal slide
	        }
	    })
        .on ('touchend', function(e) {
            var left = parseInt (e.currentTarget.style.left)
            var new_left = (left > -50 ? '0px' : '-100px') // snap back, or leave open, 50px threshold
            e.currentTarget.style.left = new_left
            enable_scroll ()
        });

    $('li .delete-btn').on ('touchend', function (e) {
        e.preventDefault ()
        $(this).parents ('li').slideUp ('fast', function () {
            $(this).remove ()
        })
    })
});*/

$(document).on ("pageshow", function () {
	var currentAllNotifications = 0;

	$("#unread-notifications").addClass ($.mobile.activeBtnClass);
	fillList (4, false, false)

	$("#unread-notifications").on ("click", function () {
		fillList (4, false, false);
	});

	$("#all-notifications").on ("click", function () {
		fillList (10, false, true);
	});

	function fillList (count, append, all) {
		var listItemId = "listItemId-0";
		var pic = "";
		var title = "";
		var extract = "";
		var content = "";
		
		if (!$(this).hasClass ($.mobile.activeBtnClass)) {
			
			for (i = 0; i < count; i ++) {
				
				if (i % 4 == 0) {
					pic = " style='background-image: url(../images/mehdi.jpg);'";
					title = "[Client : M. Bendriss Mehdi] : Eligibilité de crédit";
					extract = "Bonjour, Nous avons bien reçu votre demande concernant l\'éligibilité de Monsieur Bendriss Mehdi ingénieur informatique chez IBM Maroc";
					extract += " pour un Crédit Immobilier d\'une valeur de 600.000 dhs. Au vu de sa situation financière...";
				} else if (i % 4 == 1) {
					pic = " style='background-image: url(../images/ayoub.jpg);'";
					title = "[Client : M. Naciri Ayoub] : Rachat de crédit";
					extract = "Bonjour, Nous avons examiné méticuleusement la demande de Monsieur Ayoub Ingénieur informatique à IBM Maroc voulant racheter ses crédits";
					extract += " Nous nous devons de demander de plus amples informations concernant sa situation...";
				} else if (i % 4 == 2) {
					pic = " style='background-image: url(../images/souhail.jpg);'";
					title = "[Client : M. Guennouni Souhail] : Eligibilité de crédit";
					extract = "Bonjour, Nous avons bien reçu votre demande concernant l\'éligibilité de Monsieur Souhail Guennouni ingénieur informatique chez IBM Maroc";
					extract += "pour un Crédit Immobilier d\'une valeur d'1M dhs. Au vu de sa situation financière...";
				} else if (i % 4 == 3) {
					pic = " style='background-image: url(../images/cristian.jpg);'";
					title = "[Client : M. Carstoiu Cristian] : Crédit pour étranger";
					extract = "Bonjour, Nous avons bien reçu votre demande concernant un emprunt pour investissement sur le sol marocain de Monsieur Carstoiu Représentant ";
					extract += "commercial à IBM Dubaï, nous vous avouons ne pas avoir de réponse concrète à ce sujet...";
				}
				
				content += '<li>';
				content += '<a class="notification-item-a" id=' + listItemId + ' data-transition="slide">';
				content += '<div class="ui-li-thumb"' + pic + '></div>';
				content += '<div class="ui-li-text">';
				content += '<h3 style="font-weight: normal;">' + title + '</h3>';
				content += '<p class="notification-core">' + extract + '</p>';
				content += '</div>';
				content += '</a>';
				content += '</li>';
				
				if (all) {
					currentAllNotifications ++;
					listItemId = "listItemId-" + currentAllNotifications;
				} else {
					listItemId = "listItemId-" + (i+1);
				}
			}
			
			if (all) {
				$(".load-more").css ("display", "block");
			} else {
				$(".load-more").css ("display", "none");
			}
			
			if (!append) {
				$(".notifications-list").html (content);
			} else {
				$(".notifications-list").append (content);
			}
			
			if ($(".notifications-list").hasClass ("ui-listview")) {
				$(".notifications-list").listview ("refresh");
			} else {
				$(".notifications-list").listview ();
			}
		}
		
		$(".notifications-list a.notification-item-a").on ("click", function () {
			var cls = $(this).attr("id");
			cls = cls.split ("-");
			cls = parseInt (cls[1]);
			
			if (cls % 4 == 0) {
				expertNotification.pic = "../images/mehdi.jpg";
				expertNotification.title = "[Client : M. Bendriss Mehdi] : Eligibilité de crédit";
				expertNotification.status = "Rejeté";
				expertNotification.date = "19/10/2014";
				expertNotification.content = "Bonjour, Nous avons bien reçu votre demande concernant l\'éligibilité de Monsieur Bendriss Mehdi ingénieur informatique chez IBM Maroc";
					expertNotification.content += " pour un Crédit Immobilier d\'une valeur de 600.000 dhs. Au vu de sa situation financière, nous sommes navré de devoir refuser cette demande.";
					expertNotification.content += "</br>Pour rappel voici les 7 conditions à remplir chez une personne pour se voir éligible : ";
					expertNotification.content += "</br><ul><li>I) la demande de garanties </li><li>II) Les taux</li><li>III)  L’apport personnel</li><li>IV) 30% des revenus, une barre à ne pas (trop…) dépasser</li><li>V) La durée d’emprunt</li><li>VI) Les autres élements</li><li>VII) Consultations de fichiers auprès de la Banque</li>";
			} else if (cls % 4 == 1) {
				expertNotification.pic = "../images/ayoub.jpg";
				expertNotification.title = "[Client : M. Naciri Ayoub] : Rachat de crédit";
				expertNotification.status = "En cours...";
				expertNotification.date = "15/10/2014";
				expertNotification.content = "Bonjour, Nous avons examiné méticuleusement la demande de Monsieur Ayoub Ingénieur informatique à IBM Maroc voulant racheter ses crédits";
					expertNotification.content += " Nous nous devons de demander de plus amples informations concernant sa situation... </br></br> A savoir : </br> - son activité bancaire des 3 dernière années dans son ancienne banque.";
					expertNotification.content += "</br>- ses 8 dernières fiches de paie.</br>- Ainsi qu'une copie de son contrat de travail";
					
			} else if (cls % 4 == 2) {
				expertNotification.pic = "../images/souhail.jpg";
				expertNotification.title = "[Client : M. Guennouni Souhail] : Eligibilité de crédit";
				expertNotification.status = "Accepté";
				expertNotification.date = "13/10/2014";
				expertNotification.content = "Bonjour, Nous avons bien reçu votre demande concernant l\'éligibilité de Monsieur Bendriss Mehdi ingénieur informatique chez IBM Maroc";
					expertNotification.content += " pour un Crédit Immobilier d\'une valeur d'1 Million de dhs. Au vu de sa situation financière, nous nous réjouissons de le lui accorder.";		
			} else if (cls % 4 == 3) {
				expertNotification.pic = "../images/cristian.jpg";
				expertNotification.title = "[Client : M. Carstoiu Cristian] : Crédit pour étranger";
				expertNotification.status = "En cours...";
				expertNotification.date = "08/10/2014";
				expertNotification.content = "Bonjour, Nous avons bien reçu votre demande concernant un emprunt pour investissement sur le sol marocain de Monsieur Carstoiu Représentant ";
					expertNotification.content += " commercial à IBM Dubaï, nous vous avouons ne pas avoir de réponse concrète à ce sujet...</br>";
					expertNotification.content += "D'un autre cöté et afin d'encourager les investissements étrangers sur notre sol Merci de lui présenter notre produit : \"Foreign Investments\", en attendant la réponse du Siège. ";
			}
			
			loadPage ("notification-content-view.html");
		});
	}

	$(".load-more").on ("click", function () {
		fillList (10, true, true);
	});
});