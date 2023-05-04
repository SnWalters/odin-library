const checkBox = document.querySelector('#read');
const formButton = document.querySelector('.form-button');
const formToggle = document.querySelector('.book-form');
let myLibrary = [];

formButton.addEventListener('click', () => {
    formButton.classList.toggle('green');
    formButton.classList.toggle('red');
    if (formButton.textContent === '+') {
        formButton.textContent = '-';
    } else {
        formButton.textContent = '+';
    }

    formToggle.classList.toggle('close');
    formToggle.classList.toggle('open');
});

checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
        console.log('checked')
    }
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
