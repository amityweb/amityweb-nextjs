jQuery(document).ready(function($)
{
	if ($('.slide1').length > 0)
	{
		$('.slide1').cycle(
		{
			fx				: 	'scrollHorz',
			log				:	false,
			slides			:	'.item',
			next			:	'.slide1-next',
			prev			:	'.slide1-prev',
			pager           :   '.carousel-indicators',
            pagerTemplate   :   '<li></li>',
			pauseOnHover	:	true,
			swipe			:	true,
			swipeFx			:	'scrollHorz',
			timeout			:	9000
		});
	}
	
	if ($('.slide2').length > 0)
	{
		$('.slide2').cycle(
		{
			fx				: 	'scrollHorz',
			log				:	false,
			slides			:	'.items',
			next			:	'.slide2-next',
			prev			:	'.slide2-prev',
			pager           :   '.slide-2-indicators',
            pagerTemplate   :   '<li></li>',
			pauseOnHover	:	true,
			swipe			:	true,
			swipeFx			:	'scrollHorz',
			timeout			:	9000
		});
	}
	
	
	/*if ($('.carousel-slide').length > 0)
	{
		var mql = window.matchMedia('all and (max-width: 767px)')
		if (mql.matches)
		{
			$count = 1;
		}
		else
		{
			$count = 3;
		}
		
		$('.partners-logo').cycle(
		{
			fx				: "carousel",
			carouselVisible	: $count,
			carouselFluid	: true,
			slides			: ".carousel-slide",
			log				: false,
			pauseOnHover	: true,
			speed			: 2000,
			timeout 		: 5000
		});
		
	}*/
	
});