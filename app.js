let cur = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", (event) => {
    console.log(event.x);
    cur.style.left=event.x+"px"
    cur.style.top = event.y + "px"
  blur.style.left = event.x - 200 + "px";
  blur.style.top = event.y - 200 + "px";
});

document.querySelectorAll("#nav h4").forEach(elem => {
    elem.addEventListener("mouseenter",()=>{
      cur.style.scale=2
      cur.style.border="0.1px solid white"
      cur.style.backgroundColor = "transparent"
    
  })
  elem.addEventListener("mouseleave",()=>{
    cur.style.scale=1
    cur.style.border="none"
    cur.style.backgroundColor = "white"
  
})
});


gsap.to("#nav", {
  backgroundColor: "black",
  height: "130px",
  delay: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -30%",
    end: "top -60%",
    scrub: 1.5,
  },
});

gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true
    start: "top -30%",
    end: "top -60%",
    scrub: 1.5,
  },
});
