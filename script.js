
function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco();

//curser
var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove", function (dets) {
    // crsr.style.left = dets.x + 1+"px"
    // crsr.style.top = dets.y + 1+"px"
    gsap.to(crsr, {
        x: dets.x,
        y: dets.y,
        duration: 0.8,
        ease: "back.out(2)"

    })
})
//curser


function hover() {

    var video = document.querySelector(".page1 video")
    video.addEventListener("mouseenter", function () {
        crsr.innerHTML = "sound"
        gsap.to(crsr, {
            width: 120,
            hight: 80,
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: 50,
            fontSize: 13

        })
    })
    video.addEventListener("mouseleave", function () {
        crsr.innerHTML = ""
        gsap.to(crsr, {
            width: 20,
            hight: 20,
            color: "#000",
            borderRadius: 100
        })
    })

    var video2 = document.querySelector(".page3 video")
    video2.addEventListener("mouseenter", function () {
        crsr.innerHTML = "sound"
        gsap.to(crsr, {
            width: 80,
            hight: 40,
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: 50,
            fontSize: 13

        })
    })
    video2.addEventListener("mouseleave", function () {
        crsr.innerHTML = ""
        gsap.to(crsr, {
            width: 20,
            hight: 20,
            color: "#000",
            borderRadius: 100
        })
    })
    var video3 = document.querySelector("#page3-video2")
    video3.addEventListener("mouseenter", function () {
        crsr.innerHTML = "sound"
        gsap.to(crsr, {
            width: 80,
            hight: 40,
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "50%",
            fontSize: 13

        })
    })
    video3.addEventListener("mouseleave", function () {
        crsr.innerHTML = ""
        gsap.to(crsr, {
            width: 20,
            hight: 20,
            color: "#000",
            borderRadius: 100
        })
    })
    var img1 = document.querySelector("#page3-part-img")
    img1.addEventListener("mouseenter", function () {
        crsr.innerHTML = "vew"
        gsap.to(crsr, {
            width: 80,
            hight: 40,
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "50%",
            fontSize: 13

        })
    })
    img1.addEventListener("mouseleave", function () {
        crsr.innerHTML = ""
        gsap.to(crsr, {
            width: 20,
            hight: 20,
            color: "#000",
            borderRadius: 100
        })
    })
    var img2 = document.querySelector("#page3-img2")
    img2.addEventListener("mouseenter", function () {
        crsr.innerHTML = "vew"
        gsap.to(crsr, {
            width: 80,
            hight: 80,
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "50%",
            fontSize: 13

        })
    })
    img2.addEventListener("mouseleave", function () {
        crsr.innerHTML = ""
        gsap.to(crsr, {
            width: 20,
            hight: 20,
            color: "#000",
            borderRadius: 100
        })
    })
}
hover()

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 30%",
        end: "top 0%",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100
}, "anim")
tl.to(".page1 h2", {
    x: 100
}, "anim")
tl.to(".page1 video", {
    width: "95%"
})
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -110%",
        end: "top -130%",
        scrub: 2,

    }
})
tl2.to(".main", {
    backgroundColor: "#E5E8FF",

})
tl2.from(".page2 h1", {
    // scale:0.5,
    x: 100,
    // stagger:0.5,
    opacity: 0.5,
    duration: 2
})
tl2.from(".page2-left", {
    // scale:0.5,
    y: 100,
    // stagger:0.5,
    // opacity:0,
    duration: 1

})
tl2.from(".page2-right", {
    // scale:0.5,
    y: 100,
    // stagger:0.5,
    // opacity:0,
    duration: 1,
})
