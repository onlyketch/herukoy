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
    
});