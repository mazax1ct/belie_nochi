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

var targetElement = document.querySelector(".header__center");

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

  //слайдер новостей
  if ($('.js-news-list').length) {
    if($('body').width() < 991) {
      $('.js-news-list').slick({
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

  //слайдер галереи
  if ($('.js-gallery-slider').length) {
    $('.js-gallery-slider').slick({
      centerPadding: '50px',
      centerMode: true,
      appendArrows: '.js-gallery-nav',
      autoplay: false,
      mobileFirst: true,
      slidesToShow: 3,
      infinite: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
      dots: false,
      variableWidth: true
    });
  }

  //слайдер отзывов
  if ($('.js-reviews-list').length) {
    $('.js-reviews-list').slick({
      adaptiveHeight: true,
      autoplay: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      arrows: true,
      appendArrows: $('.reviews-buttons'),
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
      dots: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3,
            appendArrows: $('.js-reviews-list')
          }
        }
      ]
    });
  }
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//открытие меню
$(document).on('click', '.js-menu-opener', function () {
  bodyScrollLock.disableBodyScroll(targetElement);
  $('.header__center').addClass('is-open');
  return false;
});

//закрытие меню
$(document).on('click', '.js-menu-closer', function () {
  bodyScrollLock.enableBodyScroll(targetElement);
  $('.header__center').removeClass('is-open');
  return false;
});

//открытие/закрытие проблемы
$('.js-problem').click(function () {
  var el = $(this);

  if($('body').width() < 768){
    if(!el.hasClass('is-open')) {
      $('.js-problem').removeClass('is-open');
      $('.problem__dropdown').slideUp(200, function () {
        setTimeout(function() {
          el.find('.problem__dropdown').slideDown();
          el.addClass('is-open');
        }, 100);
      });
    } else {
      el.find('.problem__dropdown').slideUp();
      el.removeClass('is-open');
    }
  } else {
    if(!el.hasClass('is-open')) {
      $('.js-problem').removeClass('is-open');
      $('.problem__dropdown').fadeOut(200, function () {
        setTimeout(function() {
          el.find('.problem__dropdown').fadeIn();
          el.addClass('is-open');
        }, 100);
      });
    } else {
      el.find('.problem__dropdown').fadeOut();
      el.removeClass('is-open');
    }
  }
  //return false;
});

//открытие/закрытие причины
$('.js-reason').click(function () {
  var el = $(this);

  if($('body').width() < 768){
    if(!el.hasClass('is-open')) {
      $('.js-reason').removeClass('is-open');
      $('.reason__dropdown').slideUp(200, function () {
        setTimeout(function() {
          el.find('.reason__dropdown').slideDown();
          el.addClass('is-open');
        }, 100);
      });
    } else {
      el.find('.reason__dropdown').slideUp();
      el.removeClass('is-open');
    }
  } else {
    if(!el.hasClass('is-open')) {
      $('.js-reason').removeClass('is-open');
      $('.reason__dropdown').fadeOut(200, function () {
        setTimeout(function() {
          el.find('.reason__dropdown').fadeIn();
          el.addClass('is-open');
        }, 100);
      });
    } else {
      el.find('.reason__dropdown').fadeOut();
      el.removeClass('is-open');
    }
  }
  return false;
});

$(document).on('click', '.js-accordion-toggler', function () {
  var el = $(this);
  el.parent().find('.accordion__dropdown-block').fadeToggle(300);
  el.parent().find('.accordion__button').toggleClass('open');
  return false;
});
