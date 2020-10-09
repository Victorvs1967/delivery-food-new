const btnCart = document.querySelector('.btn-cart'),
      btnClose = document.querySelector('.btn-close'),
      btnCancel = document.querySelector('.btn-cancel'),
      modal = document.querySelector('.modal');
const toggleModal = () => modal.classList.toggle('active');

new WOW().init();

btnCart.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
btnCancel.addEventListener('click', toggleModal);


