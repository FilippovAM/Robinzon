
  $(document).ready(function() {
    setEqualHeight($(".height-column .col-md-4 .small-text-block .small-text"));
    });//Скрипт для выравнивания высоты колонок. В данном случае, что бы кнопка "подробнее" всегда была на одинаковой высоте, в каждой из колонок с классом .small-text-block.
 
 (function() {
 
  // store the slider in a local variable
  var $window = $(window),
      flexslider;
 
  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 500) ? 1 :
	       (window.innerWidth < 700) ? 2 :
	       (window.innerWidth < 900) ? 3 :
           (window.innerWidth < 1100) ? 4 : 5;
  }
 
  $(function() {
    SyntaxHighlighter.all();
  });
 
 
 
  $window.load(function() {
	  	

		
	 $('.brands-slider').flexslider({
            animation: "slide",
            animationLoop: true,
            itemWidth: 170,
            minItems: getGridSize(), // use function to pull in initial value
            maxItems: getGridSize()+1, // use function to pull in initial value
	     	controlNav: false,
			directionNav: true,
			prevText: "",
			nextText: "",
            itemMargin: 0
    });
	
	
	$('.slider-1').flexslider({
            animation: "slide",
            animationLoop: false,
			itemWidth: 170,
            minItems: getGridSize(), // use function to pull in initial value
            maxItems: getGridSize(), // use function to pull in initial value
			slideshow: false,
			move: 1,
			prevText: "",
			nextText: "",
			controlNav: true,
			manualControls: ".slider1-control > li > a"
	});
	
	
	$('.slider-2').flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: 170,
            minItems: getGridSize(), // use function to pull in initial value
            maxItems: getGridSize(), // use function to pull in initial value
			slideshow: false,
			move: 1,
			prevText: "",
			nextText: "",
			startAt: 3,
			controlNav: true,
			manualControls: ".slider2-control > li > a"
	});
	
	
	$('.slider-3').flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: 170,
            minItems: getGridSize(), // use function to pull in initial value
            maxItems: getGridSize(), // use function to pull in initial value
			slideshow: false,
			move: 1,
			prevText: "",
			nextText: "",
			controlNav: true,
			manualControls: ".slider3-control > li > a"
	});
		
		
	$('.phone-jolting').jrumble({
            x: 2,
            y: 0,
            rotation: 10,
    });//Скрипт для тряски объекта, задаем параметры тряски
	
	
    $('.phone-jolting').hover(function(){
            $(this).trigger('startRumble');
            }, function(){
            $(this).trigger('stopRumble');
    });//Скрипт для тряски объекта
	

	
});


	var $range = $("#range-price");
	var min = 0;
	var max = 50000;
	var from = 0;
	var to = 50000;
 
	$range.ionRangeSlider({
		type: "double",
		min: min,
		max: max,
		from: from,
		to: to,
		hide_min_max: true,
		hide_from_to: true,
		grid: false, 

		
    onChange: function (data) {
        var from1 = data.from;
        var to1 = data.to;
        $('#price-from').val(from1);
        $('#price-to').val(to1);
		}
	});
 

	var slider = $("#range-price").data("ionRangeSlider");
		$('#price-from').keyup(function () {
	var from2 = $(this).val(); 
		slider.update({
		from: from2 
	}); 
	});

	$('#price-to').keyup(function () {
		var to2 = $(this).val();
		slider.update({
		to: to2 
	}); 
	});

// check grid size on resize event
  $window.resize(function() {
    var gridSize = getGridSize();

  });
}());


			  
			  