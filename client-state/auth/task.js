let form = document.getElementById('signin__form');

if (localStorage.getItem('userId')) {
  swapActiveElements();
  document.getElementById('user_id').textContent =
      localStorage.getItem('userId');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let formData = new FormData(form);

  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

  xhr.addEventListener('load', () => {
    handleResponse(xhr.response);
  });

  xhr.responseType = 'json';
  xhr.send(formData);
});

function swapActiveElements() {
  if (document.getElementById('welcome').classList.contains('welcome_active')) {
    document.getElementById('welcome').classList.remove('welcome_active');
    document.getElementById('signin').classList.add('signin_active');
  } else {
    document.getElementById('welcome').classList.add('welcome_active');
    document.getElementById('signin').classList.remove('signin_active');
  }
}

function handleResponse(response) {
  if (response.success) {
    document.getElementById('user_id').textContent = response.user_id;
    localStorage.setItem('userId', response.user_id);
    swapActiveElements();
  } else {
    alert('Неверный логин/пароль');
    location.reload();
  }
  form.reset();
}

document.getElementById('signout__btn').addEventListener('click', () => {
  localStorage.removeItem('userId');
  swapActiveElements();
});