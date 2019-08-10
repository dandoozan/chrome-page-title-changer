import { readFromStorage, writeToStorage, clearStorage } from './helpers/chrome';

function displayMessage(elId, msg) {
    var el = document.getElementById(elId);
    el.textContent = msg;
    setTimeout(function() {
        el.textContent = '';
    }, 750);
}

// Saves options to chrome.storage
async function saveOptions() {
    //todo: handle case when the textarea doesnt contain valid json
    await writeToStorage({
        options: JSON.parse(document.getElementById('optionsTextArea').value),
    });

    // Update status to let user know options were saved
    displayMessage('saveStatus', 'Options saved.');
}

// Restores preferences stored in chrome.storage
async function restoreOptions() {
    let { options } = await readFromStorage({ options: {} });

    //display the options on the page
    document.getElementById('optionsTextArea').value = JSON.stringify(
        options,
        null,
        '    '
    );
}

async function clearOptions() {
    await clearStorage();
    await restoreOptions();
    displayMessage('clearStatus', 'Options cleared.');
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('saveButton').addEventListener('click', saveOptions);
document.getElementById('clearButton').addEventListener('click', clearOptions);
