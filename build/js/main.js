//функция навешивания класса на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  var b = $(".main-banner");
  if($(window).scrollTop() > (b.height() / 2)) {
    h.addClass("half-scrolled");
  } else {
    h.removeClass("half-scrolled");
  }

  if($(window).scrollTop() > (b.height())) {
    h.addClass("scrolled");
  } else {
    h.removeClass("scrolled");
  }
};

$(document).ready(function () {
  //запуск функции навешивания класса на шапку
  resize_scroll();

  //главный баннер
  if ($('.js-slider').length) {
    $('.js-slider').slick({
      pauseOnHover: false,
      autoplay: true,
      fade: true,
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

  //слайдер программ
  if ($('.js-programs-slider').length) {
    if($('body').width() < 991) {
      $('.js-programs-slider').slick({
        autoplay: false,
        mobileFirst: true,
        slidesToShow: 1,
        infinite: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
        dots: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      });
    }
  }
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//открытие меню
$(document).on('click', '.js-menu-opener', function () {
  $('body').addClass('overflow');
  $('.header__center').addClass('is-open');
  return false;
});

//закрытие меню
$(document).on('click', '.js-menu-closer', function () {
  $('body').removeClass('overflow');
  $('.header__center').removeClass('is-open');
  return false;
});
