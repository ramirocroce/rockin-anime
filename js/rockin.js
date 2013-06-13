$(document).ready( function() {
	// Friendly iframe :)
		$('a.iframe').each(
			function (i) {
				$(this).replaceWith("<iframe src='" + this.getAttribute("href") + "'  frameborder='0' scrolling='no' style='width:550px; height:485px;'></iframe>");
			}
		);

	// Cufon
		Cufon.replace('h1, #download a'); 
		
   });