function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "header__links") {
        x.className += " show" 
    } else {
        x.className = "header__links";
    }
}

function searchToggle() {
    var y = document.getElementById("input");
    if (y.className === "header__input") {
        y.className += " active" 
    } else {
        y.className = "header__input";
    }
}

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
			items:3
        },
        1050:{
			items:4,
			center: true
        }
    }
});