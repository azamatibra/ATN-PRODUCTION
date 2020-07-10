$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__list').toggleClass('active');
	});
});


$('.content__slider').slick({
	dots: true,
	arrows:false,
	infinite: true,
	slidesToScroll: 1,
	speed: 400,
	slidesToShow: 1,
});

$(".content__arrow--next").on("click", function () {
	$(".content__slider").slick("slickNext")
})
$(".content__arrow--prev").on("click", function () {
	$(".content__slider").slick("slickPrev")
})








