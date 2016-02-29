(function($){
	
	"use strict";
	
    $(document).ready(function(){
	
		jQuery('#countdown_dashboard').countDown({
				targetDate: {
					'day': 		30, // Put the date here
					'month': 	5, // Month
					'year': 	2016, // Year
					'hour': 	0,
					'min': 		0,
					'sec': 		0
				} //,omitWeeks: true
		});
		
		/* Gallery
		================================================== */
		new Photostack( document.getElementById( 'photostack' ), {
			callback : function( item ) {
				//console.log(item)
			}
		} );	
			
			/* Gallery popup
		=================================================== */	
		$('.photostack').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title');
				}
			},
			/* zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			} */
		});
		
		
	
			
	});		


})(jQuery);