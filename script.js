const checkBox = document.querySelector('#read');
const inputs = document.querySelectorAll('.text');
const formButton = document.querySelector('.form-button');
const formToggle = document.querySelector('.book-form');
const addBook = document.querySelector('.btn');
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

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

addBook.addEventListener('click', () => {
    myLibrary.push(new Book(inputs[0].value, inputs[1].value,
        inputs[2].value, checkBox.checked));

    myLibrary.forEach(entry => {
        console.log(entry.title, entry.author, entry.pages, entry.read);
    });
});
