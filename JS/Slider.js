$('.owl-carousel').owlCarousel({
    loop:true,
    rtl: true,
    stagePadding: 0,
    margin:10,
    center:true,
    responsiveClass:true,
    avText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:2,
            nav:false
        },
        576:{
            items:4,
            nav:true,
        },
        768:{
            items:6,
            nav:true,
        },
        992:{
            items:8,
            nav:true,

        }
    }
})