//console.log("test");

let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
	menuBtn.classList.toggle('fa-times');
	navbar.classList.toggle('active');

}



window.onscroll = () =>{
	menuBtn.classList.remove('fa-times');
	navbar.classList.remove('active');

}


//Single Full Image slider

var swiper = new Swiper(".home-slider",{
	grabCursor:true,
	loop:true,
	centeredSlides:true,
	navigation: {
		nextEl:".swiper-button-next",
		prevEl:".swiper-button-prev"
	},
})

/*
var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});*/

//Grid Gallery Image slider

var swiper = new Swiper(".reviews-slider", {
	pagination:{
		el:".swiper-pagination",
		clickable:true,
	},
	grabCursor:true,
	loop:true,
	spaceBetween:20,
	breakpoints:{
		0:{

			slidesPerView:1,

		},
		768:{

			slidesPerView:2,

		},
		768:{

			slidesPerView:3,

		},
	}

})
