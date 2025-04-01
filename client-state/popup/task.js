
let body = document.body;

body.insertAdjacentHTML(
    'afterbegin', `<div class="modal modal_active" id="subscribe-modal">
    <div class="modal__content">
        <div class="modal__close modal__close_times">&times;</div>
        Подпишитесь на нашу рассылку пожалуйста!
    </div>
</div>`);

let cookiePairs = document.cookie.split('; ');
let popupState = cookiePairs.find(p => p.startsWith('popupState='));
let modal = body.querySelector('.modal');
if (popupState) {
  modal.classList.remove('modal_active');
} else {
  modal.classList.add('modal_active');
}


let popupButton = body.querySelector('.modal__close');
popupButton.addEventListener('click', () => {
  if (modal.classList.contains('modal_active')) {
    modal.classList.remove('modal_active');
    document.cookie = 'popupState=' + encodeURIComponent(true);
  } else {
    modal.classList.add('modal_active');
  }
});
