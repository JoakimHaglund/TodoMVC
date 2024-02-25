let form = document.querySelector('form');
let noteContainer = document.querySelector('#notes-container');
let arrowDown = document.querySelector('#complete-all');
let itemsLeftCounter = document.querySelector('#items-left');
let displayClass = 'all';

// Event listener for the arrow-down button to complete all notes
arrowDown.onclick = () => {
    SetNoteStatus();
    UpdateView();
};

// Event listener for form submission to add a new note
form.onsubmit = async event => {
    event.preventDefault();
    let input = form.elements.newNote.value;
    if (input) {
        let note = CreateNote(input);
        noteContainer.appendChild(note);
    }

    UpdateView();
    form.reset();
};

// Function to update the view
function UpdateView() {
    let notes = document.querySelectorAll('#notes-container > li')
    let footer = document.querySelector('#note-footer');

    // If notes exist, update the view
    if (notes.length != 0) {
        footer.classList.remove('hidden');
        arrowDown.classList.remove('not-visible');
        DisplayElementsWithClass(displayClass);
        UpdateItemsLeftCounter();
        FooterButtons();
    }
    // Hide elements if there are no notes
    if (notes.length == 0) {
        arrowDown.classList.add('not-visible');
        footer.classList.add('hidden');
    };
    console.log('UpdateView')
}

// Function to create a new note element
function CreateNote(input) {
    // Create elements required for a new note
    let note = document.createElement('li');
    let checkbox = document.createElement('input');
    let textElement = document.createElement('p');
    let deleteButton = document.createElement('button');

    // Setup element contents/classes
    checkbox.type = 'checkbox';
    textElement.textContent = input;
    note.className = 'active';
    deleteButton.textContent = '❌';

    // Add buttons functionality
    checkbox.onchange = () => {
        if (checkbox.checked) {
            note.className = 'completed';
        }
        else {
            note.className = 'active';
        };
        UpdateView();
    };
    deleteButton.onclick = () => {
        note.remove();
        UpdateView();
    };

    note.appendChild(checkbox);
    note.appendChild(textElement);
    note.appendChild(deleteButton);
    return note;
};

// Function to toggle the status of notes
function SetNoteStatus() {
    let notes = document.querySelectorAll('.active');
    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    let setClass = 'completed';

    // If no 'active' notes exist get all completed notes instead
    if (notes.length === 0) {
        notes = document.querySelectorAll('.completed')
        setClass = 'active';
    };

    notes.forEach(note => {
        note.className = setClass;

    });

    checkboxes.forEach(checkbox => {
        if (setClass === 'completed') {
            checkbox.checked = true;
        }
        else {
            checkbox.checked = false;
        };
    });
};

// Function to update the items left counter
function UpdateItemsLeftCounter() {
    let itemsLeft = document.querySelectorAll('.active');
    if (itemsLeft.length === 1) {
        itemsLeftCounter.textContent = itemsLeft.length + ' item left';
    }
    else {
        itemsLeftCounter.textContent = itemsLeft.length + ' items left';
    };
};

// Function to highlight the active footer button
function SetFooterHighlight(highlightButton) {
    filterButtons = document.querySelectorAll('#filters button');
    filterButtons.forEach(button => {
        button.classList.remove('highlight');
    });
    highlightButton.classList.add('highlight');
}

// Function to handle footer buttons
function FooterButtons() {
    let showAllButton = document.querySelector('#show-all');
    let showActiveButton = document.querySelector('#show-active');
    let showCompletedButton = document.querySelector('#show-completed');
    let clearCompletedButton = document.querySelector('#clear-completed');

    // Event listeners for footer buttons
    showAllButton.onclick = () => {
        displayClass = 'all';
        DisplayElementsWithClass(displayClass);
        SetFooterHighlight(showAllButton)
        UpdateView();
    };
    showActiveButton.onclick = () => {
        displayClass = 'active';
        DisplayElementsWithClass(displayClass);
        SetFooterHighlight(showActiveButton)
        UpdateView();
    };
    showCompletedButton.onclick = () => {
        displayClass = 'completed';
        DisplayElementsWithClass(displayClass);
        SetFooterHighlight(showCompletedButton)
        UpdateView();
    };
    clearCompletedButton.onclick = () => {
        let completedNotes = document.querySelectorAll('.completed');
        completedNotes.forEach(note => {
            note.closest('li').remove();
        });
        UpdateView();
    };

    // Toggle visibility of clear completed button based on completed notes
    if (document.querySelectorAll('#notes-container .completed').length > 0) {
        clearCompletedButton.classList.remove('not-visible');
    }
    else {
        clearCompletedButton.classList.add('not-visible');
    };
};

// Function to display elements with a specific classname and hide others
function DisplayElementsWithClass(className) {
    let elements = document.querySelectorAll('#notes-container li');

    elements.forEach(element => {
        if (element.classList.contains(className) || className === 'all') {
            element.classList.remove('hidden');
        }
        else {
            element.classList.add('hidden');
        };

    });
};

