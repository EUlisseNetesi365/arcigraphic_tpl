document.addEventListener("DOMContentLoaded", function () {
	if (screen.width <= 992) {
		const links = document.querySelectorAll(".dropdown-toggle");
		links.forEach(function (link) {
			if (link.localName === "a") {
				link.setAttribute("role", "button");
				link.setAttribute("data-bs-toggle", "dropdown");
				link.setAttribute("aria-haspopop", "true");
				link.setAttribute("aria-expanded", "false");
			}
		});
	}

	/*if (screen.width >= 992) {
        const navbar = document.getElementById("navbar-container");
        navbar.classList.add('sticky-top');
        navbar.classList.remove('position-fixed', 'top-15');
    }*/
});

// fix the link of the navbar
window.addEventListener("resize", function () {
	const links = document.querySelectorAll(".dropdown-toggle");
	if (this.innerWidth <= 992) {
		links.forEach(function (link) {
			if (link.localName === "a") {
				link.setAttribute("role", "button");
				link.setAttribute("data-bs-toggle", "dropdown");
				link.setAttribute("aria-haspopop", "true");
				link.setAttribute("aria-expanded", "false");
			}
		});
	} else {
		links.forEach(function (link) {
			if (link.localName === "a") {
				link.setAttribute("role", "link");
				link.removeAttribute("data-bs-toggle");
				link.removeAttribute("aria-haspopop");
				link.removeAttribute("aria-expanded");
			}
		});
	}
});

// When the user scrolls the page, execute myFunction
/*window.onscroll = function () {
    stickyBar();
};*/

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
/*function stickyBar() {
    // Get the navbar
    var navbar = document.getElementById("navbar-container");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky-sm-top");
    } else {
        navbar.classList.remove("sticky-sm-top");
    }
}*/

/*
// grab the element that contains the navigation we want to create a sticky effect for
const nav = document.querySelector("#main");
const navbar = document.querySelector("#navbar-container");
// create a variable that stores the height of the space between the top of the parent node (in this case our body element) of our nav and the top of our nav
let topOfNav = nav.offsetTop;

// create our function that should run everytime the user scrolls
function fixNav() {
    // if the user scrolls further down than the height of our variable add the class fixed-nav and add a padding
    if( window.scrollY >= topOfNav ) {
        // the padding is added because the element is removed from the document flow due to position: fixed
        //document.body.style.paddingTop = nav.offsetHeight + 'px';
        // position: add css class fixed-nav
        navbar.classList.add('sticky-top');
    } else {
        // remove the class and padding when the user scrolls above our nav again
        //document.body.style.paddingTop = 0;
        navbar.classList.remove('sticky-top');
    }
}

window.addEventListener('scroll', fixNav);*/

var lastScrollTop; // This Varibale will store the top position

navbar = document.querySelector(".navbar"); // Get The NavBar
searchOverly = document.querySelector("#searchBox");
endNavbar = document.querySelector("#end-navbar");

window.addEventListener("scroll", function () {
	//on every scroll this funtion will be called

	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	//This line will get the location on scroll
	if (scrollTop < 40) {
		navbar.style.position = "absolute";
		navbar.style.transform = "translateY(0rem)";
		navbar.style.background = "transparent";
		// searchOverly.style.position = "fixed";
		// searchOverly.style.transform = "none";

	}
	if (scrollTop > 70) {
		navbar.style.transform = "translateY(-7rem)";
		// searchOverly.style.transform = "none";
	}
	if (scrollTop > 255) {
		//if it will be greater than the previous

		navbar.style.cssText =
			"background-color: rgba(0, 0, 0, 0.7)!important;position:fixed;transform:translateY(0rem)";
		//set the value to the negetive of height of navbar
	} else {
	}

	lastScrollTop = scrollTop; //New Position Stored
});

//var swiper = new Swiper(".mySwiperPrimo", {
//	slidesPerView: 1,
//	spaceBetween: 20,
//	grabCursor: true,
//	pagination: {
//		el: ".swiper-pagination",
//		clickable: true,
//	},
//	breakpoints: {
//		640: {
//			slidesPerView: 2,
//			spaceBetween: 20,
//		},
//		768: {
//			slidesPerView: 4,
//			spaceBetween: 40,
//		},
//		1024: {
//			slidesPerView: 4,
//			spaceBetween: 50,
//		},
//	},
//	navigation: {
//		nextEl: ".swiper-button-next",
//		prevEl: ".swiper-button-prev",
//	},
//});
//var swiper = new Swiper(".mySwiperBottom", {
//	slidesPerView: 4,
//	spaceBetween: 1,
//	grabCursor: true,
//	pagination: {
//		el: ".swiper-pagination",
//		clickable: true,
//	},
//	navigation: {
//		nextEl: ".swiper-button-next",
//		prevEl: ".swiper-button-prev",
//	},
//});
