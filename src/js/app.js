function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "header__links") {
        x.className += " hide" 
    } else {
        x.className = "header__links";
    }
}

function searchToggle() {
    var y = document.getElementById("input");
    if (y.className === "header__input") {
        y.className += " show" 
    } else {
        y.className = "header__input";
    }
}

$('#corousel').owlCarousel({
    items: 4,
    center:true,
	nav:false,
	dots: false,
    loop:true,
	responsiveClass:true,
    responsive:{
		0:{
            items:1,
            center:false
        },
        600:{
            items:3,
            center:true
        },
        992:{
            items:4,
            center:true
        }
    }
});

