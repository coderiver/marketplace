head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	$('.js-btn-menu').on('click', function() {
		$('.js-menu').toggleClass('is-active');
		return false;
	});

	//range
	$(function() {
		$( ".js-range" ).slider({
			range: true
		});
	});


});