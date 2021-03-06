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
	            return false;
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
	$('.js-popup-open').click(function(event) {
		attr = $(this).attr('href');
		$('#luckyprice, #phone, #add, #new, #load, #services, #order, #create, #thx, #login, #registration').removeClass('is-active');
		$(' '+attr).addClass('is-active');
		$('.js-popup-wrap').addClass('is-active')
		return false;
	});
	$('.js-popup-close').on('click', function() {
		$('.js-popup-wrap').removeClass('is-active');
		$('.js-popup').removeClass('is-active');
		return false;
	});
	$('.overlay').on('click', function() {
		$('.js-popup-wrap').removeClass('is-active');
		$('.js-popup').removeClass('is-active');
		return false;
	});
	$('body').on('click', function(event) {
		$('.js-popup-wrap').removeClass('is-active');
		$('.js-popup').removeClass('is-active');
		$('.js-discount').removeClass('is-active');
	});
	$("body").on("click", ".js-popup", function(event){
        event.stopPropagation();
    });
	$("body").on("click", ".js-discount", function(event){
        event.stopPropagation();
    });
	$('.js-open-thx').on('click', function() {
		$('.js-popup').removeClass('is-active');
		$('.js-popup-thx').addClass('is-active');
		return false;
	});

	$('.js-open-discount').on('click', function() {
		$('.js-popup').removeClass('is-active');
		$('.js-popup-wrap').addClass('is-active');
		$('.js-discount').addClass('is-active');
		return false;
	});

	$('.js-check-open').on('click', function() {
		$('.js-check-block').toggleClass('is-active');
		return false;
	});
	$('.js-change-btn').on('click', function() {
		$(this).parents('.js-change').toggleClass('is-active');
		return false;
	});
	$('.js-btn-change').on('click', function() {
		$(this).toggleClass('is-active');
		return false;
	});
	$('.js-reg-check').click(function(){
	    if ($('.js-reg-check').attr('checked')) {
	        $('.js-popup-bg').addClass('is-active');
	    }
	    else {    	
	        $('.js-popup-bg').removeClass('is-active');
	    };
	});
	$('.js-reg-check').on('click', function() {
		if ($(this).prop('checked')) {
		    $('.js-popup-bg').slideDown('600');
		}
		else {    	
		    $('.js-popup-bg').slideUp('600');
		};
	});

	//call
	$('.js-call-btn').on('click', function() {
		$(this).parents('.js-call').toggleClass('is-active');
		return false;
	});

	$('.js-order-btn').on('click', function() {
		$(this).parents('.js-order').addClass('is-order-step');
		return false;
	});
	$('.js-order-add').on('click', function() {
		$('.is-order-step').addClass('is-order');
		return false;
	});
	$('.js-search-input').focusin(function() {
		$(this).parents('.js-search-par').find('.js-search-box').slideDown('600');
	});
	$('.js-search-input').focusout(function() {
		$(this).parents('.js-search-par').find('.js-search-box').slideUp('600');
	});
	//category (search)
	$('.js-cat').each(function() {
		 $('.js-cat-text').on('click', function() {
		 	$('.js-cat').toggleClass('is-active');
		 	$('.js-cat-list').toggleClass('is-active');
		 	$('.js-cat-link').removeClass('is-active');
		 	$('.js-cat-items').removeClass('is-active');
		 });
		 if ($(window).width() < 1024) {
			 $('.js-cat-link').on('click', function() {
			 	
			 		if ($(this).hasClass('is-active')) {		 		
			 			$(this).removeClass('is-active');
			 			$(this).parents('.js-cat-list li').find('.js-cat-items').removeClass('is-active');	
			 		}
			 		else {
			 			$('.js-cat-link').removeClass('is-active');
			 			$(this).addClass('is-active');
			 			$('.js-cat-items').removeClass('is-active');
			 			$(this).parents('.js-cat-list li').find('.js-cat-items').addClass('is-active');		 		
			 		}
			 		return false;	 	
			 });
		 };	
		 $('.js-cat-items li').on('click', function() {
		 	$('.js-cat-list').removeClass('is-active');
		 	$('.js-cat-items').removeClass('is-active');
		 	$('.js-cat').removeClass('is-active');
		 	$('.js-cat-link').removeClass('is-active');
		 });
		 $("body").on("click", function(event){
		 	$('.js-cat').removeClass('is-active');
		 	$('.js-cat-link').removeClass('is-active');
		 	$('.js-cat-list').removeClass('is-active');
		 	$('.js-cat-items').removeClass('is-active');
		    event.stopPropagation();
		 });
		$("body").on("click", ".js-cat", function(event){
		    event.stopPropagation();
		});
		 $('.js-cat-item').on('click', function() {
		 	$('.js-cat-list').removeClass('is-active');
		 	$('.js-cat-items').removeClass('is-active');
		 	$('.js-cat').removeClass('is-active');
		 	$('.js-cat-link').removeClass('is-active');
		 	return false;
		 });
	});

	$('.js-search-cat-input').each(function() {
		$(this).on('click', function() {
			if ($(this).hasClass('is-active')) {
				$(this).removeClass('is-active');
				$(this).parents('.js-search-cat').find('.js-search-cat-box').slideUp('fast');
			}
			else {
				$(this).addClass('is-active');
				$(this).parents('.js-search-cat').find('.js-search-cat-box').slideDown('fast');
			};
		});
		$("body").on("click", function(event){
			$('.js-search-cat-input').parents('.js-search-cat').find('.js-search-cat-box').slideUp('fast');
			$('.js-search-cat-input').removeClass('is-active');
		    event.stopPropagation();
		});
		$("body").on("click", ".js-search-cat", function(event){
		    event.stopPropagation();
		});
	});
});