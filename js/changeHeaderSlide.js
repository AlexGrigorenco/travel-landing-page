function changeSlide(method){
  const activeSlide = headerSlider.querySelector('[data-active]');
  const activeSlideIndex = +activeSlide.dataset.index;

      let nextSlideIndex;
      
      if(method === 'img'){
        if(activeSlideIndex + 1 === arrSliderItems.length){
          nextSlideIndex = 0;
          }else{
          nextSlideIndex = activeSlideIndex + 1;
        }
      }else if(method ==='dot'){
        nextSlideIndex = document.querySelector('.slider__nav__dot-active').dataset.index;
      }     
  
  const nextSlide = headerSlider.querySelector(`[data-index="${nextSlideIndex}"]`);
  
      activeSlide.classList.add('animate__fadeOutRight');
      
      window.setTimeout(changeSlideFromTimeout, 500);
 
      function changeSlideFromTimeout(){
        activeSlide.classList.remove('animate__fadeOutRight', 'animate__fadeInLeft');
            activeSlide.classList.add('none');  
            activeSlide.removeAttribute('data-active');  

            nextSlide.dataset.active = '';
            nextSlide.classList.add('animate__fadeInLeft')
            nextSlide.classList.remove('none');

            setSlideCounterAndNavDot();
     }
};

