const entryForm = document.getElementById('entryForm')
const entriesSection = document.getElementById('entries')
const entryTextbox = document.getElementsByClassName('entry-textbox')



function addEntryToDOM(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div')
    entryDiv.className = 'single-entry'
    entryDiv.innerHTML = entryTextbox[0].value
    entriesSection.appendChild(entryDiv)
    entryTextbox[0].value = '';
}

entryForm.addEventListener('submit', addEntryToDOM)