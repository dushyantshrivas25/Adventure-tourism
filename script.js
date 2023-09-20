gsap.from(".nav img",{
    y:-100,
    opacity:0,
    duration:1,
    scale:2,
    delay:0.5,
}  
)

const page1 = document.querySelector(".page-1");
const image = document.querySelector(".page-1 img")
const left_btn = document.querySelector(".left-btn");
const right_btn = document.queryselector(".right-btn");

left_btn.addEventListener("click",function(){
    image.src = "slide-img.avif"
})

gsap.from(".p2div-1 h1",{
    y:-40,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".p2div-1 h1",
        scoller:"body",
        scrub:"true",
        start:"top 80%",
        end:"bottom 60%"
    }
})