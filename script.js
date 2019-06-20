const prefix = ['I have a feeling', 'I claim 100%', 'It seems to me', 'To be honest', 'I am sure'];
const childsNames = ['John', 'Kate', 'Mary', 'Jennifer', 'William', 'George', 'Bruce', 'Wesley', 'Cristina', 'Becky'];

domElements = {
  buttonDraw: document.querySelector('.button__draw'),
  buttonClear: document.querySelector('.button__clear'),
  response: document.querySelector('.response')
}

domElements.buttonDraw.addEventListener('click', function () {
  let response = '';

  response += prefix[Math.floor(Math.random() * prefix.length)];
  response += ', that the best will be the name ';
  response += childsNames[Math.floor(Math.random() * childsNames.length)];

  domElements.response.textContent = response;
  console.log(domElements.response.textContent)
});

domElements.buttonClear.addEventListener('click', function () {
  domElements.response.textContent = '';
});