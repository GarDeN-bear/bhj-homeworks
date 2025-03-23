let book = document.getElementById('book');
let fontSizes = Array.from(document.getElementsByClassName('font-size'));

fontSizes.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();

    fontSizes.forEach((font) => {
      book.classList.remove(font.classList[1]);
      font.classList.remove('font-size_active');
    });

    book.classList.add(el.classList[1]);
    el.classList.add('font-size_active');
  });
});