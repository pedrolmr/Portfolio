$(document).ready(function(){
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination:false
	});

	var typed = new Typed('.typed', {
		strings: ['Web Developer', 'Self-taught programmer' ],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	var owl = $('.owl-carousel');
		owl.owlCarousel({
		    loop:true,
		    nav:true,
		    margin:10,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },            
		        960:{
		            items:5
		        },
		        1200:{
		            items:6
		        }
		    }
		});
		owl.on('mousewheel', '.owl-stage', function (e) {
		    if (e.deltaY>0) {
		        owl.trigger('next.owl');
		    } else {
		        owl.trigger('prev.owl');
		    }
		    e.preventDefault();
		});
});