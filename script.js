function smoothScroll(){
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        autoResize: true,
        prevent: (node) => node.classList.contains('no-lenis')
    });
    
    // Hide scrollbar using Lenis
    document.documentElement.classList.add('lenis');
    
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);
}

smoothScroll();
const sections = [...document.querySelectorAll(".parallax-section")]
sections.forEach(section=>{
    const img = section.querySelector("img")
    gsap.fromTo(img,{
        yPercent:-10
    },{
yPercent:10,
  ease: "none",  
scrollTrigger:{
    trigger:section,
    // markers:true,
    scrub:true,
    
}
    })
})