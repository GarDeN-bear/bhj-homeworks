const xhr = new XMLHttpRequest();
let loader = document.getElementById('loader');
let id;

function handleCourses(response) {
  let items = document.getElementById('items');
  let valuteEntries = Object.entries(response.response.Valute);

  valuteEntries.sort(
      (a, b) => b[1]['CharCode'].localeCompare(a[1]['CharCode']));

  valuteEntries.forEach(el => {
    let code = el[1]['CharCode'];
    let value = el[1]['Value'];
    let currency = el[1]['Name'];
    items.insertAdjacentHTML('afterbegin', `
        <div class="item">
            <div class="item__code">
                ${code}
            </div>
            <div class="item__value">
                ${value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>`);
  });
  loader.classList.remove('loader_active');

  let delay = 10000;
  id = setTimeout(() => {
    items.innerHTML = '';
    makeRequest();
  }, delay);
}

function makeRequest() {
  loader.classList.add('loader_active');
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      clearTimeout(id);
      handleCourses(JSON.parse(xhr.responseText));
    }
  });

  xhr.open(
      'GET',
      'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

  xhr.send();
}

makeRequest();
