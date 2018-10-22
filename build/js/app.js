
$(document).ready(function(){
	$('#toggle').click(function(){
		$('#nav').toggleClass('show');
	});
});

$('#corousel').owlCarousel({
    center: true,
	items: 4,
	nav:false,
	dots: false,
    loop:true,
	margin: 0,
	stagePadding: 0,
	responsiveClass:true,
    responsive:{
		0:{
			items:2
        },
        600:{
			items:3,
			center: true
        },
        1001:{
			items:4,
			center: true
        }
    }
});