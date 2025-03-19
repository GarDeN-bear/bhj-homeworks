let dropdown = Array.from(document.getElementsByClassName('dropdown'))[0];
let dropdownList =
    Array.from(document.getElementsByClassName('dropdown__list'))[0];
let dropdownItems =
    Array.from(document.getElementsByClassName('dropdown__item'));

let dropdownValue =
    Array.from(document.getElementsByClassName('dropdown__value'))[0];

dropdownItems.forEach(element => {
  element.addEventListener('click', function(event) {
    dropdownValue.textContent = this.textContent;
    event.preventDefault();
  });
});


dropdown.addEventListener('click', () => {
  if (!dropdownList.classList.contains('dropdown__list_active')) {
    dropdownList.classList.add('dropdown__list_active');
  } else {
    dropdownList.classList.remove('dropdown__list_active');
  }
});
