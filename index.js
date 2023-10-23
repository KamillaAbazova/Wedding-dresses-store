gsap.from(".item", {x: 50, duration: 3, delay: .5, opacity: 0, ease: "bounce"})
gsap.from("#myVideo", {scale: 2, duration: 3, delay: 3, opacity: 0})
gsap.to(".store", {text: "Wedding store", 
    duration: 5, delay: 5.5, ease: "power1.in"})