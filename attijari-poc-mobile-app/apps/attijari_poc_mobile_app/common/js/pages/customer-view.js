$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

var prop_index = -1;
//$("#home_call").on("click", function() {
//	$("#pageContent").load("pages/customer-entry-view.html", function() {
//		$(this).enhanceWithin(); /* apply styles */
//	});
//});
$("#cancel").on("click", function() {
	//customer = $("form").serializeObject();
	var correct=$("#customer_form").validationEngine('validate');
	//alert(correct);
	if(correct){
	
	//if (customer_index == -1)
		$("#pageContent").load("pages/property-view.html", function() {
			$(this).enhanceWithin(); /* apply styles */
		});
//	else
//		$("#pageContent").load("pages/properties-listview.html", function() {
//			$(this).enhanceWithin(); /* apply styles */
//		});
}
});
$("#continue").on("click", function() {
	

		$("#pageContent").load("pages/property-view.html", function() {
			$(this).enhanceWithin(); /* apply styles */
		});
	

});

$(".current-title").text("Customer View");
$(".left .back").text("Back");
$(".left").unbind("click").on("click", function() {
	customer={};
	if (customer_index == -1)
	     loadPage("pages/customer-entry-view.html"); // "pages/splash-view.html"
	else
		loadPage("pages/customers-list.html");
});

//data = {
//	"Title" : "",
//	"First_name" : "",
//	"Last_name" : "",
//	"Nationality" : "",
//	"Email" : "",
//	"Mobile" : "",
//	"Monthly_income" : "",
//	"personal_loans" : "",
//	"MP_personal_loans" : "",
//	"car_loans" : "",
//	"MP_car_loans" : "",
//	"existing_mortgages" : "",
//	"MP_existing_mortgages" : "",
//	"Existing_debit_card" : "",
//	"Existing_credit_card" : ""
//
//};

// reset form values from json object
function resetForm() {
	var data;
	if (customer_index == -1)
		data=customer;
	else
		data=customers[customer_index];
	
	$.each(data, function(name, val) {
		var $el = $('[name="' + name + '"]'), type = $el.attr('type');

		switch (type) {
		case 'checkbox':  
			$el.attr('checked', 'checked');  
			break;
		case 'radio':
			$el.filter('[value="' + val + '"]').attr('checked', 'checked');
			break;
		default:
			$el.val(val);
		}
	})
}

resetForm();

//photography preview




//$(document).ready(function(){
//
//	$("#customer_form").validationEngine({validateNonVisibleFields: true});	
//  //date picker
//	
//	$('#dob').scroller({ preset: 'date',
//        seconds: true,
//        ampm : false,
//        dateOrder: 'dMyy',
//        dateFormat :'dd/mm/yy',
//        theme: 'ios'
//    });
//	
//	// photography preview
//	
//	
//	
//	
//	
//	
//
//});

$(document).ready(function() {
    $("#owl-demo").owlCarousel({

    navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem : true,
	  afterInit : function(elem){
    var that = this;
    that.owlControls.prependTo(elem);
	 
  }

    // "singleItem:true" is a shortcut for:
    // items : 1, 
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

    });
  });

function hideHistory(){
	if (customer_index == -1){
		   $('#historyContent').hide();
		
		}else{
			$('#historyContent').show();
		} 
	     
}


hideHistory(); 


///////////////////////

function displayAsImage3(file, containerid) {
	if (typeof FileReader !== "undefined") {
	  
		var container = document.getElementById(containerid),
		    img = document.createElement("img"),
		    reader;
		container.appendChild(img);
		reader = new FileReader();
		reader.onload = (function (theImg) {
			return function (evt) {
				theImg.src = evt.target.result;
			};
		}(img));
		reader.readAsDataURL(file);
	}
}

$("#chooseFile").click(function(e){
	e.preventDefault();
	$("#imageInput").trigger("click");
});
$("#imageInput").change(function(){
	var file = $("#imageInput")[0].files[0];            
	$("#preview").empty();
	displayAsImage3(file, "preview");
	
	$info = $("#info");
	$info.empty();
	if (file && file.name) {
		$info.append("<li>name:<span>" + file.name + "</span></li>");
	}
	if (file && file.type) {
		$info.append("<li>type:<span>" + file.type + "</span></li>");
	}
	if (file && file.size) {
		$info.append("<li>size:<span>" + file.size + " bytes</span></li>");
	}
//	if (file && file.lastModifiedDate) {
//		$info.append("<li>lastModifiedDate:<span>" + file.lastModifiedDate + "</span></li>");
//	}
	$info.listview("refresh");
});


