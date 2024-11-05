const swiper = new Swiper('.mySwiper', {
    on: {
      slideChange: function (){
          let activeIndex = this.activeIndex;  // Get the active slide index
          let prebtn = document.querySelector('.PRE');
          activeIndex===0 ?prebtn.classList.add('hide'):prebtn.classList.add("showprebtn");
          activeIndex!==0 ?prebtn.classList.add("showprebtn"):prebtn.classList.remove("showprebtn");
        }                                    
      },
  
     
      navigation: {
        nextEl: '.NEXT',
        prevEl: '.PRE',
      },
      breakpoints: {
        300: {
        spaceBetween:20,   
          slidesPerView:2,
        },
        425: {   
          slidesPerView:3,
          
        }, 
        576: {
        spaceBetween:40,   
          slidesPerView:3,
          spaceBetween:40,
        },
      
        768: {
          slidesPerView:4,
          spaceBetween:10,
          slidesPerGroup:5,
  
        },
        992: {
          slidesPerView: 5,
          spaceBetween:30,
          slidesPerGroup:5,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween:25,
          slidesPerGroup:5,
        },
        1500: {
          slidesPerView: 8,
          slidesPerGroup:25,
        },
      },
    });
  
  const swiper2 = new Swiper('.myNewSwiper2', {
    breakpoints: {
      300: {
        slidesPerView: 1.1,
        spaceBetween: 30,
      },
      350:{
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1.2,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 150,
      },
      1024: {
        slidesPerView: 2.2,
        spaceBetween: 100,
      },
      1200: {
        slidesPerView: 2.5,
        spaceBetween: 100,
      },
      1500: {
        slidesPerView: 5,
        spaceBetween: 100,
      },
    }
  });