let form = document.getElementById('signin__form');
if (localStorage.getItem('userId')) {
  document.getElementById('signin').classList.remove('signin_active');
  document.getElementById('welcome').classList.add('welcome_active');
  document.getElementById('user_id').textContent =
      localStorage.getItem('userId');
} else {
  document.getElementById('signin').classList.add('signin_active');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let formData = new FormData(form);

  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      handleResponse(JSON.parse(xhr.response));
    }
  });


  xhr.send(formData);
});

function handleResponse(response) {
  if (response.success) {
    document.getElementById('welcome').classList.add('welcome_active');
    document.getElementById('user_id').textContent = response.user_id;
    localStorage.setItem('userId', response.user_id);
    document.getElementById('signin').classList.remove('signin_active');
  } else {
    alert('Неверный логин/пароль');
    location.reload();
  }
}

document.getElementById('signout__btn').addEventListener('click', () => {
  localStorage.removeItem('userId');
  location.reload();
});