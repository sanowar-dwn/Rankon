$(function(){
    //Client SLider js here
    $('.client-slider').slick({
        dots: false,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 1000,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
      //Story Counter js Here
      $('.counter-digit').counterUp({
        delay: 10,
        time: 1000
      });
       //Review SLider js here
      $('.review-slider').slick({
        dots: false,
        arrows: true,
        prevArrow: '.left-review-arrow',
        nextArrow: '.right-review-arrow',
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
       //News SLider js here
      $('.news-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        centerMode:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: '0',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
      //VenoBox js Here
      $('.venobox').venobox(); 
})