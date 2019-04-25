(function () {
  'use strict';

  function ToggleModal (triggerClass, modalClass) {
    const triggers = document.querySelectorAll(triggerClass);
    const modal = document.querySelector(modalClass);
    const closeBtn = modal.querySelector('.modal__close');
    const esc_key = 27;

    function closeModal (evt) {
      if (evt.target === modal || evt.target === closeBtn) {
        modal.classList.remove('modal--open');
        modal.removeEventListener('click', closeModal);
      }
    }

    function closeModalKeyboard (evt) {
      if (evt.keyCode === esc_key) {
        modal.classList.remove('modal--open');
        document.removeEventListener('keydown', closeModalKeyboard);
      }
    }

    this.openModal = function () {
      triggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
          modal.classList.add('modal--open');
          modal.addEventListener('click', closeModal);
          document.addEventListener('keydown', closeModalKeyboard);
        });
      });
    }
  }

  let callbackModal = new ToggleModal('.callback-trigger', '.modal--callback');
  callbackModal.openModal();

  let messageModal = new ToggleModal('.message-trigger', '.modal--message');
  messageModal.openModal();

  let phonesModal = new ToggleModal('.phones-trigger', '.modal--phones');
  phonesModal.openModal();
})();
