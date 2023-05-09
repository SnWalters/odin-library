const checkBox = document.querySelector('#read');
const inputs = document.querySelectorAll('.text');
const formButton = document.querySelector('.form-button');
const formToggle = document.querySelector('.book-form');
const addBook = document.querySelector('.btn');
const main = document.querySelector('main');
let myLibrary = [];

const removeBook = (title) => {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === title) {
            myLibrary.splice(i, 1);
            break;
        };
    };
    displayLibrary();
}

const displayLibrary = () => {
    main.textContent = "";

    myLibrary.forEach((entry) => {
        const entryContainer = document.createElement('div');
        entryContainer.classList = 'library-entry';

        let para = document.createElement('p');
        para.classList = 'title';
        para.textContent = `Title: ${entry.title}`;
        entryContainer.append(para);

        para = document.createElement('p');
        para.classList = 'author';
        para.textContent = `Author: ${entry.author}`;
        entryContainer.append(para);

        para = document.createElement('p');
        para.classList = 'pages';
        para.textContent = `Total Pages: ${entry.pages}`;
        entryContainer.append(para);

        para = document.createElement('p');
        if (entry.read) {
            para.textContent = 'Have Read';
            para.classList = 'have-read';
        } else {
            para.textContent = 'Not Yet Read';
            para.classList = 'not-read';
        }
        para.addEventListener('click', () => {
            if (para.textContent === 'Have Read') {
                para.textContent = 'Not Yet Read';
            } else {
                para.textContent = 'Have Read'
            }
            para.classList.toggle('have-read');
            para.classList.toggle('not-read');
        });
        entryContainer.append(para);

        let remove = document.createElement('button');
        remove.classList = 'remove-button';
        remove.textContent = "Remove Book";
        entryContainer.append(remove);
        remove.addEventListener('click', () => {
            removeBook(entry.title);
        });

        main.append(entryContainer);
    });
}

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

    displayLibrary();
    
});
