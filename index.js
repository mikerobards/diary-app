const entryForm = document.getElementById('entryForm')
const entriesSection = document.getElementById('entries')
const entryTextbox = document.getElementsByClassName('entry-textbox')



function addEntryToDOM(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div')
    // entryDiv.classList.add('single-entry')
    entryDiv.className = 'single-entry'
    entryDiv.innerHTML = entryTextbox[0].value
    // console.log(entryTextbox[0].value)
    entriesSection.appendChild(entryDiv)
}

entryForm.addEventListener('submit', addEntryToDOM)