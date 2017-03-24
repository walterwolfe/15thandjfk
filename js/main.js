//  see if it exists if not create an empty obj
var OPW = {} || {};

OPW.utilities = {
	listen: function(){// attach click event to .js-menu
		$('.js-menu').on('click',function(){
			//do things;
			$('.nav-main').slideToggle();
		});

		$(window).on('resize',function(){
			var w = $(window).width();
			console.log('i am resizing' + w);
			
			// write an if statement if 
			// width > 420, do something 
			if (w > 480 && $('.nav-main').is('[style]')){
				console.log('removed style');
				$('.mav-main').removeAttr('style');
			};
		}); // closes window,resize event

		// attach click event to main-nav item
		$('.nav-main a').on('click', function(event){
			console.log(event);
			event.preventDefault();
			// remove 'is-current' class from all links in our nav-main
			$('.nav-main a').removeClass('is-current');
			// add a class of 'is-current' to $(this)
			$(this).addClass('is-current');
			// 'this'referes to the DOM element being operated on
			// store $(this).attr('href') in a var
			var pageToScrollTo = $(this).attr('href'); 
			// use that var in our $.scrollTo() function
			$(window).scrollTo(pageToScrollTo, 2000);
				console.log(pageToScrollTo);
		});

		$('#top-link').on('click', function(event){
			// alert('alert');
			event.preventDefault();
			$(window).scrollTo('#top', 2000);
		});


	}
}
console.log(OPW);

$(document).ready(function(){
  	OPW.utilities.listen();
 }); //closes doc.ready
	