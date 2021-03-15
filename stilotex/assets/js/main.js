(function($){	

	'use strict';

	/**********************
	*Adding sections to navbar
	***********************/ 
	function uploadSectionsTomenu(){
		// load the json through ajax
		var json = (function() {
			var json = null;
			$.ajax({
			  'async': false,
			  'global': false,
			  'url': "file://assets/json/sections.json",
			  'dataType': "json",
			  'success': function(data) {
				json = data;
				console.log(json);
				var mydata = JSON.parse(data);
				var html = "";
				// create the html depending on the number of sections that the json has
				for (var i = 0; i <= mydata.length; i++) {
					html += "<li class='stilotex-mainmenu-itm'><a href='"+mydata[i].link+"' class='stilotex-mainmenu-link'>"+mydata[i].name+"</a></li>"
					//And with jQuery add the html in the class for view the sections in the menu
					$(".mainmenu.stilotex-main-menu").html(html);
				 }
			  }
			});
			return json;			
		})();
	}

	/**********************
	*Cart Dropdown
	***********************/ 
	
	function cartDrpdownExpand(){
		$('#cartDropdown').on('click', function(e){
			e.preventDefault();
			$(this).siblings('.cart-dropdown').slideToggle('slow');
		});
		$('#cart-close').on('click', function(e){
			e.preventDefault();
			$('.cart-dropdown').slideUp('slow');
		})
	}

	/**********************
	*Slider Activation
	***********************/


	var homeSlider = $('#homepage-slider');

	homeSlider.owlCarousel({
		items: 1,
		smartSpeed: 1000,
	    loop:true,
	    nav: true,
	    dots: true,
	    autoplay: false,
	    autoplayTimeout: 3000,
	    navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
	});

	homeSlider.on('translate.owl.carousel', function(){
		var animation = $('[data-animation]');
		animation.each(function(){
			var anim_name = $(this).data('animation');
			$(this).removeClass('animated ' + anim_name).css('opacity', '0');
		});
	});

	$('[data-delay]').each(function(){
		var anim_del = $(this).data('delay');
		$(this).css('animation-delay', anim_del);
	});


	$('[data-duration]').each(function(){
		var anim_dur = $(this).data('duration');
		$(this).css('animation-duration', anim_dur);
	});

	homeSlider.on('translated.owl.carousel', function(){
		var layer = homeSlider.find('.owl-item.active').find('[data-animation]');
		layer.each(function(){
			var anim_name = $(this).data('animation');
			$(this).addClass('animated ' + anim_name).css('opacity', '1');
		});
	});

	/**********************
	*Category Carousel 2 Activation
	***********************/

	$('.stilotex-product-category').owlCarousel({
		items: 5,
		smartSpeed: 1000,
	    loop:true,
	    nav: false,
	    dots: false,
	    autoplay: false,
	    autoplayTimeout: 5000, 
	    navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],       
	    responsive:{
	        0:{
	            items:1,
	        },
	        480:{
	            items:2,
	        },
	        768:{
	            items:3,
	        },
	        992:{
	            items:4,
	        },
	        1200:{
	            items:5,
	        }
    	}
	});

	/**********************
	*Product Thumb Carousel Activation
	***********************/

	$('#thumbmenu').owlCarousel({
		items: 3,
	    loop:false,
	    nav: true,
	    dots: false,
	    margin: 20,
	    autoplay: false,
	    autoplayTimeout: 5000,
	    navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],    
	    responsive:{
	        0:{
	            items:1,
	        },
	        300:{
	            items:2,
	        },
	        400:{
	            items:4,
	        },
	        768:{
	            items:2,
	        },
	        992:{
	            items:3,
	        }
    	}
	});


	/**********************
	*Product Carousel Activation
	***********************/

	$('.js-featured-product').owlCarousel({
		items: 5,
	    loop:true,
	    nav: true,
	    dots: false,
	    autoplay: false,
	    autoplayTimeout: 5000,
	    navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],    
	    responsive:{
	        0:{
	            items:1,
	        },
	        480:{
	            items:2,
	        },
	        768:{
	            items:3,
	        },
	        992:{
	            items:4,
	        },
	        1200:{
	            items:4,
	        }
    	}
	});


	/**********************
	*Trending Product Carousel Activation
	***********************/

	$('.js-tanding-product-1').owlCarousel({
		items: 3,
	    loop:false,
	    nav: true,
	    dots: false,
	    autoplay: false,
	    autoplayTimeout: 5000,
	    navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],    
	    responsive:{
	        0:{
	            items:1,
	        },
	        480:{
	            items:2,
	        },
	        600:{
	            items:2,
	        },
	        992:{
	            items:4,
	        }
    	}
	});

	/**********************
	*Blog Carousel Activation
	***********************/

	$('.blog-carousel').owlCarousel({
		items: 3,
		margin: 30,
	    loop:false,
	    nav: true,
	    dots: false,
	    autoplay: false,
	    autoplayTimeout: 5000,
	    navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],    
	    responsive:{
	        0:{
	            items:1,
	        },
	        576:{
	            items:1,
	        },
	        992:{
	            items:3,
	        }
    	}
	});


	/**********************
	* Thumb Tab
	***********************/

	$('.modal').on('shown.bs.modal', function (e) {
	    $('.thumb-menu-item').resize();
	})
	    
	$('.thumb-menu-item a').on('click',function(e){
	      e.preventDefault();
	     
	      var $href = $(this).attr('href');
	     
	      $('.thumb-menu-item a').removeClass('active');
	      $(this).addClass('active');
	     
	      $('.product-thumb-large .tab-pane').removeClass('active show');
	      $('.product-thumb-large '+ $href ).addClass('active show');
	     
	});

	/**********************
	* Product Quantity
	***********************/

	function customQantity(){
	    $(".quantity").append('<div class="dec qtybutton"><i class="fa fa-angle-down"></i></div><div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>');

	    $(".qtybutton").on("click", function () {
	        var $button = $(this);
	        var oldValue = $button.parent().find("input").val();
	        if ($button.hasClass("inc")) {
	            var newVal = parseFloat(oldValue) + 1;
	        } else {
	            // Don't allow decrementing below zero
	            if (oldValue > 1) {
	                var newVal = parseFloat(oldValue) - 1;
	            } else {
	                newVal = 1;
	            }
	        }
	        $button.parent().find("input").val(newVal);
	    });		
	}


	/**********************
	* Scroll To Top
	***********************/

    function scrollToTop(){
		var scrollTop = $(".scroll-to-top");
		$(window).on('scroll', function() {
			var topPos = $(this).scrollTop();

			if (topPos > 100) {
				$(scrollTop).css("opacity", "1");

			} else {
				$(scrollTop).css("opacity", "0");
			}

		}); 

		$(scrollTop).on('click', function() {
			$('html, body').animate({
				scrollTop: 0
			}, 800);
			return false;

		}); 

    }

	/**********************
	* Countdown Activation
	***********************/
	
	$('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			$this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Minutes</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Seconds</span></div>'));
		});
	});


	/**********************
	* Sticky Header
	***********************/

	function stickyHeader(){
		$(window).on('scroll', function(){
		    if ($(window).scrollTop() >= 200) {
		        $('.fixed-header').addClass('sticky-header');
		    }
		    else {
		        $('.fixed-header').removeClass('sticky-header');
		    }
		});		
	}

	/**********************
	*Initialization 
	***********************/

	$(window).on('load resize', function () {
		$(window).width() < 992
			stickyHeader();
	});


	uploadSectionsTomenu();
	cartDrpdownExpand();	
	customQantity();
	scrollToTop();	

})(jQuery);

