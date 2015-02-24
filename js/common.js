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
		slidesToShow: 5,
		arrows: true,
		slidesToScroll: 5,
		responsive: [
			{
		        breakpoint: 1680,
		        settings: {
		        	slidesToShow: 4,
		        	slidesToScroll: 4,
		    	}
		    },
			{
		        breakpoint: 1280,
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
	//select-btns
	$(document).ready(function() {
	    $(document).click(function() {
	        $(".js-btns-list").hide();
	        $(".js-btns").removeClass("is-active");
	    });
	    function selectList() {
	        var btns = $(".js-btns");
	        var btns_list = $(".js-btns-list");
	        $("body").on("click", ".js-btns-btn", function(event){
	            if ($('.js-btns').hasClass("is-active")) {
	                $(this).parent('.js-btns').removeClass("is-active");
	                btns_list.hide();
	            }
	            else {
	                $(this).parent('.js-btns').addClass("is-active");
	               	
	                btns_list.hide();
	                $(this).parent('.js-btns').find(".js-btns-list").show();
	            }
	            event.stopPropagation();
	        });
	        $("body").on("click", ".js-btns-list li", function(event){
	            var id = $(this).attr("data-id");
	            var text = $(this).text();
	            $(this).parents(".js-btns").find(".js-btns-text").html($(this).html());
	            $(this).parents(".js-btns").find(".js-btns-input").val(id);
	            $(this).parent().hide();
	            $(this).parents(".js-btns").removeClass("is-active");
	            event.stopPropagation();
	        });
	    }  
	    
	    selectList();
	    $("body").on("click", ".js-colors", function(event){
	        event.stopPropagation();
	    });
	    
	});

	//spinner
	$(function() {
	    var spinner = $( ".js-spinner" ).spinner({
	    	max: 99,
	    	min: 0
	    });
	 	$( "button" ).button();
	});

	//tabs
	$('.tabs1 a').click(function(event) {
		$('.tabs1 a').removeClass('is-active');
		$(this).addClass('is-active');
		attr = $(this).attr('href');
		$('#advert,#sells').addClass('is-hidden');
		$(' '+attr).removeClass('is-hidden');
		return false;
	});
	$('.tabs2 a').click(function(event) {
		$('.tabs2 a').removeClass('is-active');
		$(this).addClass('is-active');
		attr = $(this).attr('href');
		$('#shop,#warehouse').addClass('is-hidden');
		$(' '+attr).removeClass('is-hidden');
		return false;
	});

});