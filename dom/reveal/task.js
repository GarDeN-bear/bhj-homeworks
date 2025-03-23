let reveals = Array.from(document.getElementsByClassName('reveal'));

function checkRevealsActivity() {
  reveals.forEach(element => {
    const {top, bottom} = element.getBoundingClientRect();
    if (((bottom < 0) || (top > window.innerHeight))) {
      if (element.classList.contains('reveal_active')) {
        element.classList.remove('reveal_active');
        console.log('remove');
      }
      return;
    }

    if (!element.classList.contains('reveal_active')) {
      element.classList.add('reveal_active');
      console.log('add');
    }
  });
}

document.addEventListener('scroll', function(event) {
  checkRevealsActivity();
});