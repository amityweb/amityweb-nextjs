$(document).ready(function()
{
	
	/******************************
	Modals
	Docs: http://dimsemenov.com/plugins/magnific-popup/documentation.html
	******************************/
	$(".zoomin").magnificPopup(
	{
		type:'image',
		disableon: 580,
		closeOnContentClick: true,	// Enable if just one image in popup
		zoom:
		{
			enabled: true,
			duration: 300,
			easing: 'ease-in-out' 
		},
	  gallery:{
	    enabled:true
	  }
	});

	
});