$(document).ready(function () {
    //Слайдер для лицензий на главной странице
    $('.license .license__slider .slider__slides').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        autoplay: true,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: $('.license .license__slider .slider__arrows .arrows__arrow--left'),
        nextArrow: $('.license .license__slider .slider__arrows .arrows__arrow--right')
    });

    //Слайдер для отзывов на главной странице
    $('.reviews .license__slider .slider__slides').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        autoplay: true,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: $('.reviews .license__slider .slider__arrows .arrows__arrow--left'),
        nextArrow: $('.reviews .license__slider .slider__arrows .arrows__arrow--right')
    });

    //Слайдер для страницы с акциями
    $('.sales .sales__list').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        adaptiveHeight: true,
        autoplay: true,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: $('.sales .arrows__arrow--left'),
        nextArrow: $('.sales .arrows__arrow--right')
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

    //popup с обратным звонком
    $('.hero .btns__btn').on('click', function () {
        $('.popup').addClass('popup--active');
        $('.bg').addClass('bg--active');
    });

    $('.popup .popup__exit').on('click', function () {
        $('.bg').removeClass('bg--active');
        $('.popup').removeClass('popup--active');
    });

    $('.bg').on('click', function () {
        $('.bg').removeClass('bg--active');
        $('.popup').removeClass('popup--active');
    });
});