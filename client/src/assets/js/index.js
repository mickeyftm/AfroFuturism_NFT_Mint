
$('.slick-gallery').slick({
    rows: 2,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:"<i class='fas fa-chevron-left news--carousel-left'></i>",
    nextArrow:"<i class='fas fa-chevron-right news--carousel-right'></i>",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          rows:1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: false,
        }
      },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            rows:1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            rows:1,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
              rows:1,
            slidesToShow: 1,
            // dots: true,
            arrows: false,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});




$('.slide-full').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-samll-thumb'
});
$('.slider-samll-thumb').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slide-full',
  dots: false,
  // infinite: false,
  // centerMode: true,
  // centerPadding: '0px',
  arrows: true,
  focusOnSelect: true,
  prevArrow:"<i class='fas fa-chevron-left thumb--carousel-left'></i>",
  nextArrow:"<i class='fas fa-chevron-right thumb--carousel-right'></i>",
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        // dots: true,
        arrows: false,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

$('.slider-main').slick({
  slidesToShow: 1,
  arrows: false,
  asNavFor: '.slider-nav',
  vertical: true,
  // autoplay: true,
  verticalSwiping: true,
  infinite: true,
  // centerMode: true
});

$('.slider-nav').slick({
  slidesToShow: 3,
  arrows: true,
  asNavFor: '.slider-main',
  vertical: true,
  focusOnSelect: true,
  infinite: true,
  // autoplay: true,
  // centerMode: true
  prevArrow: '.prev-arrow',
nextArrow: '.next-arrow',
responsive: [
  {
    breakpoint: 1500,
    settings: {
      slidesToShow: 3,
      arrows: false,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      arrows: false,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      // dots: true,
      arrows: false,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});
  