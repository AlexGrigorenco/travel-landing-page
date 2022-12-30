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



//   *              OUR PHILOSOPHY 

const ourPhilosophyContent = [
  {
    title: 'Sustainable',
    number: '01',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu scelerisque quam, ac tristique dolor. Aliquam nulla risus,',
  },
  {
    title: 'Fair & Share',
    number: '02',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu scelerisque quam,',
  },
  {
    title: 'Experience',
    number: '03',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu scelerisque quam, ac tristique',
  },
]

document.querySelector('.philosophy__content__items').innerHTML = ourPhilosophyContent.map(item => `
              <div class="philosophy__content__item">
                  <div class="philosophy__content__num">
                    <p>${item.number}</p>
                  </div>
                  <div class="philosophy__content">
                    <h3 class="philosophy__content__title">${item.title}</h3>
                    <p class="philosophy__content__text">${item.text}
                    </p>
                  </div>
               </div>
`).join('')


//*              OUR PARTNERS

const ourPartnersContent = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipis. consectetur adipiscing elit. nibh lectus feugiat nunc',
    img: './images/partners/jane-cooper.png',
    name: 'Jane Cooper',
    jobTitle: 'CEO, ABC Corporation',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.  consectetur adipiscing elit.',
    img: './images/partners/alan-jackson.png',
    name: 'Alan Jackson',
    jobTitle: 'CEO, Travelers Community',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat. ipsum dolor  sit amet, consectetur adipiscing elit.',
    img: './images/partners/james-anderson.png',
    name: 'James Anderson',
    jobTitle: 'CEO, Go Travel',
  },
]

document.querySelector('.partners__rewiev__wrapper').innerHTML = ourPartnersContent.map(item => `
      <div class="partners__rewiev__item">
            <div class="text__wrapper">
              <p>
                ${item.text}
              </p>
            </div>
            <div class="partners__rewiev__info">
              <div class="partners__rewiev__photo">
                <img src=${item.img} alt="photo" />
              </div>
              <div class="partner__info">
                <p class="partner__name">${item.name}</p>
                <p class="partner__post">${item.jobTitle}</p>
              </div>
            </div>
      </div>
`)