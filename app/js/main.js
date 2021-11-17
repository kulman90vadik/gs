// $(function(){
// jQuery(function($) {


    //  код который написан ниже сейчас не работает, 
    //  если его поднять вверх то будет работать




document.addEventListener('DOMContentLoaded', function(){

//////////////////HEADER///////////////////

//  start header-scroll
let header = document.querySelector('.header');
let headerTop = document.querySelector('.header__top');
let main = document.querySelector('.main');

window.addEventListener('scroll', function(){
    if(window.scrollY >= 116) {
        headerTop.classList.add('header__top--hidden');
        header.classList.add('header--active');
        main.style.paddingTop = `${116}px`;
    } else {
        headerTop.classList.remove('header__top--hidden');
        header.classList.remove('header--active');
        main.style.paddingTop = 0;
    }
});
//  finish header-scroll   


//  start star
$('.stars').rateYo({
    starWidth: '16px',
    normalFill: '#A0A0A0',
    ratedFill: '#F6AB3A',
    spacing: '5px',
    readOnly: true
});
//  finish star


//  start range 
$('.sidebar-filter__range').ionRangeSlider({
    onStart: function (data) {
        $('.sidebar-filter__min-number').text(data.from);
        $('.sidebar-filter__max-number').text(data.to);
    },
    onChange: function (data) {
        $('.sidebar-filter__min-number').text(data.from);
        $('.sidebar-filter__max-number').text(data.to);
    }
});
//  finish range 

//  start menu
let menuLinks = document.querySelectorAll('.menu__dropdown-link');
let menuImages = document.querySelector('.menu__photo');

for(let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('mousemove', function(){
        let menuLinksItem = menuLinks[i].getAttribute('data');
        menuImages.setAttribute('src', menuLinksItem);
    });
}
//  finish menu

// start burger
let headerBurger = document.querySelector('.header__burger');
headerBurger.addEventListener('click', function(){
    document.querySelector('.menu').classList.toggle('menu--active');
    document.querySelectorAll('.header__burger-item').forEach(elem => {
        elem.classList.toggle('header__burger-item--active');
    });
});
// finish burger

// start sliders products
    $('.page__slider, .project__list').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.products__list').slick({
        nextArrow: $('.products__next'),
        prevArrow: $('.products__prev'),
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 0,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
//  finish sliders

/////////////////////HEADER//////////////////



// добавление товаров 
    document.querySelector('.category__link-all').addEventListener('click', function(){
        let categoryItemsHidden = document.querySelectorAll('.category__item--hidden');
        categoryItemsHidden.forEach(elem => {
            elem.classList.add('category__item--show');
        });
        this.classList.add('category__link--remove');
    });




// modal ///////////////////////////////
let completionLink = document.querySelector('.completion__link');
let modal = document.querySelector('.modal');
let modalLink = document.querySelector('.modal__link');
let completionInputs = document.querySelectorAll('.completion__input');

completionInputs.forEach(elem => {
    elem.addEventListener('input', function(){
        if(!(elem.value === '')) {
            elem.style.backgroundColor = '#87f8a0';
        } 
    });
});

completionLink.addEventListener('click', function(e) {
    e.preventDefault();
    let count = 0;
    completionInputs.forEach(elem => {
        if(elem.value === '') {
            elem.style.backgroundColor = '#f85252';
            count++;
        } 
    });

    if(count === 0) {
        modal.classList.add('modal--active');
    }
});

modalLink.addEventListener('click', function() {
    modal.classList.remove('modal--active');
    completionInputs.forEach(elem => {
        elem.value = '';
        elem.style.backgroundColor = '#fff';
    });
});
// modal ///////////////////////////////

/////////////////////CATALOG/////////////////

//  start filter-select
let sidebarHeading = document.querySelectorAll('.sidebar-filter__heading');
sidebarHeading.forEach(elem => {
    elem.addEventListener('click', function(){
        elem.classList.toggle('sidebar-filter__heading--active');
        elem.querySelector('.sidebar-filter__icon').classList.toggle('sidebar-filter__icon--active');
        let sidebarFilter = elem.closest('.sidebar-filter');
        let sidebarHolder = sidebarFilter.querySelector('.sidebar-filter__holder');
        sidebarHolder.classList.toggle('sidebar-filter__holder--active');
        sidebarFilter.classList.toggle('sidebar-filter--active');
    });
});
// finish filter-select

// start select 
let registryBtn = document.querySelector('.registry__btn');
let registryOptions = document.querySelector('.registry__options');
registryBtn.addEventListener('click', function(){
    registryOptions.classList.toggle('registry__options--active');
    document.querySelector('.registry__icon').classList.toggle('registry__icon--active');
});

let registryOptionsItems = document.querySelectorAll('.registry__option');
registryOptionsItems.forEach(elem => {
    elem.addEventListener('click', function(){
        registryOptions.classList.toggle('registry__options--active');
        document.querySelector('.registry__icon').classList.toggle('registry__icon--active');
        registryBtn.value = elem.getAttribute('data-value');
        document.querySelector('.registry__text').textContent = elem.textContent;
    });
});
// finish select

// start filter
let sidebarFilterRadio = document.querySelectorAll('[data-radio]');
sidebarFilterRadio.forEach(elem => {
    elem.addEventListener('click', function(){
        let sidebarFilter = elem.closest('.sidebar-filter__label');
        let sidebarFilterChildern = sidebarFilter.querySelector('.sidebar-filter__text').innerHTML;
        document.querySelector('.registry__description').innerHTML = sidebarFilterChildern;
    });
});
// finish filter


///////////////PRODUCT///////////      ....http://localhost:3000/product.html 

//  start select product
let particularBtn = document.querySelector('.particular__btn');
let particularList = document.querySelector('.particular__list');
particularBtn.addEventListener('click', function(){
    particularList.classList.toggle('particular__list--active');
    document.querySelector('.particular__icon').classList.toggle('particular__icon--active');
});

let particularItems = document.querySelectorAll('.particular__item');
particularItems.forEach(elem => {
    elem.addEventListener('click', function(event){
        particularList.classList.toggle('particular__list--active');
        document.querySelector('.particular__icon').classList.toggle('particular__icon--active');
        particularBtn.value = elem.getAttribute('data-val');
        document.querySelector('.particular__text').textContent = elem.textContent;
    });
});
//  finish select product

//  start tabs
let tabButtons = document.querySelectorAll('.particular-tabs__btn');
let tabContent = document.querySelectorAll('.particular-tabs__content');
for(let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', function(e){
        let activeTabAttr = e.target.getAttribute('data-tab');
        for (let j = 0; j < tabButtons.length; j++) {
            let contentAttr = tabContent[j].getAttribute('data-content');
            if (activeTabAttr === contentAttr) {
                tabButtons[j].classList.add('particular-tabs__btn--active');
                tabContent[j].classList.add('particular-tabs__content--active'); 
            } else {
                tabButtons[j].classList.remove('particular-tabs__btn--active');
                tabContent[j].classList.remove('particular-tabs__content--active');
            }
        };
    });
}
//  finish tabs

