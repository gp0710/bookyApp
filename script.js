const form = document.querySelector("form")

let library = [];
const submit = document.querySelector("input[type=submit]")
const stats = document.querySelector("#stats")

let newBook = new Book()


//constructor
function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

form.addEventListener('submit', addBookToLibrary)


function addBookToLibrary(e) {
    e.preventDefault();
    newBook.title = form.title.value
    newBook.author = form.author.value
    newBook.pages = form.pages.value
    newBook.status = form.status.value
    
    library.push(newBook)

    const ul = document.createElement('ul')
    stats.appendChild(ul)
    const li = document.createElement('li')
    ul.appendChild(li)
    
    for (let i = 0; i < library.length; i++){
        li.textContent = `${library[i].title},
                        ${library[i].author},
                        ${library[i].pages},
                        ${library[i].status}`

    }
}







