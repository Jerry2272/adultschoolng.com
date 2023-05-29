// iconChange =icon => icon.classList.toggle("fa-times");  


    // const header =document.querySelector("header");
    // let lastscroll= window.scrollY;
    // window.addEventListener ("scroll", () =>   {
    //     if (lastscroll <  window.scrollY) {
    //         header.classList.add("jerry");
    //     }else{
    //         header.classList.remove("jerry");
    //     }
    //     lastscroll=




    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:2,
                nav:true,
                loop:false
            }
        }
    });



    
    // const header=document.querySelector(".navbar");
    // let lastscroll= window.scrollY;

    // window.addEventListener ("scroll", () => {
    //     if (lastscroll < window.scrollY) {
    //         header.classList.add("jerry");
    //     }else{
    //         header.classList.remove("jerry");
    //     }
    //     lastscroll = window.scrollY
    // })




iconChange = Xicon => Xicon.classList.toggle("fa-times");
 

const header =document.querySelector("header");

let lastScroll = window.scrollY;
window.addEventListener ("scroll", () =>{
    if(lastScroll < window.scrollY){
        header.classList.add("main-head");
    }else {
        header.classList.remove("main-head");
    }
    lastScroll = window.scrollY
})



































