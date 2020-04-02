(function ($) {
	'use strict'
	// wow js

	new WOW().init();

	$('.menu-icon i.fa-bars').on('click', function () {
		$('.menu').slideDown();
		$(this).hide();
		$('.menu-icon i.fa-times').show();
	});

	$('.menu-icon i.fa-times').on('click', function () {
		$('.menu').slideUp();
		$(this).hide();
		$('.menu-icon i.fa-bars').show();
	});

	// Sub Menu
	/*
	$('.menu ul li').on('click', function(){
		$('.menu ul li ul').slideUp();
		$(this).children('ul').slideDown();
	}); */

	// owl carousel
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

// isotope

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item'
  }
})

// isotope button active

$('.work-button button').on('click', function() {
	$('.work-button button').removeClass('active');
	$(this).addClass('active');
});






}) (jQuery);