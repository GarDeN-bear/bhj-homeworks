let hasTooltipsCollection = document.getElementsByClassName('has-tooltip');
let hasTooltipsArray = Array.from(hasTooltipsCollection);

function createSpecialTooltip() {
  let tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = '';
  tooltip.setAttribute('data-position', 'bottom');
  hasTooltipsCollection.item(0).insertAdjacentElement('afterEnd', tooltip);
}

createSpecialTooltip();

hasTooltipsArray.forEach((el, i) => {
  let tooltip = document.querySelector('.tooltip');
  el.addEventListener('click', function(event) {
    event.preventDefault();

    let prevTooltipText = tooltip.textContent;
    tooltip.textContent = el.title;
    if ((prevTooltipText === tooltip.textContent) &&
        tooltip.classList.contains('tooltip_active')) {
      tooltip.classList.remove('tooltip_active');
    } else {
      tooltip.classList.add('tooltip_active');
    }

    switch (tooltip.getAttribute('data-position')) {
      case 'top':
        tooltip.style.left = el.offsetLeft.toString() + 'px';
        tooltip.style.top =
            (el.offsetTop - el.offsetHeight - 10).toString() + 'px';
        break;
      case 'left':
        tooltip.style.left =
            (el.offsetLeft - tooltip.offsetWidth).toString() + 'px';
        tooltip.style.top = el.offsetTop.toString() + 'px';
        break;
      case 'right':
        tooltip.style.left =
            (el.offsetLeft + el.offsetWidth + 1).toString() + 'px';
        tooltip.style.top = el.offsetTop.toString() + 'px';
        break;
      case 'bottom':
        tooltip.style.left = el.offsetLeft.toString() + 'px';
        tooltip.style.top = (el.offsetTop + el.offsetHeight).toString() + 'px';
        break;
    }
  });
});