$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.box-menu').addClass("sticky")
        }else{
            $('.box-menu').removeClass("sticky")
        }
    });

    //toggle menu
    $('.menu-child').click(function(){
        $('.box-menu .menu').toggleClass("active");
        $('.menu-child i').toggleClass("active");
    });

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 50,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    //typing animation script
    var type = new Typed(".typing-1", {
        strings: ["Programmer", "Developer", "Designer"],
        typeSpeed: 110,
        backSpeed: 50,
        loop: true
    });

    var type = new Typed(".typing-2", {
        strings: ["Programmer", "Developer", "Designer"],
        typeSpeed: 110,
        backSpeed: 50,
        loop: true
    });
});