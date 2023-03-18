


// *   ACTIVITIES


{
    const data = [
        {
            img: './images/activities/slider-img-1.png',
            title: 'Hiking',
            text: '230 activites',
        },
        {
            img: './images/activities/slider-img-2.png',
            title: 'Sailing',
            text: '121 activites',
        },
        {
            img: './images/activities/slider-img-3.png',
            title: 'Skiing',
            text: '212 activites',
        },
        {
            img: './images/activities/slider-img-4.png',
            title: 'Kayaking',
            text: '512 activites',
        },
        {
            img: './images/activities/slider-img-5.png',
            title: 'Hiking',
            text: '230 activites',
        },
        {
            img: './images/activities/slider-img-6.png',
            title: 'Sailing',
            text: '121 activites',
        },
        {
            img: './images/activities/slider-img-7.png',
            title: 'Skiing',
            text: '212 activites',
        },
        {
            img: './images/activities/slider-img-8.png',
            title: 'Kayaking',
            text: '512 activites',
        },
    ]


    document.querySelector('.actitvities__slider').innerHTML = data.map(item => `
                    <div class="activities__slider__item">
                    <img
                    src=${item.img}
                    alt="slider image"
                    />
                    <div class="activities__slider__item__info__wrapper">
                    <p class="slider__item__event">${item.title}</p>
                    <p class="slider__item__amount__activities">${item.text}</p>
                    </div>
                </div>
  `).join('')
}


//   *              OUR PHILOSOPHY 

{
    const data = [
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
      
      document.querySelector('.philosophy__content__items').innerHTML = data.map((item, index) => `
                    <div class="philosophy__content__item wow animate__slideInRight" data-wow-delay="${index / 2}s">
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
}


// *        HOTELS

{
    const data =[
        {
            img: './images/hotels/reine-img.png',
            location: 'Reine',
            stars: './images/hotels/Star-5.svg',
            price: 720,
        },
        {
            img: './images/hotels/nofway-img.png',
            location: 'Norway',
            stars: './images/hotels/Star-4.svg',
            price: 350,
        },
        {
            img: './images/hotels/bergen-img.png',
            location: 'Bergen',
            stars: './images/hotels/Star-4-5.svg',
            price: 670,
        },
    ]

    document.querySelector('.hotels__content__wrapper').innerHTML = data.map((item, index) => `
                        <div class="hotels__item wow animate__fadeIn" data-wow-delay="${index / 2}s" data-wow-duration="1s">
                        <div class="hotels__item__img__wrapper">
                            <img src=${item.img} alt="image" />
                        </div>
                        <div class="hotels__location__wrapper">
                            <h3 class="hotels__location">${item.location}</h3>
                            <img src=${item.stars} alt="rating" />
                        </div>
                        <p class="hotels__price">$${item.price}</p>
                        </div>
`).join('')
}
  
  
  //*              OUR PARTNERS
  
 {
    const data = [
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
      
      document.querySelector('.partners__rewiev__wrapper').innerHTML = data.map((item, index) => `
            <div class="partners__rewiev__item wow animate__fadeIn"  data-wow-delay="${index / 2}s" data-wow-duration="1s">
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
 }