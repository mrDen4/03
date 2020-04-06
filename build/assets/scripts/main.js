$(document).ready(function () {
  //Слайдер для лицензий на главной странице
  $('.license .license__slider .slider__slides').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: false,
    arrows: true,
    slidesToScroll: 1,
    prevArrow: $('.license .license__slider .arrows__btn--left'),
    nextArrow: $('.license .license__slider .arrows__btn--right'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2
        }
      }
    ]
  });

  //Слайдер для отзывов на главной странице
  $('.reviews .license__slider .slider__slides').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: false,
    arrows: true,
    slidesToScroll: 1,
    prevArrow: $('.reviews .license__slider .arrows__btn--left'),
    nextArrow: $('.reviews .license__slider .arrows__btn--right'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2
        }
      }
    ]
  });

  //Слайдер для страницы с лицензиями и отзывами
  $('.reviews-page .reviews__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true,
    autoplay: true,
    arrows: true,
    slidesToScroll: 1,
    prevArrow: $('.reviews-page .arrows__btn--left'),
    nextArrow: $('.reviews-page .arrows__btn--right'),
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ]
  });

    //Слайдер для страницы с услугой
    $('.service-about .service-about__imgs').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      adaptiveHeight: true,
      autoplay: true,
      arrows: true,
      slidesToScroll: 1,
      prevArrow: $('.service-about .service__slider-wrap .arrows__btn--left'),
      nextArrow: $('.service-about .service__slider-wrap .arrows__btn--right'),
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1
          }
        }
      ]
    });

    //Слайдер для страницы с новостью
    $('.new .new__imgs').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      adaptiveHeight: true,
      autoplay: true,
      slidesToScroll: 1,
      prevArrow: $('.new .new__slider-wrap .arrows__btn--left'),
      nextArrow: $('.new .new__slider-wrap .arrows__btn--right'),
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1
          }
        }
      ]
    });

  //Кнопка "показать еще" на странице с Услугой в блоке с прайсом
  $('.service-price .service-price__btn').on('click', function () {
    $('.service-price .service-price__list .list__item--hide').removeClass('list__item--hide');
    $(this).addClass('service-price__btn--hide');
  });

  //Кнопка "показать еще" на страницу с Услугами
  $('.services .services__btn').on('click', function () {
    $('.services .services__list .list__item--hide').removeClass('list__item--hide');
    $(this).addClass('services__btn--hide');
  });

  //Кнопка "показать еще" на страницу с Акциями
  $('.sales .sales__btn').on('click', function () {
    $('.sales .sales__list .list__item--hide').removeClass('list__item--hide');
    $(this).addClass('sales__btn--hide');
  });

  //popup с обратным звонком
  $('.hero .btns__btn, .service-hero .btns__btn, .contacts .contacts__info .info__right .right__btn').on('click', function () {
    $('.popup').addClass('popup--active');
    $('.bg').addClass('bg--active');
  });

  $('.popup .popup__exit, .popup__form .form__btn').on('click', function () {
    $('.bg').removeClass('bg--active');
    $('.popup').removeClass('popup--active');
  });

  $('.bg').on('click', function () {
    $('.bg').removeClass('bg--active');
    $('.popup').removeClass('popup--active');
  });

  //popup с меню на мобильной версии
  $('.header .header__hamburger').on('click', function () {
    $('.header .header__hamburger').addClass('header__hamburger--active');
    $('.header__exit-popup').addClass('header__exit-popup--active');
    $('.popup-menu').addClass('popup-menu--active');
    $('.bg').addClass('bg--active');
  });

  $('.header__exit-popup').on('click', function () {
    $('.bg').removeClass('bg--active');
    $('.popup-menu').removeClass('popup-menu--active');
    $('.header__exit-popup').removeClass('header__exit-popup--active');
    $('.header .header__hamburger').removeClass('header__hamburger--active');
  });

  $('.bg').on('click', function () {
    $('.bg').removeClass('bg--active');
    $('.popup-menu').removeClass('popup-menu--active');
    $('.header__exit-popup').removeClass('header__exit-popup--active');
    $('.header .header__hamburger').removeClass('header__hamburger--active');
  });
});