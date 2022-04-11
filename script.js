const navSlide = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links')
  const navLinks =  document.querySelectorAll('.nav-links li');



  burger.addEventListener('click',()=>{
      //toggle nav
      nav.classList.toggle('nav-active');
      //animate Links
      navLinks.forEach((link,index)=>{
          if(link.style.animation){
              link.style.animation = "";
          }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index /7+0.3}s`
          }
      });

    //   Burger animation
    burger.classList.toggle("cross");
  });  
  
}
navSlide();

console.log(window.innerWidth);
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "80%",
        scrub: 1,
    },
});

// Logo 
if(window.innerWidth < 700){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "0%",
            end: "70%",
            scrub: 1,
        },
    });
}else{

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "0%",
            end: "60%",
            scrub: 1,
        },
    });
}


//square
if(window.innerWidth < 600){

    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "0%",
            end: "20%",
            scrub: 1,
        },
    });
}else{
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "0%",
            end: "80%",
            scrub: 1,
        },
    });
}
let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-page",
        start: "0%",
        end: "50%",
        scrub: 1,
    },
});
//about us
if(window.innerWidth<600){
    var tl11 = gsap.timeline({
        scrollTrigger: {
            trigger: ".first-page",
            start: "-60%",
            end: "-40%",
            scrub: 1,
        },
    });
}else{

    var tl11 = gsap.timeline({
        scrollTrigger: {
            trigger: ".first-page",
            start: "-20%",
            end: "50%",
            scrub: 1,
        },
    });
}
//secondimage in aboutUs
if(window.innerWidth < 600){
    var tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".second-page",
            start: "-60%",
            end: "20%",
            scrub: 1,
        },
    });
}else{

    var tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".second-page",
            start: "-50%",
            end: "20%",
            scrub: 1,
        },
    });
}
let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-page",
        start: "-80%",
        end: "120%",
        scrub: 1,
    },
});
//form
if(window.innerWidth < 600){

    var tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact-page",
            start: "-70%",
            end: "-10%",
            scrub: 1,
        },
    });
}else{
    var tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact-page",
            start: "-20%",
            end: "20%",
            scrub: 1,
        },
    });
}
if(window.innerWidth < 600){

    var tl13 = gsap.timeline({
        scrollTrigger: {
            trigger: ".third-page",
            start: "60%",
            end: "80%",
            scrub: 1,
        },
    });
}else{
    var tl13 = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact-page",
            start: "-50%",
            end: "5%",
            scrub: 1,
        },
    });
}

//card
if(window.innerWidth < 600){
    var tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: ".third-page",
            start: "-30%",
            end: "-10%",
            scrub: 1,
        },
    });
}else{

    var tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: ".third-page",
            start: "-30%",
            end: "30%",
            scrub: 1,
        },
    });
}
let tl10 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-page",
        start: "-50%",
        end: "10%",
        scrub: 1,
    },
});
if(window.innerWidth  < 600){
    
    var tl12 = gsap.timeline({
        scrollTrigger: {
            trigger: ".second-page",
            start: "-60%",
            end: "-20%",
            scrub: 1,
        },
    });
}else{
     
    var tl12 = gsap.timeline({
        scrollTrigger: {
            trigger: ".second-page",
            start: "-20%",
            end: "50%",
            scrub: 1,
        },
    });
}
let tl15 = gsap.timeline({
    scrollTrigger: {
        trigger: ".blog",
        start: "-20%",
        end: "1%",
        scrub: 1,
    },
});
let tl20 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "50%",
        scrub: 1,
    },
});


tl.fromTo('.sliding-text', { y: 0 }, { y: -400 });
tl2.fromTo('.logo', {scale: 6},{scale:1, top: "2rem", left: "3rem", x:"50%", y: "50%"});
//square
if(window.innerWidth < 600 || 700){
    tl4.fromTo('.square', {left: '10%'}, {left: '55%' , top: "20%", opacity: 0}, );
}else{

    tl4.fromTo('.square', {left: '55%'}, {left: '100%' , top: "10%", opacity: 0}, );
}
tl5.fromTo('.firstImg', {left: '30%'}, {left: '100%' , opacity: 0}, );
tl6.fromTo('.secondImg', {opacity: 0}, { opacity: 1}, );
tl7.fromTo('.square2', {left: '10%',top: "80%"}, {left: '100%' , top: "0%", opacity: 0}, );
tl8.fromTo('.form-section', {opacity: 0}, { opacity: 1}, );
//details section in form
if(window.innerWidth < 600 ){

    tl13.fromTo('.details-section', {opacity: 0, top: "50%"}, { opacity: 1, top: '10%'}, );
}else{
    tl13.fromTo('.details-section', {opacity: 0}, { opacity: 1}, );
}
tl9.fromTo('.card', { opacity: 0}, {  opacity: 1}, );
tl10.fromTo('.project', { opacity: 0}, {  opacity: 1}, );
tl11.fromTo('.intro1', { opacity: 0}, {  opacity: 1}, );
tl12.fromTo('.intro2', { opacity: 0}, {  opacity: 1}, );
tl15.fromTo('.blog-box', { opacity: 0}, {  opacity: 1}, );
if(window.innerWidth < 600){

    tl20.fromTo('.nav-links', { opacity: 0.9}, {  opacity: 0}, );
}


 tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "300%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
    },
});


