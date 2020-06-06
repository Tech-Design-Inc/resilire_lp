const btn = document.querySelector('.menu');
const ul = document.querySelector('ul');
const span = document.querySelector('span');

btn.addEventListener('click', () => {
  ul.classList.toggle('open-menu')
  if (span.className === 'btn-menu') {
    span.className = 'css-cancel';
  } else {
    span.className = 'btn-menu';
  }
});