//  start add review
let reviewAdd = document.querySelector('.review__add');
reviewAdd.addEventListener('click', function(){
    let reviewItems = document.querySelectorAll('.review__item--hidden');
    reviewItems.forEach(elem => {
        elem.classList.add('review__item--show');
    });
    this.classList.add('review__add--remove')
});
// finish review

// start star
let reviewScore = document.querySelectorAll('.review__score');
reviewScore.forEach(function(item, index){

    item.addEventListener('click', function(){
        rewiesItem.starNumber = Number(index) + 1;
        console.log(rewiesItem.starNumber);
        for(let i = 0; i < reviewScore.length; i++) {
            reviewScore[i].classList.remove('review__icon-star--active');
        }
        for(let i = 0; i <= index; i++) {
            reviewScore[i].classList.add('review__icon-star--active');
        }
    });
});
// finish star
// finish оставить отзыв о товаре ////////////////////////

// start accordion
let particularHeads = document.querySelectorAll('.particular__head');
const particularInfo = document.querySelector('.particular__info--active');
particularInfo.style.maxHeight = particularInfo.scrollHeight + 'px';
    particularHeads.forEach(item => {
        item.addEventListener('click', function(){
            item.classList.toggle('particular__head--active');
            let accordionIcon = item.querySelector('.particular__accordion-icon');
            accordionIcon.classList.toggle('particular__accordion-icon--active');
            let nextItem = item.nextElementSibling;

            if(nextItem.style.maxHeight) {
                nextItem.style.maxHeight = null;
                nextItem.style.backgroundColor = '#fff';
            }
            else {
                nextItem.style.maxHeight = nextItem.scrollHeight + 'px';
                nextItem.style.backgroundColor = '#F6F7F9';
            }
        });
    });
// finish accordion

//  start particular sliders
    let particularImagesSmall = document.querySelectorAll('.particular__images-small');
    let particularImagesBig = document.querySelector('.particular__images-big');
    particularImagesSmall.forEach(elem => {
        elem.addEventListener('click', function(){
            let imagesSmallAttribute = elem.getAttribute('src');
            particularImagesBig.setAttribute('src', imagesSmallAttribute);
        });
    });
//  finish particular sliders     


// Добавление товаров в чисо понравившихся    
    document.querySelector('.particular__add-btn').addEventListener('click', function(){
        let heartNumber = document.querySelector('.header__heart-number');
        let number = Number(heartNumber.innerHTML);
        heartNumber.classList.add('header__number');
        heartNumber.innerHTML = number + 1;
    });

// Добавление товаров в корзину
    document.querySelector('.particular__link').addEventListener('click', function(e){
        e.preventDefault();
        let corbNumber = document.querySelector('.header__corb-number');
        let number = Number(corbNumber.innerHTML);
        corbNumber.classList.add('header__number');
        corbNumber.innerHTML = number + 1;
    });




// удаление товара из корзины
//   let cardsDelete = document.querySelectorAll('.modal-corb__delete');
//   cardsDelete.forEach(elem => {
//       elem.addEventListener('click', function(){
//           let block = elem.closest('.modal-corb__block');
//           block.classList.add('modal-corb__block--hidden');
//       });
//   });
  


// Счётчик в корзине    
    // let corbPrice = document.querySelector('.modal-corb__price-number');
    // let corbPriceValue = Number(corbPrice.innerHTML);
    // document.querySelector('.modal-corb__counter').addEventListener('click', function(e){
    //     let number = document.querySelector('.counter__number');
    //     let numberValue = Number(number.innerHTML);
    //     if(e.target.closest('.counter__plus')) {
    //         number.innerHTML = numberValue + 1;
    //         corbPrice.innerHTML = Number(corbPrice.innerHTML) + corbPriceValue;
    //     }
    //     if(e.target.closest('.counter__minus')) {
    //         if(numberValue > 1) {
    //             number.innerHTML = numberValue - 1;
    //             corbPrice.innerHTML = Number(corbPrice.innerHTML) - corbPriceValue;
    //         }
    //     }
    // });

});
