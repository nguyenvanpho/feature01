$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 8,
        loop: true,
        padding:10,
        autoplay: false,
        autoplayHoverPause: true
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })
})
 // $(document).ready(function() {
 //              var owl = $('.owl-carousel');
 //              owl.owlCarousel({
 //                padding: 10,
 //                // nav: true,
 //                loop: true,
 //                responsive: {
 //                  0: {
 //                    items: 1
 //                  },
 //                  600: {
 //                    items: 3
 //                  },
 //                  1000: {
 //                    items: 8
 //                  }
 //                }
 //              })
 //            })