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
	

	//slick
	$('.js-slick').slick({
		infinite: true,
		slidesToShow: 3,
		arrows: true,
		slidesToScroll: 3,
		responsive: [
			{
		        breakpoint: 1900,
		        settings: {
		        	slidesToShow: 5,
		        	slidesToScroll: 5,
		    	}
		    },
			{
		        breakpoint: 1600,
		        settings: {
		        	slidesToShow: 3,
		        	slidesToScroll: 3,
		    	}
		    },
			{
		        breakpoint: 768,
		        settings: {
		        	slidesToShow: 2,
		        	slidesToScroll: 2,
		    	}
		    },
		]
	});

	//menu

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

	//galleries synchronize (ITEM)
	var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
	  slideshows.not(this).cycle('goto', opts.currSlide);
	});

	$('.gallery__pager .slide').click(function() {
	  var index = $('.gallery__pager').data('cycle.API').getSlideIndex(this);
	  console.log(index);
	  slideshows.cycle('goto', index);
	});

	//select
	$(document).ready(function() {
	    $(document).click(function() {
	        $(".js-select-list").hide();
	        $(".js-select").removeClass("is-active");
	    });
	    function selectList() {
	        var select = $(".js-select");
	        var select_list = $(".js-select-list");
	        $("body").on("click", ".js-select", function(event){
	            if ($(this).hasClass("is-active")) {
	                select.removeClass("is-active");
	                select_list.hide();
	            }
	            else {
	                select.removeClass("is-active");
	                select_list.hide();
	                $(this).find(".js-select-list").show();
	                $(this).addClass("is-active");
	            }
	            event.stopPropagation();
	        });
	        $("body").on("click", ".js-select-list li", function(event){
	            var id = $(this).attr("data-id");
	            var text = $(this).text();
	            $(this).parents(".js-select").find(".js-select-text").text(text);
	            $(this).parents(".js-select").find(".js-select-input").val(id);
	            $(this).parent().hide();
	            $(this).parents(".js-select").removeClass("is-active");
	            event.stopPropagation();
	        });
	    }  
	    
	    selectList();
	    $("body").on("click", ".js-select", function(event){
	        event.stopPropagation();
	    });
	    
	});
	
	//colors
	$(document).ready(function() {
	    $(document).click(function() {
	        $(".js-colors-list").hide();
	        $(".js-colors").removeClass("is-active");
	    });
	    function selectList() {
	        var colors = $(".js-colors");
	        var colors_list = $(".js-colors-list");
	        $("body").on("click", ".js-colors", function(event){
	            if ($(this).hasClass("is-active")) {
	                colors.removeClass("is-active");
	                colors_list.hide();
	            }
	            else {
	                colors.removeClass("is-active");
	                colors_list.hide();
	                $(this).find(".js-colors-list").show();
	                $(this).addClass("is-active");
	            }
	            event.stopPropagation();
	        });
	        $("body").on("click", ".js-colors-list li", function(event){
	            var id = $(this).attr("data-id");
	            var text = $(this).text();
	            $(this).parents(".js-colors").find(".js-colors-text").html($(this).html());
	            $(this).parents(".js-colors").find(".js-colors-input").val(id);
	            $(this).parent().hide();
	            $(this).parents(".js-colors").removeClass("is-active");
	            event.stopPropagation();
	        });
	    }  
	    
	    selectList();
	    $("body").on("click", ".js-colors", function(event){
	        event.stopPropagation();
	    });
	    
	});

});