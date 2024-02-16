let form = document.querySelector('form');
let noteContainer = document.querySelector('#notes-container');
let arrowDown = document.querySelector('#complete-all');

let itemsLeftCounter = document.querySelector('#items-left');


arrowDown.onclick = () => {
    setNoteStatus();
    //update count
    updateItemsLeft();
};

form.onsubmit = async event => {
    event.preventDefault();
    form.insertAdjacentElement('afterbegin', arrowDown);
    let input = form.elements.newNote.value;
    let note = createNote(input);
    noteContainer.appendChild(note);

    //show hidden elements
    let footer = document.querySelector('.note-footer');
    footer.classList.remove('hidden');
    arrowDown.classList.remove('not-visible');


    //update count
    updateItemsLeft();

    form.reset();
}

function createNote(input) {

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.onchange = () => {
        if (checkbox.checked) {
            note.className = 'completed';
        }
        else {
            note.className = 'active';
        }
        //update count
        updateItemsLeft();
    }

    let note = document.createElement('p');
    note.textContent = input;
    note.className = 'active';

    let todos = document.createElement('li');
    let deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.onclick = () => {
        todos.remove();
        updateItemsLeft();
    }
        

    todos.appendChild(checkbox);
    todos.appendChild(note);
    todos.appendChild(deleteButton);

    return todos;
}
function setNoteStatus() {
    let notes = document.querySelectorAll('.active');
    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    let setClass = 'completed';

    if (notes.length === 0) {
        notes = document.querySelectorAll('.completed')
        setClass = 'active';
    }

    notes.forEach(note => {
        note.className = setClass;

    });
    checkboxes.forEach(checkbox => {

        if (setClass === 'completed') {
            checkbox.checked = true;
        }
        else {
            checkbox.checked = false;
        }
    });
}
function updateItemsLeft() {
    let itemsLeft = document.querySelectorAll('.active');

    let showAllButton = document.querySelector('#show-all');
    let showActiveButton = document.querySelector('#show-active');
    let showCompletedButton = document.querySelector('#show-completed');
    let clearCompletedButton = document.querySelector('#clear-completed');

    showAllButton.onclick = () => {
        HideElementsWithClass('all');
        updateItemsLeft();
    };
    showActiveButton.onclick = () => {
        HideElementsWithClass('active');
        updateItemsLeft();
    };
    showCompletedButton.onclick = () => {
        HideElementsWithClass('completed');
        updateItemsLeft();
    };
    if(document.querySelectorAll('#notes-container .completed').length > 0){
        clearCompletedButton.classList.remove('not-visible');
    }
    else{
        clearCompletedButton.classList.add('not-visible');
    }

    //Hide elements if there are no notes
    let notes = document.querySelectorAll('#notes-container > li')
    if (notes.length === 0) {
        let footer = document.querySelector('.note-footer');
        footer.classList.add('hidden');
        arrowDown.classList.add('not-visible');
        clearCompletedButton.classList.add('not-visible');
    }


    clearCompletedButton.onclick = () => {
        let completedNotes = document.querySelectorAll('.completed');
    
        completedNotes.forEach(note => {
            note.closest('li').remove();
        });
    
        updateItemsLeft();
    };

    if (itemsLeft.length === 1) {
        itemsLeftCounter.textContent = itemsLeft.length + ' item left';
    }
    else {
        itemsLeftCounter.textContent = itemsLeft.length + ' items left';
    }
};

/*
get list of li with class 
if class is what we don't want 	-> append hidden class
if class is what we  want 		-> remove hidden class
*/
function HideElementsWithClass(className) {
    let elements = document.querySelectorAll('#notes-container p');

    elements.forEach(element => {
        if (element.classList.contains(className)) {
            element.closest('li').classList.remove('hidden');
        }
        else if (className === 'all') {
            element.closest('li').classList.remove('hidden');
        }
        else {
            element.closest('li').classList.add('hidden');
        }

    });
}

