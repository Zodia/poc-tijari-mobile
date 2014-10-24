$( '#gallery' ).click( function( e ) {
				e.preventDefault();
				$.swipebox( [
					{ href : 'images/gallery/img-01.JPG', title : 'Picture 1' },
					{ href : 'images/gallery/img-02.JPG', title : 'Picture 2' }
				] );
			} );

$(".current-title").text("Porperty photographs");
$(".left").off();
$(".left").on("click", function() {
	$("#pageContent").load("pages/property-view.html", function() {
		$(this).enhanceWithin();
	});
});
