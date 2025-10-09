$("#owl-demo-1").owlCarousel({
  loop:true,
  nav: false,
  margin:10,
  responsiveClass:true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  autoWidth: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoHeight:true,
  dots: false,
  dotsEach: true,
  responsive:{
      0:{
        items:1,
        nav:true
      },
      575:{
          items:2,
          nav:true
      },
      991:{
          items:4,
          nav:true
      }
  }
});

$("#owl-demo-2").owlCarousel({
  loop:true,
  nav: false,
  margin:10,
  responsiveClass:true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  autoWidth: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoHeight:true,
  dots: false,
  dotsEach: true,
  responsive:{
      0:{
        items:4,
        nav:true
      },
      575:{
          items:5,
          nav:true
      },
      991:{
          items:6,
          nav:true
      }
  }
});
