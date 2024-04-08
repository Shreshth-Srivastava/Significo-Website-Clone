function homePageAnimation(){
    gsap.set('.slides',{scale: 5})

    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: '.home',
            scroller: 'body',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            pin: true,
        },
        ease: Power2
    })
    
    tl.to('.home>video',{
        "--clip": '0%',
    }, 'a')
    
    tl.to('.slides',{
        scale: 1,
    }, 'a')
    
    tl.from('.row-L',{
        x: 300
    }, 'a')
    
    tl.from('.row-R',{
        x: -300
    }, 'a')
}

homePageAnimation()