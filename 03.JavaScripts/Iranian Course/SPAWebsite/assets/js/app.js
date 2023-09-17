const menuIconHumber = document.querySelector('.menu__icon')
const menuIconClose = document.querySelector('.icon__close')
const menuBaskitIcon = document.querySelector('.menu__baskit')

function openMenu() {
  const menuMobile = document.querySelector('.menu-mobile')
  menuMobile.classList.add('active')
}

function closeMenu() {
  const menuMobile = document.querySelector('.menu-mobile')
  menuMobile.classList.remove('active')
}

function closeBaskitMenu(event) {
  const baskitMenuWrapper = document.querySelector('.baskit-menu__wrapper')
  if(event.target.classList.contains('active')){
    event.target.classList.remove('active')
  }
}


function showBaskitMenu(){
  const baskitMenu  = document.querySelector('.baskit-menu ')
  baskitMenu.addEventListener('click', closeBaskitMenu)
  baskitMenu.classList.add('active')
}




var newCourseSwiper = new Swiper('.new-courses-swiper', {
  pagination: '.swiper-pagination',
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  autoplay:true,

  slidesPerView: 'auto',
  coverflow: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  loop: true
});


var blogBoxSwiper = new Swiper('.blog-swiper', {

  loop: true,
  grabCursor: true,
  autoplay:true,

  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 5,
    },

    540: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 7,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
  },

});


var relatedCoursesSwiper = new Swiper('.related-courses-swiper', {

  loop: true,
  grabCursor: true,
  autoplay:true,

  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 5,
    },

    540: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 7,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 8,
    },
  },

});
var studentCommentSwiper = new Swiper('.student-comment-swiper', {

  loop: true,
  grabCursor: true,
  autoplay:true,
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 5,
    },

    540: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 7,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});



menuIconHumber.addEventListener('click', openMenu)
menuIconClose.addEventListener('click', closeMenu)
menuBaskitIcon.addEventListener('click', showBaskitMenu)