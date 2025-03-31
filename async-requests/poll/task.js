let xhrGet = new XMLHttpRequest();
let xhrSend = new XMLHttpRequest();
let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');

function handleGetResponse(response) {
  pollTitle.textContent = response.data.title;
  Object.entries(response.data.answers).forEach((el, i) => {
    let button = document.createElement('button');
    button.classList.add('poll__answer');
    button.textContent = el[1];
    button.addEventListener('click', () => {
      xhrSend.open(
          'POST', 'https://students.netoservices.ru/nestjs-backend/poll');
      xhrSend.setRequestHeader(
          'Content-type', 'application/x-www-form-urlencoded');
      xhrSend.send(`vote=${response.id}&answer=${i}`);
      alert('Спасибо, ваш голос засчитан!');
    });
    pollAnswers.append(button);
  });
}

function handlePostResponse(response) {
  pollAnswers.innerHTML = '';
  let total = 0;
  Object.entries(response.stat).forEach((el) => {
    total += Number(el[1]['votes']);
  });
  Object.entries(response.stat).forEach((el) => {
    pollAnswers.insertAdjacentHTML(
        'afterbegin',
        `<div>${el[1]['answer']}: ${
            (el[1]['votes'] / total * 100).toFixed(2)}%</div>`);
  });
}

xhrGet.addEventListener('readystatechange', () => {
  if (xhrGet.readyState === xhrGet.DONE) {
    handleGetResponse(JSON.parse(xhrGet.responseText));
  }
});

xhrSend.addEventListener('readystatechange', () => {
  if (xhrSend.readyState === xhrSend.DONE) {
    handlePostResponse(JSON.parse(xhrSend.responseText));
  }
});

xhrGet.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhrGet.send();