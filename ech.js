// Loader 

let load = gsap.timeline();

function time(){
	let a = 0
	setInterval(function(){
		a = a + Math.floor(Math.random()*20)
		if(a<100){
			document.querySelector("#loader h1").
			innerHTML = a+"%"
		}else{
			a = 100
			document.querySelector("#loader h1").
			innerHTML = a+"%"
		}

	},100)
}


load.to("#loader h1",{
	// delay:0.5,
     onStart:time(),
})
load.to("#loader",{
	top:"-100vh",
	delay:1,
	duration:0.5,

})










// Mouse magnet

Shery.mouseFollower({
	//Parameters are optional.
	skew: true,
  });



//   page1  mouse magnet 
  Shery.makeMagnet("header a");
    Shery.makeMagnet("nav a");

  Shery.makeMagnet(".page1-scroll-btn");


  //   Contact/Page 1  mouse magnet
  Shery.makeMagnet("#contact button");
  Shery.makeMagnet("#contact i");
  
  //   Footer  mouse magnet
  Shery.makeMagnet("footer .footer-scroll-btn");
  Shery.makeMagnet("footer .footer-sec-2-links a");
  Shery.makeMagnet("footer img");
  
  //   page1  mouse magnet 
  Shery.makeMagnet(".faq-question ");

// Mouse magent end 


// page1




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');
		
      

	});
};


// servic management  


const details = gsap.utils.toArray(".hero-section-text:not(:first-child)")
const photos = gsap.utils.toArray(".hero-manage-section-photos:not(:first-child)")


gsap.set(photos, {yPercent:100})

const allPhotos = gsap.utils.toArray(".hero-section-photos")



let mm = gsap.matchMedia();


mm.add("(min-width: 500px)", () => {


  console.log("desktop")
	
  ScrollTrigger.create({
	trigger:".hero-manage-property-section-gallery",
	start:"top top",
	end:"bottom bottom",
	pin:".right"
})


details.forEach((detail, index)=> {

	let headline = detail.querySelector("p")
	let animation = gsap.timeline()
	   .to(photos[index], {yPercent:0})
	   .set(allPhotos[index], {autoAlpha:0})
	ScrollTrigger.create({
		trigger:headline,
		start:"top 85%",
		end:"top 55%",
		animation:animation,
		scrub:2,


		
	})
})
	
	
  
  return () => { 

	  console.log("mobile")
  };
});




// Shery.imageEffect(".right", {
// 	style: 5,
// 	scrollSnapping: true,
// 	scrollSpeed: 6,
// 	touchSpeed: 6,
// 	damping: 7,
//   });











let tl = gsap.timeline()


load.from("header img", {

	x:80,
	duration:0.5,
	opacity:-2

   })
load.from("nav", {

	x:-80,
	duration:0.5,
	opacity:-2,

   })

load.from("#home img", {

	x:80,
	duration:0.5,
	opacity:-2

   })
   



load.from("#home .page1-heading", {

	y:100,
	duration:1,
	opacity:-1

   })
   










// page 2 









   gsap.from(" .page2-heading h1", {

	//    y:-80,
	   duration:0.5,
	   opacity:0,
       scrollTrigger:{
		trigger: ".page2-heading h1",
		scroller: "body",

	   }
   })
   

   gsap.from(".page2-right h1", {

	y:-80,
	// duration:1,
	opacity:0,
	scrollTrigger:{
	 trigger: ".page2-right h1",
	 scroller: "body",

	}
})


   gsap.from(".page2-right p", {

	y:-80,
	// duration:1,
	opacity:0,
	scrollTrigger:{
	 trigger: ".page2-right p",
	 scroller: "body",

	}
})

gsap.from(".page2-left h1", {

	y:-80,
	// duration:1,
	opacity:0,
	scrollTrigger:{
	 trigger: ".page2-left h1",
	 scroller: "body",

	}
})


   gsap.from(".page2-left p", {

	y:-80,
	// duration:1,
	opacity:0,
	scrollTrigger:{
	 trigger: ".page2-left p",
	 scroller: "body",

	}
})

gsap.from(".page2-img ", {

	y:80,
	// duration:1,
	opacity:0,
	scrollTrigger:{
	 trigger: ".page2-left p",
	 scroller: "body",

	}
})

