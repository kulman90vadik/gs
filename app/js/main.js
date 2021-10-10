$(function(){
    
    $('.header__btn').on('click', function(){
        $('.menu').toggleClass('menu--active');
        $('.header__btn-item').toggleClass('header__btn-item--active');
    });

    $('.menu__head').on('click', function(){
        // $('.menu__holder').slideUp();
        // $('.menu__plus').removeClass('menu__minus');
        $(this).next('.menu__holder').slideToggle();
        $(this).children('.menu__plus').toggleClass('menu__minus')
    });

    $('.js-range-slider').ionRangeSlider({
        onStart: function (data) {
            $('.sidebar__price-min').text(data.from);
            $('.sidebar__price-max').text(data.to);
        },
        onChange: function (data) {
            $('.sidebar__price-min').text(data.from);
            $('.sidebar__price-max').text(data.to);
        }
    });


    new WOW().init();


    
    $('.discount__list').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            }
        ]
    });

    $('.details__slider-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.details__slider-bottom'
    });
    $('.details__slider-bottom').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.details__slider-top',
        prevArrow: '<button type="button" class="slick-prev"><svg class="details__icon" aria-label="стрелка влево"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="details__icon" aria-label="стрелка вправо"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>'
    });

    $('.details__item').closest('div').width(82);

    $('.details__input').styler();

///// start /////
    // let addressInput = document.querySelector('.identity-address__input');
    // let addressItem = document.createElement('li');
    // addressItem.classList.add('identity-address__item');

    // addressInput.addEventListener('input', function() {
    //     addressItem.innerHTML = addressInput.value;
    //     document.querySelector('.identity-address__list').append(addressItem);
    // });
    // addressInput.addEventListener('blur', function() {
    //     addressInput.value = ' ';
    // });  

    let newElement = $('<li class="identity-address__item"></li>');
    $('.identity-address__input').on('input', function(){
        newElement.text($('.identity-address__input').val());
        $('.identity-address__list').append(newElement);
    });
    $('.identity-address__input').on('blur', function(){
        $('.identity-address__input').val('');
    });
///// end /////

///// start /////
    // // добавляем в корзину товар
    // let detailsBtn = document.querySelector('.details__btn');
    // let headerNumber = Number(document.querySelector('.header__number').innerHTML);
    // detailsBtn.addEventListener('click', function(){
    //     document.querySelector('.header__number').innerHTML = ++headerNumber;
    // });

    let headerNumber = Number($('.header__number').text());
    $('.details__btn').on('click', function(){
        $('.header__number').text(++headerNumber);
    });
///// end /////

///// start /////
    // // добавление количества букетов для заказа
    // let detailsPlus = document.querySelector('.details .jq-number__spin.plus');
    // let detailsMinus = document.querySelector('.details .jq-number__spin.minus');
    // let detailsPriceNumber = Number(document.querySelector('.details__price-number').innerHTML);
    // let detailsPriceNumberOld = Number(document.querySelector('.details__price-numberOld').innerHTML);

    // detailsPlus.addEventListener('click', function(){
    //     let detailsInput = +document.getElementById('number').value;
    //     let sum = detailsPriceNumber * detailsInput;
    //     let sumOld = detailsPriceNumberOld * detailsInput;
    //     document.querySelector('.details__price-number').innerHTML = sum;
    //     document.querySelector('.details__price-numberOld').innerHTML = sumOld;
    // });

    // detailsMinus.addEventListener('click', function(){
    //     let detailsPriceNumberMinus = Number(document.querySelector('.details__price-number').innerHTML);
    //     let detailsPriceNumberMinusOld = Number(document.querySelector('.details__price-numberOld').innerHTML);
    //     if (detailsPriceNumberMinus > detailsPriceNumber && detailsPriceNumberMinusOld > detailsPriceNumberOld) {
    //         let sum = detailsPriceNumberMinus - detailsPriceNumber;
    //         let sumOld = detailsPriceNumberMinusOld - detailsPriceNumberOld;
    //         document.querySelector('.details__price-number').innerHTML = sum;
    //         document.querySelector('.details__price-numberOld').innerHTML = sumOld;
    //     }
    // });

