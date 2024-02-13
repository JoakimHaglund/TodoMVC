


let form = document.querySelector('form');
let noteContainer = document.querySelector('#notes-container');

form.onsubmit = async event => {
    event.preventDefault();

    let input = form.elements.newNote.value;
    let note = createNote(input);

    noteContainer.appendChild(note);
}
function createNote(input) {

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    let note = document.createElement('p');
    note.textContent = input;

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