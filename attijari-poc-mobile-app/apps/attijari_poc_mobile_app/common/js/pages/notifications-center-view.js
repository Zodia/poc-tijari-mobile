$(function() {

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
});

$("#unread-notifications").addClass ($.mobile.activeBtnClass);
fillList (4, false, false)

$("#unread-notifications").on ("click", function () {
	fillList (4, false, false);
});

$("#all-notifications").on ("click", function () {
	fillList (10, false, true);
});

function fillList (count, append, all) {
	var listItemClass = "listItem";
	var content = "";
	
	if (!$(this).hasClass ($.mobile.activeBtnClass)) {
		
		for (i = 0; i < count; i ++) {
			
			content += '<li id=' + listItemClass + '>';
			content += '<div class="delete-button"><a href="notification-content.html" class="ui-btn delete-btn">Delete</a></div>';
			content += '<a href="#" class="notification-item-a">';
			content += '<div class="ui-li-thumb"></div>';
			content += '<div class="ui-li-text">';
			content += '<h3>Credit elligibility</h3>';
			content += '<p class="notification-core">';
			content += 'We have recievede  uhdccd uhc cdyucd cduhcd ucdhcd cduhcd ucdcd ucd cuhcd ucdcd ucdbcd ubc ahlan you how are you doing it\'s not good';
			content += 'We have recievede  uhdccd uhc cdyucd cduhcd ucdhcd cduhcd ucdcd ucd cuhcd ucdcd ucdbcd ubc ahlan you how are you doing it\'s not good';
			content += 'We have recievede  uhdccd uhc cdyucd cduhcd ucdhcd cduhcd ucdcd ucd cuhcd ucdcd ucdbcd ubc ahlan you how are you doing it\'s not good';
			content += 'We have recievede  uhdccd uhc cdyucd cduhcd ucdhcd cduhcd ucdcd ucd cuhcd ucdcd ucdbcd ubc ahlan you how are you doing it\'s not good';
			content += 'We have recievede  uhdccd uhc cdyucd cduhcd ucdhcd cduhcd ucdcd ucd cuhcd ucdcd ucdbcd ubc ahlan you how are you doing it\'s not good';
			content += '</p>';
			content += '</div>';
			content += '</a>';
			content += '</li>';
			
			listItemClass = "listItem" + i;
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
}

$(".load-more").on ("click", function () {
	fillList (10, true, true);
});

/*$(".notifications-list").on ("click", "li", function () {
	loadPage ("pages/notification-content-view.html");
});*/