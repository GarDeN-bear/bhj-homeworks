
let cookiePairs = document.cookie.split('; ');
let popupState = cookiePairs.find(p => p.startsWith('popupState='));
let modal = document.getElementById('subscribe-modal');
if (!popupState) {
  modal.classList.add('modal_active');
}

let popupButton = document.body.querySelector('.modal__close');
popupButton.addEventListener('click', () => {
  if (modal.classList.contains('modal_active')) {
    modal.classList.remove('modal_active');
    document.cookie = 'popupState=' + encodeURIComponent(true);
  } else {
    modal.classList.add('modal_active');
  }
});
