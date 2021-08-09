const com_premises_rows = document.querySelectorAll('.com_premises_row');
const com_premises__modal = document.getElementById('com_premises__modal');
const com_premises__modal__img = document.getElementById('com_premises__modal__img');

com_premises_rows.forEach(row => {
  row.addEventListener('click', () => {
    const value = row.getAttribute("value");
    com_premises__modal.classList.add('open')
    com_premises__modal__img.setAttribute('src', value);
  })
});

com_premises__modal.addEventListener('click', () => {
  com_premises__modal.classList.remove('open')
})