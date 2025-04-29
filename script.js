function page1Animation() {
                                                                    //page1 animation
//timeline 
var tl = gsap.timeline();
var navbtn = document.querySelector("nav button");
var cenleftbtn = document.querySelector("#left button")

tl.from("nav h1 , nav h4 , nav button", {
    y: -50,
    opacity: 0,
    delay: 0.4,
    duration: 0.5,
    stagger: 0.2
});
 
tl.from("#left h1",{
    opacity:0,
    x:-150,
    duration:0.7,
    })  
tl.from("#left h5",{
    opacity:0,
    x:-100,
    duration:0.5,
    

})  
tl.from("#left button",{
    opacity:0,
    x:-50,
    duration:0.5,
})  

tl.from("#right img",{
    opacity:0,
duration:0.5,
x:200,

},"-=0.5")

tl.from("#section1botom img",{
    opacity:0,
    y:30,
    duration:0.6,
    stagger:0.2

})
//button hover
navbtn.addEventListener("mouseenter", function(){
     gsap.to(navbtn,{
        backgroundColor: "black",
        color: "white",
        scale: 1,
        duration: 0.5
    })
})
navbtn.addEventListener("mouseleave", function(){
        gsap.to(navbtn,{
        backgroundColor: "white",
        color: "black",
        scale: 1,
        duration: 0.5
    })
})

cenleftbtn.addEventListener("mouseenter",function(){
    console.log("enter")
    gsap.to(cenleftbtn,{
        color: "white",
        scale: 1,
        duration: 0.5
    })
})
cenleftbtn.addEventListener("mouseleave",function(){
    console.log("leave")
    gsap.to(cenleftbtn,{
        backgroundColor: "black",
        color: "",
        scale: 1,
        duration: 0.5
    })
})

}
page1Animation();
                                                  //page2 animation

var tl2 = gsap.timeline({
    scrollTrigger :{
        trigger: ".section2",
        scroller:"body",
       // markers:true,                              //hide markes
        start:"top 50%",
        end:"top 0",
        scrub:true
        }
    
})
tl2.from(".services h3", {
    opacity:0,
    x:-150,
    duration:0.5
})
tl2.from(".services p ", {
    opacity:0,
    y:20,
    duration:0.5
})

tl2.from("#elem1",{
    opacity:0,
    x:-300,
    duration:1

},"anime")
tl2.from("#elem2",{
    opacity:0,
    x:300,
    duration:1

},"anime")
tl2.from("#elem3",{
    opacity:0,
    x:-300,
    duration:1

},"anime1")
tl2.from("#elem4",{
    opacity:0,
    x:300,
    duration:1

},"anime1")
 
    


   
