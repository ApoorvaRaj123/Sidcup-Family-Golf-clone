let cursor = document.querySelector("#cursor")
let cursorBlur = document.querySelector("#cursor-blur")

window.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    cursorBlur.style.left = dets.x + "px"
    cursorBlur.style.top = dets.y + "px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    duration:1,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top 10%",
        end:"top -80%",
        scrub:2,
    }
})
