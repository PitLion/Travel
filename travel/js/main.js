(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.nav');
  const menuCloseItem = document.querySelector('.nav-close');
  const menuLinks = document.querySelectorAll('.header__link');
  const allMain = document.querySelector('.main');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('nav-active');
  });

    allMain.addEventListener('click', () => {
        menu.classList.remove('nav-active');
    });


    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav-active');
      });
      if (window.innerWidth <= 390) {
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('nav-active');
            });
        }
    }


}());


(function () {

  const smoothScroll = function (targetEl, duration) {
     /* const headerElHeight =  document.querySelector('.header').clientHeight;*/
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top/* - headerElHeight*/;
      let startPosition = window.pageYOffset;
      let startTime = null;

      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };

      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };


  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}());


/*part2*/

const openPopUp = document.getElementById('open-pop-up');
const closePopUp = document.getElementById('pop-up-close');
const popUp = document.getElementById('pop-up');
const upPopUp = document.getElementById('up-pop-up');

openPopUp.addEventListener('click', function(e) {
  e.preventDefault();
  popUp.classList.add('pop-up-active');
  upPopUp.classList.remove('up-pop-up-active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('pop-up-active');
})


const inputMail = document.getElementById('mail');
const inputPassword = document.getElementById('password');
const showAlert = document.getElementById('show-alert');

showAlert.addEventListener('click', () => {
    alert(`E-mail: ${inputMail.value}   Password: ${inputPassword.value}`);
})


const inputUpMail = document.getElementById('up-mail');
const inputUpPassword = document.getElementById('up-pass');
const showUpAlert = document.getElementById('up-alert');

showUpAlert.addEventListener('click', () => {
    alert(`E-mail: ${inputUpMail.value}   Password: ${inputUpPassword.value}`);
})


const openUpPopUp = document.getElementById('open-up-pop-up');
openUpPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    upPopUp.classList.add('up-pop-up-active');
    popUp.classList.remove('pop-up-active');
  })

  closePopUp.addEventListener('click', () => {
      popUp.classList.remove('pop-up-active');
      upPopUp.classList.remove('up-pop-up-active');
  })

const openSmallPopUp = document.getElementById('open-small-pop-up');
openSmallPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('pop-up-active');
    upPopUp.classList.remove('up-pop-up-active');
  })

/*part3*/
let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let slider = document.querySelector("div.slider");
let viewSliders = document.querySelectorAll(".viewSlide");
let viewSlide = 0;

viewSliders[1].style.backgroundColor = "#f27559";

btnNext.addEventListener("click", function () {
    viewSliders[viewSlide].style.backgroundColor = "#f2755980";
    if (viewSlide < 2) {
        viewSlide++;
    } else {
        viewSlide = 0;
    }
    viewSliders[viewSlide].style.backgroundColor = "#f27559";
    slider.style.left = -viewSlide * 36 + "%";

});

btnPrev.addEventListener("click", function () {
    viewSliders[viewSlide].style.backgroundColor = "#f2755980";
    if (viewSlide > 0) {
        viewSlide--;
    } else {
        viewSlide = 2;
    }
    viewSliders[viewSlide].style.backgroundColor = "#f27559";
    slider.style.left = -viewSlide * 36 + "%";
});

/*part 3 mini*/
let viewportMini = document.getElementById("viewport-mini").offsetWidth;
let btnNextMini = document.getElementById("next-mini");
let btnPrevMini = document.getElementById("prev-mini");
let sliderMini = document.querySelector("div.slider-mini");
let viewSlidersMini = document.querySelectorAll(".viewSlide-mini");
let viewSlideMini = 0;

viewSlidersMini[1].style.backgroundColor = "#f27559";

btnNextMini.addEventListener("click", function () {
    viewSlidersMini[viewSlideMini].style.backgroundColor = "#f2755980";
    if (viewSlideMini < 2) {
        viewSlideMini++;
    } else {
        viewSlideMini = 0;
    }
    viewSlidersMini[viewSlideMini].style.backgroundColor = "#f27559";
    sliderMini.style.left = -viewSlideMini * viewportMini + "px";

});

btnPrevMini.addEventListener("click", function () {
    viewSlidersMini[viewSlideMini].style.backgroundColor = "#f2755980";
    if (viewSlideMini > 0) {
        viewSlideMini--;
    } else {
        viewSlideMini = 2;
    }
    viewSlidersMini[viewSlideMini].style.backgroundColor = "#f27559";
    sliderMini.style.left = -viewSlideMini * viewportMini + "px";
});
