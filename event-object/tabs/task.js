let tabs = Array.from(document.getElementsByClassName('tab'));
let tabsContent = Array.from(document.getElementsByClassName('tab__content'));

for (let i = 0; i < tabs.length; ++i) {
  tabs[i].addEventListener('click', () => {
    for (let j = 0; j < tabs.length; ++j) {
      tabs[j].classList.remove('tab_active');
      tabsContent[j].classList.remove('tab__content_active');
    }
    tabs[i].classList.add('tab_active');
    tabsContent[i].classList.add('tab__content_active');
  });
}