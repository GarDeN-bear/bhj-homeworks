let book = document.getElementById('book');
let fontSizes =
    Array.from(document.getElementsByClassName('book__control_font-size')[0]
                   .getElementsByClassName('font-size'));
let textColors =
    Array.from(document.getElementsByClassName('book__control_color')[0]
                   .getElementsByClassName('color'));

let backgroundColors =
    Array.from(document.getElementsByClassName('book__control_background')[0]
                   .getElementsByClassName('color'));

function switchMode(elements, activeClass) {
  elements.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      elements.forEach((elem) => {
        book.classList.remove(elem.classList[1]);
        elem.classList.remove(activeClass);
      });

      book.classList.add(el.classList[1]);
      el.classList.add(activeClass);
    });
  });
}

switchMode(fontSizes, 'font-size_active');
switchMode(textColors, 'color_active');
switchMode(backgroundColors, 'color_active');
