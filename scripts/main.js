
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        let note = document.createElement('p');
    
        let form = document.querySelector('form');
        let noteContainer = document.querySelector('#notes-container');
        
        form.onsubmit = async event => {
            event.preventDefault();

            let input = form.elements.newNote.value;
            console.log(input);
            note.textContent = input;

            noteContainer.appendChild(checkbox);
            noteContainer.appendChild(note);
        }
