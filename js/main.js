(function($){
	
	"use strict";
	
    $(document).ready(function(){
	
		jQuery('#countdown_dashboard').countDown({
				targetDate: {
					'day': 		30, // Put the date here
					'month': 	4, // Month
					'year': 	2016, // Year
					'hour': 	14,
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
			
	
			
	});		


})(jQuery);