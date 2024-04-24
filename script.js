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
            end: "bottom -50%",
            scrub: 4,
            pin: true,
            // markers: true,
        },
        ease: Power4,
    })
}

function teamAnimations(){
    var components = document.querySelectorAll('.component');
    components.forEach((component) => {
        var photo = component.querySelector('.photo');
        var a = component.getBoundingClientRect();
        component.addEventListener('mousemove',(dets)=>{
            photo.style.opacity = '1';
            let compstart = a.left;
            let compend = a.right;
            let b = gsap.utils.mapRange(compstart,compend,-200,200);
            photo.style.translate = `${b(dets.clientX)}%`;
            // photo.style.transform = `translate(${b(dets.clientX)}%,-50%)`;
        });

        component.addEventListener('mouseleave',()=>{
            photo.style.opacity = '0';
        });
    });
}

function textAnimations(){
    var clutter = "";
    document.querySelector('.desc-1').textContent.split("  ").forEach((e)=>{
        if(e == " ") clutter += "<span>&nbsp;</span>";
        clutter += `<span>${e}</span>`;
    });
    var a = 0;
    document.querySelector(".desc-1").innerHTML = clutter;
    document.querySelectorAll(".desc-1 span").forEach((e)=>{
       e.style.opacity = '.2';
    //    gsap.to(`${e}`,{
    //     opacity: 1,
    //     scrollTrigger:{
    //         trigger: '.desc-1',
    //         scroller: 'body',
    //         markers: true,
    //     }
    //    })
    });
    
}

homePageAnimation();
slidesAnimation();
teamAnimations();
textAnimations();