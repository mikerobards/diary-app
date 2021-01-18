const entryForm = document.getElementById('entryForm')

console.log(entryForm)

function addEntryToDOM(event) {
    event.preventDefault();
}

entryForm.addEventListener('submit', addEntryToDOM)