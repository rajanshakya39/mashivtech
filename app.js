// script for mobile toggle button

const menuBtn = document.querySelector(".menuBtn");
const sidebar = document.querySelector(".navlinks");
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle("active");
    sidebar.classList.toggle("active");
});

// script for number increment

let valueDisplays = document.querySelectorAll(".num");
let interval = 500;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue + '+';
        if (startValue == endValue){
            clearInterval(counter);
        }
    },duration);

});

// script for partner slideriew:

var swiper = new Swiper(".partner-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1020: {
        slidesPerView: 5,
      },
    },
  });

  // slider for team
  var swiper = new Swiper(".team", {
    slidesPerView: 1,
    spaceBetween: 20,
    // slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1270: {
      slidesPerView: 3,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  },
  });

  // script for testimonial slder

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


