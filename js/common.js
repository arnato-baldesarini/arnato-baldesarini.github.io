$(document).ready(function() {

	$('.ab').on('click', function(){
		$('.menu-left').slideToggle();
	});
	//Карусель//
	var owl = $("#owl-demo"); 
 	owl.owlCarousel({
 		pagination: false,
     	singleItem : true,
     	autoPlay:true,
    	transitionStyle : "fade"
  	});

  	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});
	//Masonri сетка//
	$('.grid').masonry({
  	// options
  	itemSelector: '.grid-item',
  	columnWidth: 200
	});
	//fancybox
	$(".fancybox").fancybox();
 });