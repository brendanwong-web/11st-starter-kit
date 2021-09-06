import Alpine from 'alpinejs';

Alpine.store('nav', {
  show: false,
  toggle() {
    this.show = ! this.show;
  }
});

let mqDesktop = window.matchMedia('(min-width: 1280px)')

Alpine.store('mobile', {
  isMobile: mqDesktop.matches ? false : true
});

window.Alpine = Alpine;
window.Alpine.start();

const env = document.querySelector('body').dataset.env;

// Check that service workers are supported
if ('serviceWorker' in navigator && env === 'production') {
  // use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    try {
      navigator.serviceWorker.register('/sw.js');
    } catch (error) {
      console.error('Service worker registration failed: ', error);
    }
  });
}

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination"
  }
});
var swiper = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination"
  }
});

let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '30px 0px',
  threshold: 0.7
}

let xyzAnimate = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('seen')
      entry.target.classList.add('xyz-in')
    }
  })
}

let observer = new IntersectionObserver(xyzAnimate, options);


let targets = document.querySelectorAll('*[xyz]')

for (let i = 0;i<targets.length;i++) {

  observer.observe(targets[i])
}

