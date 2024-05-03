document.addEventListener('DOMContentLoaded', function() {
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });

    let logo = document.querySelector('.header__logo-img');
    
    logo.addEventListener('mouseover', function() {
      let className = logo.getAttribute('class');
      let newClassName = className + ' animate__animated animate__rubberBand';
      logo.setAttribute('class', newClassName);
    });

    logo.addEventListener('mouseout', function() {
      logo.setAttribute('class', 'header__logo-img');
    });

    //menu
    let gallery = document.querySelector('.gallery');
    let about = document.querySelector('.about');
    let contact = document.querySelector('.contact');

    let aboutLink = document.querySelector('#about');
    let galleryLink = document.querySelector('#gallery');
    let contactLink = document.querySelector('#contact');

    const links = [galleryLink, aboutLink, contactLink];
    const sections = [gallery, about, contact];

    for (let j = 0; j < links.length; j++) {
      links[j].addEventListener('click', function(e) {
        e.preventDefault();
        for (let i = 0; i < sections.length; i++) {
          sections[i].classList.add('invisible');
        }
  
        sections[j].classList.remove('invisible');
      });
    }

    
    
});