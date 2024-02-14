let form = document.querySelector('form');
let noteContainer = document.querySelector('#notes-container');
let arrowDown = document.createElement('span');
arrowDown.textContent = '🔽';
arrowDown.style.cursor = 'pointer';

let markAllButton = document.querySelector('#mark-all');
let clearCompletedButton = document.querySelector('#clear-completed');
let itemsLeftCounter = document.querySelector('#items-left');

arrowDown.onclick = () => {
    setNoteStatus();
};

form.onsubmit = async event => {
    event.preventDefault();
    form.insertAdjacentElement('afterbegin', arrowDown);
    let input = form.elements.newNote.value;
    let note = createNote(input);
    noteContainer.appendChild(note);
}

function createNote(input) {

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    let note = document.createElement('p');
    note.textContent = input;
    note.className = 'active';

    let todos = document.createElement('li');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.onclick = () => {
        todos.remove();
    }

    todos.appendChild(checkbox);
    todos.appendChild(note);
    todos.appendChild(deleteButton);

    return todos;
}
function setNoteStatus() {
    let notes = document.querySelectorAll('.active');
    let setClass = 'completed';

    if (notes.length === 0) {
        notes = document.querySelectorAll('.completed')
        setClass = 'active';
    }

    notes.forEach(note => {
    note.className = setClass;
    });
}