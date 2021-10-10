
// start menu
let menuLinks = document.querySelectorAll('.menu__dropdown-link');
let menuImages = document.querySelector('.menu__photo');

for(let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('mousemove', function(){
        let menuLinksItem = menuLinks[i].getAttribute('data');
        menuImages.setAttribute('src', menuLinksItem);
    });
}
// finish menu

