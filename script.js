function homePageAnimation(){
    gsap.set('.marquee',{scale: 5})

    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: '.home',
            scroller: 'body',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            pin: true,
            // markers: true,
        },
        ease: Power2
    })
    
    tl.to('.vdo',{
        "--clip": '0%',
    }, 'a')
    
    tl.to('.marquee',{
        scale: 1,
    }, 'a')
    
    tl.from('.row-L',{
        x: 300
    }, 'a')
    
    tl.from('.row-R',{
        x: -300
    }, 'a')
}

function slidesAnimation(){
    var tll = gsap.timeline()
    tll.from("#real",{
        y: 300,
        scrollTrigger:{
            trigger: ".page-2",
            scroller: "body",
            start: "top 30%",
            end: "bottom bottom",
            // markers: true,
        },
    })
    tll.to(".slides",{
        xPercent: -200,
        scrollTrigger:{
            trigger:".page-2",
            scroller: "body",
            start: "top top",
            end: "bottom top",
            scrub: 4,
            pin: true,
            // markers: true,
        },
        ease: Power4,
    })
}

homePageAnimation();
slidesAnimation();