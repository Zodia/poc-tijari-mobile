/**
 * 
 */


$("#existingapp").click(function() {

	loadPage("apps-list.html");
});

//$("#newapp").on ("click", function () {
//	customer_index = -1;
//	$("#pageContent").load("pages/customer-entry-view.html", function () {
//		
//		$(this).enhanceWithin(); /* apply styles */
//	});
//});

$( document ).ready(function() {
	var options = {
			$AutoPlay: "false",
			$AutoPlayInterval: 100000,
            $Loop: 0,            
            $DragOrientation: 3,                               
        };
	var options1 = {
			$Transitions :{$Duration:1200,x:-0.3,y:0.3,$Delay:60,$Zoom:1,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$JssorEasing$.$EaseInJump,$Top:$JssorEasing$.$EaseInJump,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2,$Round:{$Left:0.8,$Top:0.8}},
			$AutoPlayInterval: 100000,
			$AutoPlay: true,
			$DragOrientation: 3,                               
	};
	var options2 = {
			$Transitions :{$Duration:1200,x:-0.3,y:0.3,$Delay:60,$Zoom:1,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$JssorEasing$.$EaseInJump,$Top:$JssorEasing$.$EaseInJump,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2,$Round:{$Left:0.8,$Top:0.8}},
			$AutoPlayInterval: 100000,
			$AutoPlay: true,
			$DragOrientation: 3,                               
	};
	var options3 = {
			$Transitions :{$Duration:1200,x:-0.3,y:0.3,$Delay:60,$Zoom:1,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$JssorEasing$.$EaseInJump,$Top:$JssorEasing$.$EaseInJump,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2,$Round:{$Left:0.8,$Top:0.8}},
			$AutoPlayInterval: 100000,
			$AutoPlay: true,
			$DragOrientation: 3,                               
	};
	var options4 = {
			$Transitions :{$Duration:1200,x:-0.3,y:0.3,$Delay:60,$Zoom:1,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$JssorEasing$.$EaseInJump,$Top:$JssorEasing$.$EaseInJump,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2,$Round:{$Left:0.8,$Top:0.8}},
			$AutoPlayInterval: 100000,
            $AutoPlay: true,
            $DragOrientation: 3,                               
        };

		var jssor_slider1 = new $JssorSlider$("slideshow", options);
		var jssor_slider2 = new $JssorSlider$("slideshow1", options1);
		var jssor_slider3 = new $JssorSlider$("slideshow2", options2);
		var jssor_slider4 = new $JssorSlider$("slideshow3", options3);
		var jssor_slider5 = new $JssorSlider$("slideshow4", options4);
		
   
		jssor_slider1.$Play();
	//$(".current-title").text ("Choosing Application Type");	
	
});




$(".mortgages").click(function() {
	loadPage("mortgage-center-view.html");	
});
