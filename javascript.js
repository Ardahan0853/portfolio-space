
let starLoop = `.star`
let Textx = ".text"
    gsap.timeline()
        .from(starLoop, {opacity:0, scale:0,y:-100, ease:"back",stagger:0.2,  delay:1})
        .from(starLoop, {rotation:360, duration:2, repeat:-1})
        .from(Textx, {opacity:0, scale:0, ease:"back", duration:1})


gsap.registerPlugin(ScrollTrigger)




  gsap.from(".text-2",{
    scrollTrigger:{
        trigger:".text-2",
    },
    scale:0,
    duration:1.5,
    ease:"back"
  })
  gsap.to(".text-2",{
    scrollTrigger:{
        trigger:".text-2",
    },
    duration:2,
    text:"Let`s get started then",
    delay:3
  })
  gsap.to(".text-2",{
    scrollTrigger:{
        trigger:".text-2",

    },
    duration:2,
    text:"Scroll Down",
    delay:8
  })
  gsap.from(".about-me",{
    scrollTrigger:{
        trigger:".about-me",
        start:"top top"
    },
    duration:1.5,
    x:-100

  })
  gsap.from(".skills-text",{
    scrollTrigger:{
        trigger:".skills-text"
    },
    delay:1.5,
    duration:1.5,
    x:300,
    opacity:0
    
  })
  gsap.from(".list-item",{
    scrollTrigger:{
      trigger:".list-item"
    },
    delay:2,
    duration:1.5,
    y:300,
    opacity:0,
    stagger:0.2
  })
  gsap.to("#me",{
    scrollTrigger:{
        trigger:"#me",
    },
    duration:1.5,
    delay:4,
    text:"I have done couple of projects for fun and for volunteer job."
  })
  gsap.to("#me",{
    scrollTrigger:{
        trigger:"#me",
        
    },
    duration:3,
    delay:10,
    text:"Want to see my projects? Scroll Down then."
  })
  gsap.from(".flip-card",{
    scrollTrigger:{
        trigger:".flip-card"
    },
    duration:2,
    y:-200,
    stagger:0.5,
    opacity:0
  })






 