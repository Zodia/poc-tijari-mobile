$("#takePictureField").on ("change", gotPic);
	
	loadProfileImage(customer.id);

	$.fn.serializeObject = function() {
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name] !== undefined) {
				if (!o[this.name].push) {
					o[this.name] = [ o[this.name] ];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};
	
	populateCountries ('#countries');
	resetForm ();
	
	$("#chooseFile").on ("click", function(e) {
		e.preventDefault();
		$("#imageInput").trigger("click");
	});

	$("#imageInput").on ("change", function() {
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
		$info.listview("refresh");
	});

function gotPic(event) {
	if (event.target.files.length == 1 && event.target.files[0].type.indexOf("image/") == 0) {
		document.getElementById("customer-image").style.backgroundImage = "url('" + (URL.createObjectURL(event.target.files[0])) + "')";
	}
}

function loadProfileImage(index) {
	switch (index) {
	case 0:
		document.getElementById("customer-image").style.backgroundImage = "url('../images/ayoub.jpg')";
		break;
	case 1:
		document.getElementById("customer-image").style.backgroundImage = "url('../images/mehdi.jpg')";
		break;
	case 2:
		document.getElementById("customer-image").style.backgroundImage = "url('../images/souhail.jpg')";
		break;
	default:
		break;
	}
}

var prop_index = -1;

function openFileOption(file) {
	document.getElementById(file).click();
}

// reset form values from json object

function resetForm() {
	var data;
	data = customer;
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
	});
}

function displayAsImage3(file, containerid) {
	if (typeof FileReader !== "undefined") {

		var container = document.getElementById(containerid), img = document
				.createElement("img"), reader;
		container.appendChild(img);
		reader = new FileReader();
		reader.onload = (function(theImg) {
			return function(evt) {
				theImg.src = evt.target.result;
			};
		}(img));
		reader.readAsDataURL(file);
	}
}
