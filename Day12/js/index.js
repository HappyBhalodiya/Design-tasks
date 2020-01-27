
// $('.slider').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });
$(document).ready(function(){
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		// dots: true,
		prevArrow: '<button type="button" class="slick-prev" data-role="none"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next" data-role="none"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
	});

})
