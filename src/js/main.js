$(document).ready(function () {
  //ukглавный баннер
  if ($('.js-slider').length) {
    $('.js-slider').slick({
      autoplay: true,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: true
          }
        }
      ]
    });
  }
});