// добавление товара на  странице details //
    let detailsPriceNumber = Number($('.details__price-number').text());
    let detailsPriceNumberOld = Number($('.details__price-numberOld').text());

    $('.details .jq-number__spin.plus').on('click', function(){
        let detailsInput = Number($('#number').val());
        let sum = detailsPriceNumber * detailsInput;
        let sumOld = detailsPriceNumberOld * detailsInput;
        $('.details__price-number').text(sum);
        $('.details__price-numberOld').text(sumOld);
    });
    
    $('.details .jq-number__spin.minus').on('click', function(){
        let detailsPriceNumberMinus = Number($('.details__price-number').text());
        let detailsPriceNumberMinusOld = Number($('.details__price-numberOld').text());
        if (detailsPriceNumberMinus > detailsPriceNumber && detailsPriceNumberMinusOld > detailsPriceNumberOld) {
            let sum = detailsPriceNumberMinus - detailsPriceNumber;
            let sumOld = detailsPriceNumberMinusOld - detailsPriceNumberOld;
            $('.details__price-number').text(sum);
            $('.details__price-numberOld').text(sumOld);
        }
    });
// добавление товара на  странице basket //
let basketPriceNumber = Number($('.basket-card__price-number').text());
let basketPriceNumberOld = Number($('.basket-card__price-numberOld').text());

$('.basket-card .jq-number__spin.plus').on('click', function(){
    let basketInput = Number($('#basket-number').val());
    let sum = basketPriceNumber * basketInput;
    let sumOld = basketPriceNumberOld * basketInput;
    $('.basket-card__price-number').text(sum);
    $('.basket-scoring__number').text(sum);
    $('.basket-scoring__sum').text(sum - (sum / 10));

    $('.basket-card__price-numberOld').text(sumOld);
});

$('.basket-card .jq-number__spin.minus').on('click', function(){
    let basketPriceNumberMinus = Number($('.basket-card__price-number').text());
    let basketPriceNumberMinusOld = Number($('.basket-card__price-numberOld').text());
    if (basketPriceNumberMinus > basketPriceNumber && basketPriceNumberMinusOld > basketPriceNumberOld) {
        let sum = basketPriceNumberMinus - basketPriceNumber;
        let sumOld = basketPriceNumberMinusOld - basketPriceNumberOld;
        $('.basket-card__price-number').text(sum);
        $('.basket-scoring__number').text(sum);
        $('.basket-scoring__sum').text(sum - (sum / 10));

        $('.basket-card__price-numberOld').text(sumOld);
    }
});
///// end /////

///// start /////
    // let loginFormIcon = document.querySelector('.login-form__icon');
    // let loginFormPassword = document.querySelector('.login-form__input--password');
    // loginFormIcon.addEventListener('click', function(){
    //     loginFormIcon.classList.toggle('login-form__icon--active');
    //     if(loginFormPassword.getAttribute('type') === 'password') {
    //         loginFormPassword.setAttribute('type', 'text');
    //     } else {
    //         loginFormPassword.setAttribute('type', 'password');
    //     }
    // }); 
    $('.login-form__icon').on('click', function(){
        $('.login-form__icon').toggleClass('login-form__icon--active');
        if($('.login-form__input--password').attr('type') === 'password') {
            $('.login-form__input--password').attr('type', 'text');
        } else {
            $('.login-form__input--password').attr('type', 'password');
        }
    });
///// end /////

///// start /////
    $('.basket-card__icon').on('click', function(){
        $(this).parents('.basket-card').fadeOut(1000);
    });
///// end /////

///// start /////

// нужно подумать 

    // $('.basket-scoring__input--delivery').on('change', function(){
    //     if(this.checked) {
    //         // $('.basket-scoring__sum').text(sum - (sum / 10));
    //         let num = Number($('.basket-scoring__sum').text());
    //         $('.basket-scoring__sum').text(num + 1000);
    //     }
    // });
///// end /////

    $('.sidebar__subtitle').on('click', function() {
        $(this).next('.sidebar__list').slideToggle();
    });

///// start /////
        // if ($('body').hasClass('identity__inner')) {
        //     var Mixer = mixitup('.identity__inner');
        //     Mixer.filter('.category-a');
        // } 
        if ($('.identity__inner')) {
            var Mixer = mixitup('.identity__inner');
            Mixer.filter('.category-a');
        }
        // var Mixer = mixitup('.identity__inner');
        // Mixer.filter('.category-a');
///// end /////

        
    
});