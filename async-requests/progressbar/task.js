let form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let formData = new FormData(form);

  let progress = document.getElementById('progress');

  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  xhr.upload.addEventListener('progress', (event) => {
    if (event.lengthComputable) {
      console.log(event.loaded, event.total);
      progress.value = (event.loaded / event.total) * 100;
    }
  });


  xhr.send(formData);
});
