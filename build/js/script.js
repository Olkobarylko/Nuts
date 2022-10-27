function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

const menu_button = document.querySelector('.mobile-bar');
const modal_menu = document.querySelector('.modal-menu');

function openModal() {
    menu_button.classList.toggle('cross-menu');
    modal_menu.classList.toggle('modal-active');
}

var swiper = new Swiper(".product-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper1 = new Swiper(".about-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper2 = new Swiper(".news-swiper", {
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        390: {
            slidesPerView: 1.1,
            spaceBetween: 10
        },
        450: {
            slidesPerView: 1.5,
            spaceBetween: 30
        },
        550: {
            slidesPerView: 1.5,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-news",
        prevEl: ".swiper-button-prev-news",
    },
});