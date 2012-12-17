/*!
 * Lapsus JavaScript Application v1.0.0
 * http://evandroeisinger.com/lapsus
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Evandro Eisinger
 * http://evandroeisinger.com
 */

 window.Lapsus = ( function( application, undefined ){

 	// create application error listener
	application.addEventListener( 'error', function( response ){
	    
	    // get erros reponse
	    var message = event.message,
	    	file    = response.filename,
	    	line    = response.lineno;

	    // validate _gaq object and push error
 		window._gaq && typeof window._gaq === 'array' ? _gaq.push(['_trackEvent', 'Errors', message, file, line ]) : false;
 		
 		// show error on console
	    return false;
	
	});

})( window );

asdasdasda(123);