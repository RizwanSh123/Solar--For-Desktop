gsap.from("#main",{
    opacity:0,
})
gsap.from("#nav",{
    opacity:0,
    y:-10,
    delay:0.5,
    duration:1,
})
gsap.from("#nav h1",{
    opacity:0,
    y:-10,
    delay:1,

})
gsap.from("#nav #part2",{
    opacity:0,
    y:-10,
    delay:1,
  

})
gsap.from(".right #Introduction",{
    opacity:0,
    y:-10,
    scrollTrigger:{
        trigger:".right #Introduction",
        scroll:'#main',
        
        start:"top 70%",
        end:"top 40%",
        scrub:1,
       
    }
})
gsap.from(".right p",{
    opacity:0,
    x:-10,
    scrollTrigger:{
        trigger:".right p",
        scroll:'#main',
      
        start:"top 70%",
        end:"top 40%",
        scrub:1,
        stagger:1,
       
    }
})
gsap.from(".right #Size_and_Distance",{
    opacity:0,
    y:-10,
    scrollTrigger:{
        trigger:".right #Size_and_Distance",
        scroll:'#main',
        
        start:"top 70%",
        end:"top 40%",
        scrub:1,
       
    }
})
