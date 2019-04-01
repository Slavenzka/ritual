(function () {
  'use strict';

  const mobile = window.matchMedia('(max-width: 767px)');
  const menu = document.querySelector('.header__navigations');
  const trigger = document.querySelector('.header__burger');

  function MenuOperation () {
    this.toggleMain = function () {
      trigger.addEventListener('click', function () {
        menu.classList.toggle('header__navigations--opened');
        trigger.classList.toggle('header__burger--close');
      });
    }

    this.toggleSub = function () {
      let submenus = menu.querySelectorAll('.nav__link--submenu');

      function closeSubmenus (evt) {
        submenus.forEach(item => {
          if (item !== evt.target) {
            item.classList.remove('nav__link--opened');
          }
        });
        if (evt.target.className.indexOf('nav__link') >= 0) {
          evt.target.classList.toggle('nav__link--opened');
        }
      }

      function closeMissclicked (evt) {
        if (evt.target.className.indexOf('submenu__link') < 0 &&
        evt.target.className.indexOf('nav__link') < 0) {
          closeSubmenus(evt);
        }
      }

      submenus.forEach(item => {
        item.addEventListener('click', closeSubmenus);
      });

      document.addEventListener('click', closeMissclicked);
    }
  }

  let pageMenu = new MenuOperation;
  pageMenu.toggleSub();

  if (mobile.matches) {
    pageMenu.toggleMain();
  }
})();
