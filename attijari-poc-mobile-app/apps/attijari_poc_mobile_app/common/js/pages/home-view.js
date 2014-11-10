var globalarray = [];

$(document).on ("pageshow", function() {
	
	$("#existingapp").on ("click", function () {
		loadPage ("apps-list.html");
	});
	
	$(".mortgages").on ("click", function () {
		loadPage ("mortgage-center-view.html");	
	});
	
	var options = {
		$AutoPlay: "false",
		$AutoPlayInterval:2000,
        $Loop: 0,            
        $DragOrientation: 1,                               
    };
	
	var options1 = {
		$Transitions : {
			$Duration: 1200, 
			x: -0.3, 
			y: 0.3, 
			$Delay: 60, 
			$Zoom: 1, 
			$Formation: $JssorSlideshowFormations$.$FormationStraightStairs, 
			$Easing: { 
				$Left: $JssorEasing$.$EaseInJump, 
				$Top: $JssorEasing$.$EaseInJump, 
				$Opacity: $JssorEasing$.$EaseLinear
			}, 
			$Opacity: 2, 
			$Round: { 
				$Left: 0.8, 
				$Top: 0.8
			}
		},
		$AutoPlayInterval: 2000,
        $AutoPlay: false,
        $DragOrientation: 3                               
	};
	
	var options2 = {
		$Transitions : {
			$Duration: 1200, 
			x: -0.3, 
			y: 0.3, 
			$Delay: 60, 
			$Zoom: 1, 
			$Formation: $JssorSlideshowFormations$.$FormationStraightStairs, 
			$Easing: { 
				$Left: $JssorEasing$.$EaseInJump, 
				$Top: $JssorEasing$.$EaseInJump, 
				$Opacity: $JssorEasing$.$EaseLinear
			}, 
			$Opacity: 2, 
			$Round: { 
				$Left: 0.8, 
				$Top: 0.8
			}
		},
		$AutoPlayInterval: 2000,
        $AutoPlay: false,
        $DragOrientation: 3                                   
	};
	
	var options3 = {
		$Transitions : {
			$Duration: 1200, 
			x: -0.3, 
			y: 0.3, 
			$Delay: 60, 
			$Zoom: 1, 
			$Formation: $JssorSlideshowFormations$.$FormationStraightStairs, 
			$Easing: { 
				$Left: $JssorEasing$.$EaseInJump, 
				$Top: $JssorEasing$.$EaseInJump, 
				$Opacity: $JssorEasing$.$EaseLinear
			}, 
			$Opacity: 2, 
			$Round: { 
				$Left: 0.8, 
				$Top: 0.8
			}
		},
		$AutoPlayInterval: 2000,
        $AutoPlay: false,
        $DragOrientation: 3                                 
	};
	
	var options4 = {
		$Transitions : {
			$Duration: 1200, 
			x: -0.3, 
			y: 0.3, 
			$Delay: 60, 
			$Zoom: 1, 
			$Formation: $JssorSlideshowFormations$.$FormationStraightStairs, 
			$Easing: { 
				$Left: $JssorEasing$.$EaseInJump, 
				$Top: $JssorEasing$.$EaseInJump, 
				$Opacity: $JssorEasing$.$EaseLinear
			}, 
			$Opacity: 2, 
			$Round: { 
				$Left: 0.8, 
				$Top: 0.8
			}
		},
		$AutoPlayInterval: 2000,
        $AutoPlay: false,
        $DragOrientation: 3                       
    };

	var jssor_slider1 = new $JssorSlider$ ("slideshow", options);
	var jssor_slider2 = new $JssorSlider$ ("slideshow1", options1);
	var jssor_slider3 = new $JssorSlider$ ("slideshow2", options2);
	var jssor_slider4 = new $JssorSlider$ ("slideshow3", options3);
	var jssor_slider5 = new $JssorSlider$ ("slideshow4", options4);
		
	jssor_slider1.$Pause ();
	jssor_slider2.$Pause ();
	jssor_slider3.$Pause ();
	jssor_slider4.$Pause ();
	jssor_slider5.$Pause ();
	
	globalarray[0] = jssor_slider1 ;
	globalarray[1] = jssor_slider2 ;
	globalarray[2] = jssor_slider3 ;
	globalarray[3] = jssor_slider4 ;
	globalarray[4] = jssor_slider5 ;
	
	setInterval ("tik()",3000);
});

function tik () {
	var j = Math.floor ((Math.random () * 5) + 0);

	for (var i = 0; i < globalarray.length; i++){
		if (j == i){
			globalarray [i].$Play ();
		} else {
			globalarray [i].$Pause ();
		}
	}
}