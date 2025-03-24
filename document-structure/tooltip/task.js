let hasTooltipsCollection = document.getElementsByClassName('has-tooltip');
let hasTooltipsArray = Array.from(hasTooltipsCollection);
let previousDiv;

hasTooltipsArray.forEach((el, i) => {
  let div = document.createElement('div');
  div.textContent = el.title;
  el.removeAttribute('title');
  div.setAttribute('data-position', 'right');
  div.classList.add('tooltip');
  hasTooltipsCollection.item(i).insertAdjacentElement('afterEnd', div);
  previousDiv = div;
  el.addEventListener('click', function(event) {
    event.preventDefault();

    if (div.classList.contains('tooltip_active')) {
      div.classList.remove('tooltip_active');
    } else {
      previousDiv.classList.remove('tooltip_active');
      div.classList.add('tooltip_active');
    }

    previousDiv = div;
    switch (div.getAttribute('data-position')) {
      case 'top':
        div.style.left = el.offsetLeft.toString() + 'px';
        div.style.top = (el.offsetTop - el.offsetHeight - 10).toString() + 'px';
        break;
      case 'left':
        div.style.left = (el.offsetLeft - div.offsetWidth).toString() + 'px';
        div.style.top = el.offsetTop.toString() + 'px';
        break;
      case 'right':
        div.style.left = (el.offsetLeft + el.offsetWidth + 1).toString() + 'px';
        div.style.top = el.offsetTop.toString() + 'px';
        break;
      case 'bottom':
        div.style.left = el.offsetLeft.toString() + 'px';
        div.style.top = (el.offsetTop + el.offsetHeight).toString() + 'px';
        break;
    }
  });
});