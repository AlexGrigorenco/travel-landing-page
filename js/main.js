const headerSlider = document.querySelector('.header__slider');
const slideCounter = document.querySelector('.header__slide__counter');
const arrSliderItems = Array.from(headerSlider.children);
const arrHeaderNavDots = Array.from(document.querySelectorAll('.slider__nav__dot'));


arrSliderItems.forEach(function(item, index){
  item.dataset.index = index;
  item.querySelector('img').dataset.slide = 'header-slide';
  item.classList.add('animate__animated', 'animate__fast');
  if(index !== 0 ){
    item.classList.add('none');
  }else{
    item.dataset.active = '';
    item.classList.add('animate__fadeInLeft');
  }  
  
});
arrHeaderNavDots.forEach(function(item, index){
  item.dataset.index = index;
  item.dataset.action = 'header-slider-nav-dot';
}); 
function resetNavDots(){
  arrHeaderNavDots.forEach(function(item){
    item.classList.remove('slider__nav__dot-active');
  }); 
};

slideCounter.addEventListener('click', () => {
  changeSlide('img');
})

function setSlideCounterAndNavDot(){
  const currentSlide = slideCounter.querySelector('.current__slide');
  const activeSlideIndex = +headerSlider.querySelector('[data-active]').dataset.index;
  currentSlide.innerText = '0' + (activeSlideIndex + 1);
  resetNavDots();
  arrHeaderNavDots[activeSlideIndex].classList.add('slider__nav__dot-active');
}
setSlideCounterAndNavDot();



window.addEventListener('click', function(event){
 
  if(event.target.dataset.slide === 'header-slide'){    
    changeSlide('img');
  }else if (event.target.dataset.action === 'header-slider-nav-dot'){
    resetNavDots();
    event.target.classList.add('slider__nav__dot-active');
    changeSlide('dot');
    setSlideCounterAndNavDot();
  }
})




document.querySelector('.scroll__to__down').addEventListener('click', ()=>{
  window.scrollTo({
    top: 1000,
    behavior: "smooth"
});
})


//* ================================================== ACTIVITIES SLIDER =============================



const sliderBttnPrev = document.querySelector('.activities__slider__bttn-prev');
const sliderBttnNext = document.querySelector('.activities__slider__bttn-next');

$(document).ready(function(){
  $(".actitvities__slider").owlCarousel({
    items: 4,
    loop:true,
    autoplay: true,
    autoplayTimeout: 1000,
    responsiveClass:true,
    responsive: {
      0 : {
        items: 1,
      },
      450 : {
        items: 2,
      },
      550 : {
        items: 3,
      },
      800 : {
        items: 4,
      }
  },
  });
        const arrSliderItemWrappers = Array.from(document.querySelectorAll('.owl-item'));
      arrSliderItemWrappers.forEach(function(item){
        item.removeAttribute('style');
         });

      var owl = $('.actitvities__slider');
    owl.owlCarousel();
    // Go to the next item
    $('.activities__slider__bttn-next').click(function() {
        owl.trigger('next.owl.carousel', [700]);
    })
    // Go to the previous item
    $('.activities__slider__bttn-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [700]);
    })

      owl.trigger('play.owl.autoplay', [4000, 1000])

});


//*                                                 MENU MOBILE

const menuWrapper = document.querySelector('.menu__wrapper');
const body = document.querySelector('body');


document.querySelector('.menu-icon-wrapper').onclick = function(){
  toggleMenuMobile()

  menuWrapper.querySelectorAll('a').forEach(el => {
    el.addEventListener('click', () => {
      if(document.querySelector('.menu-icon-active')){
        toggleMenuMobile()
      }
    })
  })
}

function toggleMenuMobile() {
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  menuWrapper.classList.toggle('menu__wrapper-active');
  body.classList.toggle('no-scroll');
}



new WOW().init();